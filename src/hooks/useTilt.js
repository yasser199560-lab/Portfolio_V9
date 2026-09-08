import { useRef } from "react";

/**
 * Adds a subtle, GPU-cheap 3D tilt + glare to any element based on
 * pointer position. Pure CSS transforms — no extra deps.
 *
 * Usage: const tiltRef = useTilt(); <div ref={tiltRef} className="tilt">
 */
export function useTilt({ max = 10, scale = 1.02, glare = true } = {}) {
    const ref = useRef(null);

    function handleMove(e) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
        const y = (e.clientY - rect.top) / rect.height; // 0 -> 1

        const rotateY = (x - 0.5) * max * 2;
        const rotateX = -(y - 0.5) * max * 2;

        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        if (glare) {
            el.style.setProperty("--tilt-glare-x", `${x * 100}%`);
            el.style.setProperty("--tilt-glare-y", `${y * 100}%`);
            el.style.setProperty("--tilt-glare-o", "1");
        }
    }

    function handleLeave() {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        if (glare) el.style.setProperty("--tilt-glare-o", "0");
    }

    return { ref, handleMove, handleLeave };
}
