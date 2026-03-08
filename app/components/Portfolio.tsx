'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { projects, type Project } from '@/app/data/projects';

function ProjectPreview({
    preview,
    title,
    isGif,
}: {
    preview: string;
    title: string;
    isGif: boolean;
}) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-surface-muted p-8">
                <span className="text-center text-sm text-accent-subtle">
                    Preview image not found. Add an image to{' '}
                    <code className="rounded bg-surface-elevated px-1">
                        /public/projects/
                    </code>
                </span>
            </div>
        );
    }

    if (isGif) {
        return (
            // eslint-disable-next-line @next/next/no-img-element -- GIFs need <img> to preserve animation
            <img
                src={preview}
                alt={`${title} preview`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                onError={() => setError(true)}
            />
        );
    }

    return (
        <Image
            src={preview}
            alt={`${title} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setError(true)}
        />
    );
}

function BrowserMockup({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full overflow-hidden rounded-t-lg border border-b-0 border-surface-border/60 bg-surface-muted">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-surface-border/60 bg-surface-elevated/80 px-3 py-2.5">
                <div className="flex gap-1.5">
                    <span
                        className="h-2.5 w-2.5 rounded-full bg-accent-subtle/50"
                        aria-hidden
                    />
                    <span
                        className="h-2.5 w-2.5 rounded-full bg-accent-subtle/50"
                        aria-hidden
                    />
                    <span
                        className="h-2.5 w-2.5 rounded-full bg-accent-subtle/50"
                        aria-hidden
                    />
                </div>
                <div
                    className="ml-2 flex-1 rounded bg-surface/60 py-1.5"
                    aria-hidden
                />
            </div>
            {/* Preview area */}
            <div className="relative aspect-video w-full overflow-hidden bg-surface">
                {children}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const isGif = project.preview.toLowerCase().endsWith('.gif');

    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-surface-border/60 bg-surface-elevated/50 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-surface-border hover:shadow-xl hover:shadow-black/25">
            <div className="overflow-hidden rounded-t-xl">
                <BrowserMockup>
                    <ProjectPreview
                        preview={project.preview}
                        title={project.title}
                        isGif={isGif}
                    />
                </BrowserMockup>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                    <h3 className="font-display text-xl text-accent">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-accent-muted leading-relaxed">
                        {project.description}
                    </p>
                </div>
                {/* <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Technologies used"
                >
                    {project.tech.map((t) => (
                        <li key={t}>
                            <span className="rounded-md border border-surface-border/60 bg-surface-muted/80 px-2.5 py-1 text-xs font-medium text-accent-muted">
                                {t}
                            </span>
                        </li>
                    ))}
                </ul> */}
                <div className="mt-auto flex flex-wrap gap-3">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                    >
                        View Live Site
                    </a>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-surface-border bg-transparent px-4 py-2.5 text-sm font-medium text-accent-muted transition-colors hover:border-accent-muted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface"
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export function Portfolio({
    projectsList = projects,
}: {
    projectsList?: Project[];
}) {
    return (
        <section
            id="portfolio"
            className="border-t border-surface-border/60 bg-surface-elevated/30 py-20 lg:py-28"
            aria-labelledby="portfolio-heading"
        >
            <Container>
                <h2
                    id="portfolio-heading"
                    className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
                >
                    Selected Work
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-accent-muted">
                    A selection of modern websites built for local businesses.
                </p>
                <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsList.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
