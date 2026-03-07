import { Container } from "./Container";

const SERVICES = [
  {
    title: "Web Design",
    description:
      "Clean, modern design that reflects your brand and speaks to your local audience.",
  },
  {
    title: "Web Development",
    description:
      "Fast, reliable websites built with current standards—easy to update and scale.",
  },
  {
    title: "Landing Pages for Lead Generation",
    description:
      "Focused pages designed to capture leads and turn visitors into customers.",
  },
  {
    title: "Website Redesigns for Local Businesses",
    description:
      "Refresh your existing site with a modern look and conversion-focused structure.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <h2
          id="services-heading"
          className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
        >
          What we do
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-accent-muted">
          We build modern websites that help local businesses stand out, build
          trust, and generate more leads.
        </p>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description }) => (
            <li
              key={title}
              className="group rounded-lg border border-surface-border/60 bg-surface-elevated/50 p-6 transition-colors hover:border-surface-border hover:bg-surface-elevated"
            >
              <h3 className="font-display text-xl text-accent">{title}</h3>
              <p className="mt-3 text-sm text-accent-muted leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
