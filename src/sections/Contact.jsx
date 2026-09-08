import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";

const CHANNELS = [
    {
        icon: FaEnvelope,
        label: "Email",
        detail: "yasser.m.kayed@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=yasser.m.kayed@gmail.com",
    },
    {
        icon: FaPhone,
        label: "Call",
        detail: "+961 81 762 426",
        href: "tel:+96181762426",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        detail: "Chat instantly",
        href: "https://wa.me/96181762426",
    },
];

const inputClasses =
    "w-full rounded-xl bg-[var(--color-ink)] border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-signal)]/60 outline-none transition-colors";

function Contact() {
    const ref = useReveal();
    const [status, setStatus] = useState("idle");

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("sent");
    }

    return (
        <section id="contact" className="relative py-24 md:py-32">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading
                    tag="contact"
                    title="Let's start a"
                    accent="conversation"
                    description="Have a project in mind, or just want to say hi? Send a message or reach out directly."
                />

                <div ref={ref} className="reveal grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
                    <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 sm:p-8 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block mb-1.5 font-mono text-xs text-[var(--color-muted)]">
                                    name
                                </label>
                                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1.5 font-mono text-xs text-[var(--color-muted)]">
                                    email
                                </label>
                                <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClasses} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1.5 font-mono text-xs text-[var(--color-muted)]">
                                message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className={`${inputClasses} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-signal)] text-[var(--color-ink)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-signal-soft)] transition-colors"
                        >
                            Send message
                        </button>

                        {status === "sent" && (
                            <p className="font-mono text-xs text-[var(--color-live)]">
                                message queued — I'll reply by email shortly.
                            </p>
                        )}
                    </form>

                    <div className="flex flex-col gap-4">
                        {CHANNELS.map((channel) => {
                            const Icon = channel.icon;
                            return (
                                <a
                                    key={channel.label}
                                    href={channel.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group card-surface rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--color-signal)]/40 transition-colors duration-300"
                                >
                                    <span className="w-11 h-11 shrink-0 rounded-xl bg-[var(--color-signal)]/10 text-[var(--color-signal)] flex items-center justify-center group-hover:bg-[var(--color-signal)]/20 transition-colors">
                                        <Icon size={18} />
                                    </span>
                                    <span>
                                        <span className="block text-sm font-medium text-[var(--color-text)]">
                                            {channel.label}
                                        </span>
                                        <span className="block text-xs text-[var(--color-muted)]">
                                            {channel.detail}
                                        </span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
