"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

const VIEWPORT_THRESHOLD = 0.2;

export function FadeIn({ children, delay = 0 }: FadeInProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            // Sync state with platform preference — see
            // https://react.dev/learn/you-might-not-need-an-effect
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: VIEWPORT_THRESHOLD },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: visible ? `${delay}s` : undefined,
            }}
            className={
                visible
                    ? "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-out"
                    : "translate-y-4 opacity-0 transition-[transform,opacity] duration-500 ease-out"
            }
        >
            {children}
        </div>
    );
}
