import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import pharmanexPreview from "../assets/images/pharmanex-preview.webp";
import talabatiPreview from "../assets/images/talabaty-preview.webp";
import travelialPreview from "../assets/images/travelia-preview.webp";
import zentryPreview from "../assets/images/zentry-preview.webp";
import insightflowPreview from "../assets/images/insightflow-preview.webp";

const PROJECTS = [
    {
        title: "Pharmanex",
        description:
            "Unified platform for managing pharmacy operations — inventory, sales, finance and reporting in one system, built full-stack with Django.",
        stack: ["Django", "Python", "PostgreSQL"],
        link: "https://pharmanex.onrender.com/",
        image: pharmanexPreview,
        imageFit: "screen",
    },
    {
        title: "InsightFlow",
        description:
            "Sales analytics platform that turns a business owner's sales export into a clear dashboard and plain-language recommendations, then publishes a sanitized version of the finding to a public insight feed for other businesses to learn from.",
        stack: ["Nuxt", "Dashboard", "Data Analytics"],
        link: "https://insightflow-o6ve.onrender.com/",
        image: insightflowPreview,
        imageFit: "screen",
    },
    {
        title: "Zentry",
        description:
            "Access management platform handling registration, sign-in, and role-based permissions, with a client role for self-service profiles and an admin dashboard to search, filter, and manage every account.",
        stack: ["React", "FastAPI"],
        link: "https://zentrym.netlify.app/",
        image: zentryPreview,
        imageFit: "screen",
    },
    {
        title: "Travelia",
        description:
            "Travel guide & booking platform with a clean UI, itinerary and listing management, and a smooth end-to-end booking experience.",
        stack: ["Next.js", "React 19", "MongoDB"],
        link: "https://travelia-rho.vercel.app/",
        image: travelialPreview,
        imageFit: "screen",
    },
    {
        title: "Talabaty",
        description:
            "Food ordering application with a fast, intuitive UX, JWT-based auth and a REST API backend deployed on Render.",
        stack: ["Express", "TypeScript", "MongoDB", "JWT"],
        link: "https://talabatyv1.netlify.app/",
        image: talabatiPreview,
        imageFit: "screen",
    },
];

function Projects() {
    const ref = useReveal();

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[var(--color-ink-soft)]">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading
                    tag="projects"
                    title="Selected"
                    accent="work"
                    description="A handful of products I've shipped end-to-end — from a pharmacy management platform to travel and food-ordering apps."
                />

                <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
