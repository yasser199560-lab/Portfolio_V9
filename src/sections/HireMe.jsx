import { useReveal } from "../hooks/useReveal";

function HireMe() {
    const ref = useReveal();

    return (
        <section id="hire" className="relative py-20 md:py-28">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <div
                    ref={ref}
                    className="reveal relative overflow-hidden rounded-3xl card-surface px-6 py-14 sm:px-12 sm:py-16 text-center"
                >
                    <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[var(--color-signal)]/10 blur-[110px]" />

                    <p className="eyebrow mb-3 justify-center flex">// status: open to work</p>
                    <h2 className="relative text-3xl sm:text-4xl font-semibold text-balance max-w-2xl mx-auto">
                        Let's build something amazing together
                    </h2>
                    <p className="relative mt-4 text-[var(--color-muted)] max-w-lg mx-auto">
                        Available for freelance work, internships and full-time
                        opportunities across web and mobile development.
                    </p>

                    <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] text-[var(--color-ink)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-signal-soft)] transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/Yasser_Kayed_CV.pdf"
                            download="Yasser-Kayed-CV.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-signal)]/50 hover:text-[var(--color-signal)] transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HireMe;
