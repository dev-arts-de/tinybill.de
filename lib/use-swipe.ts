"use client";

import { useRef } from "react";
import type { TouchEvent } from "react";

type UseSwipeOptions = {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
};

type SwipeHandlers = {
    onTouchStart: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
};

const DEFAULT_THRESHOLD_PX = 40;

export function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    threshold = DEFAULT_THRESHOLD_PX,
}: UseSwipeOptions): SwipeHandlers {
    const startX = useRef<number | null>(null);

    const reset = () => {
        startX.current = null;
    };

    return {
        onTouchStart: (event) => {
            startX.current = event.changedTouches[0]?.clientX ?? null;
        },
        onTouchEnd: (event) => {
            const endX = event.changedTouches[0]?.clientX ?? null;
            if (startX.current === null || endX === null) {
                reset();
                return;
            }

            const delta = startX.current - endX;
            if (Math.abs(delta) < threshold) {
                reset();
                return;
            }

            if (delta > 0) {
                onSwipeLeft?.();
            } else {
                onSwipeRight?.();
            }
            reset();
        },
    };
}
