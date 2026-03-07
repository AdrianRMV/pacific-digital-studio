import { Container } from "./Container";

const STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, your audience, and your goals so the site is built on a clear foundation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We define structure, messaging, and priorities so every page has a purpose.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "We design and develop your site with a focus on clarity, performance, and conversion.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We go live, hand over the reins, and make sure you’re set up to maintain and grow.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <Container>
        <h2
          id="process-heading"
          className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
        >
          How we work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-accent-muted">
          A clear process from first conversation to launch.
        </p>
        <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, title, description }) => (
            <li key={step} className="relative">
              <span
                className="font-display text-2xl text-accent-subtle/60"
                aria-hidden
              >
                {step}
              </span>
              <h3 className="mt-2 font-display text-xl text-accent">{title}</h3>
              <p className="mt-3 text-sm text-accent-muted leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
