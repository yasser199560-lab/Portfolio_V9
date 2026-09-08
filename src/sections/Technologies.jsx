import { useReveal } from "../hooks/useReveal";
import { useTilt } from "../hooks/useTilt";
import SectionHeading from "../components/SectionHeading";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
} from "react-icons/fa";

import {
    SiTypescript,
    SiNextdotjs,
    SiNuxt,
    SiExpress,
    SiDjango,
    SiFastapi,
    SiFlutter,
    SiFirebase,
    SiMysql,
    SiMongodb,
    SiDocker,
} from "react-icons/si";

const TECHNOLOGIES = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Angular", icon: FaAngular },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Nuxt", icon: SiNuxt },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Django", icon: SiDjango },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flutter", icon: SiFlutter },
    { name: "Firebase", icon: SiFirebase },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Java", icon: FaJava },
];

function TechTile({ tech }) {
    const Icon = tech.icon;
    const { ref: tiltRef, handleMove, handleLeave } = useTilt({ max: 14, scale: 1.06 });

    return (
        <div
            ref={tiltRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="tilt group relative card-surface rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[var(--color-signal)]/40 transition-colors duration-300"
        >
            <span className="tilt-glare rounded-xl" />
            <div className="tilt-layer flex flex-col items-center gap-3">
                <Icon
                    size={28}
                    className="text-[var(--color-muted)] group-hover:text-[var(--color-signal)] transition-colors duration-300"
                />
                <span className="text-xs text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300 text-center">
                    {tech.name}
                </span>
            </div>
        </div>
    );
}

function Technologies() {
    const ref = useReveal();

    return (
        <section id="technologies" className="relative py-24 md:py-32">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading tag="stack" title="Technologies I" accent="work with" />

                <div
                    ref={ref}
                    className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                >
                    {TECHNOLOGIES.map((tech) => (
                        <TechTile key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
