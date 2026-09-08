function SectionHeading({ tag, title, accent, align = "center", description }) {
    return (
        <div
            className={`mb-12 md:mb-16 ${
                align === "center" ? "text-center mx-auto" : "text-left"
            } max-w-2xl`}
        >
            <p className="eyebrow mb-3">// {tag}</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-balance">
                {title} <span className="text-[var(--color-signal)]">{accent}</span>
            </h2>
            {description && (
                <p className="mt-4 text-[var(--color-muted)] text-base leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;
