import { useEffect, useState } from "react";

const LINKS = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[var(--color-ink)]/80 backdrop-blur-md border-b border-[var(--color-line)]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between">
                <a
                    href="#hero"
                    className="font-mono text-lg tracking-tight text-[var(--color-text)]"
                >
                    <span className="text-[var(--color-signal)]">&lt;</span>
                    YMK
                    <span className="text-[var(--color-signal)]">/&gt;</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-signal)]/40 bg-[var(--color-signal)]/10 px-4 py-2 text-sm font-medium text-[var(--color-signal-soft)] hover:bg-[var(--color-signal)]/20 transition-colors"
                    >
                        Let's talk
                    </a>
                </div>

                <button
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]"
                >
                    <span
                        className={`block h-px w-5 bg-[var(--color-text)] transition-transform duration-300 ${
                            open ? "translate-y-[3px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-px w-5 bg-[var(--color-text)] transition-opacity duration-300 ${
                            open ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-px w-5 bg-[var(--color-text)] transition-transform duration-300 ${
                            open ? "-translate-y-[5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile nav panel */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    open ? "max-h-96" : "max-h-0"
                } bg-[var(--color-ink)]/95 backdrop-blur-md border-b border-[var(--color-line)]`}
            >
                <nav className="flex flex-col px-5 py-4 gap-1">
                    {LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="py-2.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] border-b border-[var(--color-line)] last:border-none"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-3 text-center rounded-full bg-[var(--color-signal)] text-[var(--color-ink)] py-2.5 text-sm font-semibold"
                    >
                        Let's talk
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
