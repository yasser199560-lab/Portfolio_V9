import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTilt } from "../hooks/useTilt";

function ProjectMedia({ image, imageFit, title }) {
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

function ProjectCard({ title, description, stack = [], link, status = "Live", image, imageFit }) {
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
                <ProjectMedia image={image} imageFit={imageFit} title={title} />

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
