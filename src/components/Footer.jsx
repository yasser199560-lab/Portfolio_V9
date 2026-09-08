import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink-soft)]">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                    <p className="font-mono text-base text-[var(--color-text)]">
                        <span className="text-[var(--color-signal)]">&lt;</span>
                        YMK
                        <span className="text-[var(--color-signal)]">/&gt;</span>
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                        Full Stack &amp; Mobile Developer · UI/UX Designer
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/yasser-kayed-98938b19b"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-signal)] hover:border-[var(--color-signal)]/40 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/yasser199560-lab"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-signal)] hover:border-[var(--color-signal)]/40 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=yasser.m.kayed@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] hover:text-[var(--color-signal)] hover:border-[var(--color-signal)]/40 transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="#hero"
                        aria-label="Back to top"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-signal)]/10 border border-[var(--color-signal)]/30 text-[var(--color-signal)] hover:bg-[var(--color-signal)]/20 transition-colors"
                    >
                        <FaArrowUp size={14} />
                    </a>
                </div>
            </div>

            <div className="border-t border-[var(--color-line)]">
                <p className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8 py-5 text-xs text-[var(--color-muted)] font-mono">
                    © {new Date().getFullYear()} Yasser Mansour Kayed. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
