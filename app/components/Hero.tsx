'use client';

import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { MouseTrail } from './MouseTrail';

export function Hero() {
    const boxRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef({ x: 0, y: 0 });
    const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
    const rafIdRef = useRef<number | null>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = boxRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        cursorRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        if (rafIdRef.current === null) {
            rafIdRef.current = requestAnimationFrame(() => {
                setCursor({ ...cursorRef.current });
                rafIdRef.current = null;
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
        }
        setCursor(null);
    }, []);

    // Clean up RAF on unmount
    useLayoutEffect(() => () => {
        if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    }, []);

    return (
        <section
            className="relative min-h-[90vh] pt-32 pb-20 lg:min-h-[88vh] lg:pt-40 lg:pb-28"
            aria-labelledby="hero-heading"
        >
            <MouseTrail containerRef={boxRef} />
            <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                    <h1
                        id="hero-heading"
                        className="font-display text-4xl leading-[1.15] tracking-tight text-accent sm:text-5xl lg:text-6xl"
                    >
                        Websites that help local businesses grow.
                    </h1>
                    <p className="mt-6 max-w-lg text-lg text-accent-muted leading-relaxed">
                        Pacific Digital Studio builds modern, high-converting
                        websites for local businesses in Vancouver. We help you
                        stand out, build trust, and turn visitors into leads.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                        >
                            Book a Free Consultation
                        </Link>
                        <Link
                            href="#portfolio"
                            className="inline-flex items-center justify-center rounded-md border border-surface-border bg-transparent px-6 py-3.5 text-sm font-medium text-accent transition-colors hover:border-accent-muted hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
                <div className="group relative flex justify-center lg:justify-end" aria-hidden>
                    <div
                        ref={boxRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full max-w-md aspect-[4/3] rounded-lg border border-surface-border bg-surface-elevated/80 overflow-hidden shadow-2xl transition-all duration-300 ease-out group-hover:border-accent-subtle/30 group-hover:shadow-[0_0_0_1px_rgba(113,113,122,0.15),0_25px_50px_-12px_rgba(0,0,0,0.5)] group-hover:scale-[1.02]"
                    >
                        {/* Cursor-following spotlight — transform for smooth, GPU-friendly movement */}
                        {cursor && (
                            <div
                                className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-accent-subtle/25 blur-3xl will-change-transform"
                                style={{
                                    transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
                                }}
                                aria-hidden
                            />
                        )}
                        {cursor && (
                            <div
                                className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent-subtle/70 will-change-transform"
                                style={{
                                    transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
                                }}
                                aria-hidden
                            />
                        )}
                        {/* Subtle grid */}
                        <div
                            className="absolute inset-0 opacity-[0.15] transition-opacity duration-300 group-hover:opacity-25"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgb(113 113 122 / 0.4) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgb(113 113 122 / 0.4) 1px, transparent 1px)
                                `,
                                backgroundSize: '24px 24px',
                            }}
                        />
                        {/* Soft gradient orbs — brand mood, no photo */}
                        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-accent-subtle/20 blur-3xl transition-colors duration-300 group-hover:bg-accent-subtle/30" />
                        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-accent-subtle/10 blur-3xl transition-colors duration-300 group-hover:bg-accent-subtle/20" />
                        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-subtle/15 blur-2xl transition-colors duration-300 group-hover:bg-accent-subtle/25" />
                        {/* Minimal geometric accent */}
                        <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent transition-opacity duration-300 group-hover:opacity-80 group-hover:via-accent-subtle/50" />
                        <div className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-transparent via-surface-border/80 to-transparent transition-opacity duration-300 group-hover:opacity-80 group-hover:via-accent-subtle/50" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
