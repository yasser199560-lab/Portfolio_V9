import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";

const SPECS = [
    {
        label: "Education",
        value: "B.Sc. Information Technology",
        detail: "Lebanese International University",
    },
    {
        label: "Experience",
        value: "Full-Stack Developer Intern",
        detail: "The Digital Hub",
    },
    {
        label: "Location",
        value: "Based in Lebanon",
        detail: "Open to remote & on-site work",
    },
    {
        label: "Focus",
        value: "Web · Mobile · AI",
        detail: "End-to-end product delivery",
    },
];

function About() {
    const ref = useReveal();

    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading tag="about" title="Get to know" accent="me" align="left" />

                <div ref={ref} className="reveal grid lg:grid-cols-[1.05fr_0.95fr] gap-14">
                    <div className="space-y-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            I'm a <strong className="text-[var(--color-text)]">Full-Stack Web Developer</strong> with a
                            Bachelor's degree in Information Technology from the{" "}
                            <strong className="text-[var(--color-text)]">Lebanese International University</strong>. I'm
                            passionate about building modern, scalable, and user-focused web applications, and I'm
                            committed to continuously learning new technologies and best practices.
                        </p>
                        <p>
                            Currently, I'm a{" "}
                            <strong className="text-[var(--color-text)]">Full-Stack Developer Intern at The Digital Hub</strong>,
                            where I work on real-world projects using modern frontend and backend technologies. My
                            experience spans building responsive web applications, developing RESTful APIs, designing
                            databases, implementing authentication and authorization, and collaborating in Agile
                            development environments.
                        </p>
                        <p>
                            My technical toolkit includes{" "}
                            <strong className="text-[var(--color-text)]">React.js, Next.js, Node.js, and Express.js</strong>,
                            along with Python (FastAPI), Django REST Framework, MongoDB, and MySQL — backed by REST
                            APIs, JWT authentication, RBAC, the MERN stack, clean code and SOLID principles, and CI/CD
                            fundamentals.
                        </p>
                        <p>
                            Alongside development, I've worked as an{" "}
                            <strong className="text-[var(--color-text)]">IT Technician with UNRWA</strong>, providing
                            technical support and troubleshooting, and previously served as a{" "}
                            <strong className="text-[var(--color-text)]">Web Development Trainer at SHAHD Association</strong>,
                            where I built the organization's website and mobile app while training students in web
                            development and digital literacy.
                        </p>
                        <p>
                            I enjoy solving complex problems, writing clean, maintainable code, and building
                            applications that create real value — and I'm always open to connecting, collaborating,
                            and exploring new opportunities as a Full-Stack Developer.
                        </p>
                    </div>

                    <div className="card-surface rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-[var(--color-line)] font-mono text-xs text-[var(--color-signal)]">
                            profile.json
                        </div>
                        <dl>
                            {SPECS.map((spec, i) => (
                                <div
                                    key={spec.label}
                                    className={`px-6 py-5 grid grid-cols-[auto_1fr] gap-x-4 items-start ${
                                        i !== SPECS.length - 1 ? "border-b border-[var(--color-line)]" : ""
                                    }`}
                                >
                                    <dt className="font-mono text-xs text-[var(--color-muted)] pt-1 whitespace-nowrap">
                                        {spec.label}
                                    </dt>
                                    <dd>
                                        <p className="text-[var(--color-text)] font-medium">{spec.value}</p>
                                        <p className="text-sm text-[var(--color-muted)]">{spec.detail}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
