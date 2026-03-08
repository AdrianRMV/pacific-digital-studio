'use client';

import type { RefObject } from 'react';
import { useRef, useEffect, useCallback, useState } from 'react';

/**
 * Mouse trail: smooth cursor trail that fades out after a short time.
 * Renders a canvas overlay with pointer-events: none so it never blocks clicks/links.
 * Disables automatically on touch devices and when prefers-reduced-motion: reduce.
 *
 * Pass containerRef to restrict the trail to a single element (e.g. the hero gradient box):
 * only records points and draws inside that element's bounds.
 */
export type MouseTrailConfig = {
    /** When set, trail only records and draws inside this element (e.g. hero box). */
    containerRef?: RefObject<HTMLElement | null>;
    /** Whether the effect is enabled. */
    enabled: boolean;
    /** Max age of a point in ms before it's fully faded and removed. */
    fadeMs: number;
    /** Min distance (px) between points before adding a new one. */
    minDistance: number;
    /** When velocity is high, we add points more often so trail appears longer. */
    velocityLengthFactor: number;
    /** Max number of points to keep. */
    maxPoints: number;
    /** Base line width (px). */
    lineWidth: number;
    /** Outer glow line width (px). */
    glowWidth: number;
    /** Trail color (CSS color or rgba). */
    color: string;
    /** Glow color. */
    glowColor: string;
    /** z-index of the canvas overlay. */
    zIndex: number;
};

const DEFAULT_CONFIG: MouseTrailConfig = {
    enabled: true,
    fadeMs: 1000,
    minDistance: 4,
    velocityLengthFactor: 1.8,
    maxPoints: 80,
    lineWidth: 1.5,
    glowWidth: 12,
    color: 'rgba(113, 113, 122, 0.35)',
    glowColor: 'rgba(113, 113, 122, 0.08)',
    zIndex: 1,
};

type TrailPoint = { x: number; y: number; t: number };

function useIsTouchOrReducedMotion(): boolean {
    const [value, setValue] = useState(true);
    useEffect(() => {
        const touch =
            typeof window !== 'undefined' &&
            (window.matchMedia('(pointer: coarse)').matches ||
                !window.matchMedia('(pointer: fine)').matches);
        const reduced =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setValue(touch || reduced);
    }, []);
    return value;
}

export function MouseTrail(config: Partial<MouseTrailConfig> = {}) {
    const opts = { ...DEFAULT_CONFIG, ...config };
    const containerRef = opts.containerRef;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<TrailPoint[]>([]);
    const lastRef = useRef<{ x: number; y: number; t: number } | null>(null);
    const rafRef = useRef<number | null>(null);
    const sizeRef = useRef({ w: 0, h: 0 });
    const isTouchOrReduced = useIsTouchOrReducedMotion();

    const pushPoint = useCallback(
        (x: number, y: number, t: number) => {
            const last = lastRef.current;
            const pts = pointsRef.current;
            if (last !== null) {
                const dx = x - last.x;
                const dy = y - last.y;
                const dist = Math.hypot(dx, dy);
                const dt = t - last.t;
                const velocity = dt > 0 ? dist / dt : 0;
                if (dist < opts.minDistance) return;
                // When moving fast, add intermediate points so trail is longer and smoother
                const steps = Math.min(
                    Math.max(1, Math.floor((velocity * opts.velocityLengthFactor) / 80)),
                    5
                );
                for (let i = 1; i <= steps; i++) {
                    const u = i / steps;
                    pts.push({
                        x: last.x + dx * u,
                        y: last.y + dy * u,
                        t: last.t + (t - last.t) * u,
                    });
                }
            }
            pts.push({ x, y, t });
            lastRef.current = { x, y, t };
            while (pts.length > opts.maxPoints) pts.shift();
        },
        [
            opts.minDistance,
            opts.velocityLengthFactor,
            opts.maxPoints,
        ]
    );

    useEffect(() => {
        if (!opts.enabled || isTouchOrReduced) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const setSize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            sizeRef.current = { w, h };
        };

        let lastT = 0;
        const tick = (t: number) => {
            rafRef.current = requestAnimationFrame(tick);
            const pts = pointsRef.current;
            const now = t * 0.001;
            const life = opts.fadeMs / 1000;
            ctx.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);

            const container = containerRef?.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                ctx.save();
                ctx.beginPath();
                ctx.rect(rect.left, rect.top, rect.width, rect.height);
                ctx.clip();
            }

            // Remove points that are too old (t is in seconds)
            while (pts.length > 0 && now - pts[0].t > life) {
                pts.shift();
            }
            if (pts.length >= 2) {
                // Glow: draw segments with age-based opacity (p.t is in seconds)
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = opts.glowWidth;
            ctx.strokeStyle = opts.glowColor;
            for (let i = 0; i < pts.length - 1; i++) {
                const age = now - pts[i].t;
                const alpha = Math.max(0, 1 - age / life) * 0.5;
                if (alpha <= 0) continue;
                ctx.beginPath();
                ctx.moveTo(pts[i].x, pts[i].y);
                ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
                ctx.globalAlpha = alpha;
                ctx.stroke();
            }
            ctx.globalAlpha = 1;

            // Main line: segments with age-based opacity
            ctx.lineWidth = opts.lineWidth;
            ctx.strokeStyle = opts.color;
            for (let i = 0; i < pts.length - 1; i++) {
                const age = now - pts[i].t;
                const alpha = Math.max(0, 1 - age / life);
                if (alpha <= 0) continue;
                ctx.beginPath();
                ctx.moveTo(pts[i].x, pts[i].y);
                ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
                ctx.globalAlpha = alpha;
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            }

            if (container) ctx.restore();
            lastT = t;
        };

        const onMouseMove = (e: MouseEvent) => {
            const container = containerRef?.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                const inside =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;
                if (!inside) {
                    lastRef.current = null;
                    return;
                }
            }
            const t = performance.now() * 0.001;
            pushPoint(e.clientX, e.clientY, t);
        };

        const onMouseLeave = () => {
            lastRef.current = null;
        };

        setSize();
        window.addEventListener('resize', setSize);
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseleave', onMouseLeave);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [opts.enabled, opts.fadeMs, opts.maxPoints, opts.glowWidth, opts.glowColor, opts.lineWidth, opts.color, isTouchOrReduced, pushPoint, containerRef]);

    if (!opts.enabled || isTouchOrReduced) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed left-0 top-0 pointer-events-none"
            style={{ zIndex: opts.zIndex }}
            aria-hidden
        />
    );
}
