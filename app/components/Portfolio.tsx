import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};

const PLACEHOLDER_PROJECTS: PortfolioItem[] = [
  {
    id: "vancouver-roofing",
    title: "Vancouver Roofing Co.",
    category: "Contractor",
    description:
      "A clear, trust-building site for a local roofing company—services, areas served, and a straightforward path to getting a quote.",
  },
  {
    id: "north-shore-cleaning",
    title: "North Shore Cleaning",
    category: "Cleaning Services",
    description:
      "A clean, professional presence for a residential and commercial cleaning service with easy booking and service highlights.",
  },
  {
    id: "pacific-wellness",
    title: "Pacific Wellness Clinic",
    category: "Healthcare",
    description:
      "A calm, credible website for a Vancouver wellness clinic—team, services, and a simple way for patients to get in touch.",
  },
];

function ProjectCard({ project }: { project: PortfolioItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-surface-border/60 bg-surface-elevated/50 transition-colors hover:border-surface-border hover:bg-surface-elevated">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="rounded-full border border-surface-border bg-surface/80 px-3 py-1 text-xs font-medium text-accent-muted">
                {project.category}
              </span>
              <span className="font-display text-lg text-accent-subtle/80">
                {project.title}
              </span>
              <div className="h-px w-12 bg-surface-border" />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent-subtle">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl text-accent">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-accent-muted leading-relaxed">
          {project.description}
        </p>
        <Link
          href={`/portfolio/${project.id}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface rounded"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}

export function Portfolio({ projects = PLACEHOLDER_PROJECTS }: { projects?: PortfolioItem[] }) {
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
          Featured work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-accent-muted">
          A selection of recent projects for local businesses in the Vancouver area.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
