import { useReveal } from "../hooks/useReveal";
import { useTilt } from "../hooks/useTilt";
import SectionHeading from "../components/SectionHeading";
import {
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaDatabase,
    FaTools,
    FaRobot,
    FaClipboardCheck,
    FaNetworkWired,
    FaLayerGroup,
} from "react-icons/fa";

const SKILL_CATEGORIES = [
    {
        title: "Frontend Development",
        icon: FaLaptopCode,
        skills: [
            "HTML5",
            "CSS3",
            "Responsive Design",
            "JavaScript",
            "TypeScript",
            "Angular",
            "React.js",
            "Next.js",
            "Nuxt",
        ],
    },
    {
        title: "Backend Development",
        icon: FaServer,
        skills: ["Node.js", "Express.js", "FastAPI", "Django", "Django REST Framework (DRF)", "REST APIs"],
    },
    {
        title: "Mobile Development",
        icon: FaMobileAlt,
        skills: ["Android Studio", "Android Application Development", "Flutter"],
    },
    {
        title: "Databases",
        icon: FaDatabase,
        skills: ["MySQL", "MongoDB", "Mongoose", "Firebase"],
    },
    {
        title: "Software Engineering",
        icon: FaClipboardCheck,
        skills: [
            "Clean Code",
            "SOLID Principles",
            "Agile Methodology",
            "Scrum",
            "Software Testing",
            "Technical Documentation",
        ],
    },
    {
        title: "DevOps & Tools",
        icon: FaTools,
        skills: ["Git", "GitHub", "Docker", "CI/CD Fundamentals", "Deployment & Hosting"],
    },
    {
        title: "AI & Cybersecurity",
        icon: FaRobot,
        skills: ["Prompt Engineering", "AI API Integration", "LLM & RAG", "AI Fundamentals", "Cybersecurity"],
    },
    {
        title: "Systems & IT Support",
        icon: FaNetworkWired,
        skills: [
            "Windows Server",
            "Software Installation & Configuration",
            "Technical Support",
            "Network Troubleshooting",
        ],
    },
    {
        title: "Additional",
        icon: FaLayerGroup,
        skills: ["Java", "Web Design", "Robotics", "Microsoft Office (Excel, Word, PowerPoint)"],
    },
];

function SkillCard({ category }) {
    const Icon = category.icon;
    const { ref: tiltRef, handleMove, handleLeave } = useTilt({ max: 6, scale: 1.015 });

    return (
        <div
            ref={tiltRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="tilt relative card-surface rounded-2xl p-6 hover:border-[var(--color-signal)]/40 transition-colors duration-300"
        >
            <span className="tilt-glare rounded-2xl" />
            <div className="tilt-layer">
                <div className="flex items-center gap-3 mb-5">
                    <span className="w-9 h-9 rounded-lg bg-[var(--color-signal)]/10 text-[var(--color-signal)] flex items-center justify-center">
                        <Icon size={16} />
                    </span>
                    <h4 className="font-semibold text-[var(--color-text)]">
                        {category.title}
                    </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-ink)]/60 px-3 py-1 text-xs text-[var(--color-muted)]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)]" />
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const ref = useReveal();

    return (
        <section id="skills" className="relative py-24 md:py-32 bg-[var(--color-ink-soft)]">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading
                    tag="skills"
                    title="What I bring"
                    accent="to the table"
                    description="A cross-stack toolkit for taking a product from idea to a deployed, maintainable release."
                />

                <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SKILL_CATEGORIES.map((category) => (
                        <SkillCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
