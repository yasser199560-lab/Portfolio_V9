import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTilt } from "../hooks/useTilt";

function ProjectMedia({ image, imageFit, title, visual }) {
    if (visual === "wazifny") {
        return (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f7fb] p-3 sm:p-4 text-[#172033]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_5%,rgba(34,197,94,0.16),transparent_42%)]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                    <div className="flex h-8 shrink-0 items-center justify-between border-b border-slate-100 px-3">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold"><span className="text-orange-500">W</span> Wazifny</span>
                        <span className="hidden items-center gap-3 text-[7px] text-slate-500 sm:flex"><span>Home</span><span>Find Jobs</span><span>Courses</span><span>About Us</span></span>
                        <span className="rounded bg-green-600 px-2 py-1 text-[7px] font-semibold text-white">Register</span>
                    </div>
                    <div className="relative flex min-h-0 flex-1 items-center overflow-hidden bg-slate-900 px-4 sm:px-6">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,38,0.97),rgba(10,20,38,0.72)),radial-gradient(ellipse_at_75%_45%,#64748b,transparent_60%)]" />
                        <div className="relative max-w-[75%]">
                            <p className="text-[clamp(12px,2.5vw,22px)] font-bold leading-tight text-white">Find Your Dream Job<br /><span className="text-orange-400">&amp; Get Results</span></p>
                            <p className="mt-1.5 max-w-56 text-[7px] leading-relaxed text-slate-300 sm:text-[9px]">AI-powered job matching platform for Lebanon. Find the right opportunity for your skills.</p>
                            <div className="mt-2.5 flex h-5 max-w-60 items-center gap-1 rounded bg-white px-2 text-[6px] text-slate-400 sm:h-7 sm:text-[8px]">
                                <span className="flex-1">Job title, skills, or company</span><span className="rounded bg-green-600 px-2 py-1 font-semibold text-white">Find Jobs</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-around border-t border-slate-100 bg-white text-center sm:h-10">
                        {["Active talent", "Local companies", "Live jobs", "Smart matches"].map((stat) => <span key={stat} className="text-[7px] font-semibold text-green-600 sm:text-[9px]">{stat}</span>)}
                    </div>
                </div>
            </div>
        );
    }

    if (!image) {
        return (
            <div className="relative aspect-[16/10] w-full bg-[var(--color-surface)] flex items-center justify-center">
                <span className="font-mono text-[11px] tracking-wide text-[var(--color-muted)]">
                    {title}
                </span>
            </div>
        );
    }

    if (imageFit === "logo") {
        return (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(94,234,212,0.10),transparent_60%)]">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="relative h-full w-full flex items-center justify-center p-8">
                    <img
                        src={image}
                        alt={`${title} logo`}
                        className="max-h-full max-w-[65%] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }

    // "screen" — browser-style preview of the live product
    return (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface)]">
            <div className="absolute inset-x-0 top-0 h-6 flex items-center gap-1.5 px-3 bg-[var(--color-surface-hi)] border-b border-[var(--color-line)] z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)]/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)]/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)]/40" />
            </div>
            <img
                src={image}
                alt={`${title} interface preview`}
                className="absolute inset-x-0 top-6 bottom-0 w-full h-[calc(100%-1.5rem)] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
            />
        </div>
    );
}

function ProjectCard({ title, description, stack = [], link, status = "Live", image, imageFit, visual }) {
    const { ref: tiltRef, handleMove, handleLeave } = useTilt({ max: 7, scale: 1.02 });

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            ref={tiltRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="tilt group relative card-surface rounded-2xl overflow-hidden flex flex-col hover:border-[var(--color-signal)]/40 transition-colors duration-300"
        >
            <span className="tilt-glare rounded-2xl" />

            <div className="tilt-layer flex flex-col flex-1">
                <ProjectMedia image={image} imageFit={imageFit} title={title} visual={visual} />

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-live)] opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-live)]" />
                            </span>
                            <span className="font-mono text-[11px] text-[var(--color-muted)]">
                                {status}
                            </span>
                        </div>
                        <FaArrowUpRightFromSquare
                            size={14}
                            className="text-[var(--color-muted)] group-hover:text-[var(--color-signal)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                        />
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                        {description}
                    </p>

                    {stack.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-muted)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-signal)]">
                        View project
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
