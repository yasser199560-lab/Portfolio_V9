import { useEffect, useState, lazy, Suspense } from "react";
import yasser from "../assets/images/yasser.jpg";
import { useTilt } from "../hooks/useTilt";

const HeroScene = lazy(() => import("../three/HeroScene"));

const ROLES = [
    "Creative Developer",
    "Full Stack Web Developer",
    "Full Stack Mobile Developer",
    "UI/UX Designer",
    "AI Builder",
];

function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);

    useEffect(() => {
        const typing = setTimeout(() => {
            if (char < ROLES[index].length) {
                setText((prev) => prev + ROLES[index][char]);
                setChar(char + 1);
            } else {
                const pause = setTimeout(() => {
                    setText("");
                    setChar(0);
                    setIndex((i) => (i + 1) % ROLES.length);
                }, 1400);
                return () => clearTimeout(pause);
            }
        }, 85);

        return () => clearTimeout(typing);
    }, [char, index]);

    const { ref: tiltRef, handleMove, handleLeave } = useTilt({ max: 9, scale: 1.015 });

    return (
        <section
            id="hero"
            className="relative bg-grid pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
        >
            {/* ambient glow */}
            <div className="pointer-events-none absolute -top-24 right-0 w-[32rem] h-[32rem] rounded-full bg-[var(--color-signal)]/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 -left-32 w-[24rem] h-[24rem] rounded-full bg-[var(--color-violet)]/10 blur-[120px]" />

            <div className="relative max-w-[var(--container-page)] mx-auto px-5 sm:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/70 px-3.5 py-1.5 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-live)] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-live)]" />
                        </span>
                        <span className="font-mono text-xs text-[var(--color-muted)]">
                            available for freelance &amp; full-time roles
                        </span>
                    </div>

                    <p className="font-mono text-sm text-[var(--color-signal)] mb-3">
                        $ whoami
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-balance">
                        Yasser Mansour Kayed
                    </h1>

                    <h2 className="mt-4 font-mono text-lg sm:text-xl text-[var(--color-violet)] min-h-[1.75rem]">
                        {text}
                        <span className="inline-block w-[2px] h-5 align-middle bg-[var(--color-signal)] ml-1 animate-pulse" />
                    </h2>

                    <p className="mt-6 max-w-lg text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                        I build modern web, mobile &amp; AI-powered products —
                        shipping clean interfaces, solid architecture, and
                        smooth interactions from first sketch to production.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] text-[var(--color-ink)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-signal-soft)] transition-colors"
                        >
                            View Work
                        </a>
                        <a
                            href="/Yasser_Kayed_CV.pdf"
                            download="Yasser-Kayed-CV.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-signal)]/50 hover:text-[var(--color-signal)] transition-colors"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 font-mono text-xs text-[var(--color-muted)]">
                        <div>
                            <p className="text-[var(--color-text)] text-xl font-semibold">4+</p>
                            shipped projects
                        </div>
                        <div className="w-px h-8 bg-[var(--color-line)]" />
                        <div>
                            <p className="text-[var(--color-text)] text-xl font-semibold">3</p>
                            platforms — web, mobile, AI
                        </div>
                    </div>
                </div>

                {/* RIGHT — 3D scene + device-frame photo card */}
                <div className="relative mx-auto w-full max-w-sm">
                    {/* Real-time WebGL 3D scene, sits behind the photo card */}
                    <div className="pointer-events-none absolute -inset-16 -z-10 opacity-90">
                        <Suspense fallback={null}>
                            <HeroScene />
                        </Suspense>
                    </div>

                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-signal)]/25 to-[var(--color-violet)]/25 blur-2xl" />

                    <div
                        ref={tiltRef}
                        onMouseMove={handleMove}
                        onMouseLeave={handleLeave}
                        className="tilt relative card-surface rounded-[1.75rem] p-3 shadow-2xl"
                    >
                        <div className="tilt-glare rounded-[1.75rem]" />
                        <div className="tilt-layer">
                            <div className="flex items-center gap-1.5 px-2 pb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                <span className="ml-auto font-mono text-[10px] text-[var(--color-muted)]">
                                    yasser.dev
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden aspect-[3/4]">
                                <img
                                    src={yasser}
                                    alt="Portrait of Yasser Mansour Kayed"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* floating chip */}
                    <div className="hidden sm:flex absolute -left-8 bottom-10 items-center gap-2 card-surface rounded-xl px-3.5 py-2.5 shadow-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                        </span>
                        <span className="font-mono text-xs text-[var(--color-text)]">
                            based in Lebanon
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
