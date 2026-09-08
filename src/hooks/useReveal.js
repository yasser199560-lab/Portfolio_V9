import { useEffect, useRef } from "react";

/**
 * Adds the "is-visible" class to an element once it scrolls into view,
 * pairing with the .reveal utility defined in index.css.
 */
export function useReveal(options = { threshold: 0.15 }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            node.classList.add("is-visible");
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add("is-visible");
                observer.unobserve(node);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return ref;
}
