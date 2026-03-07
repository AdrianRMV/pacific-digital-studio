import { Container } from "./Container";

const BENEFITS = [
  {
    title: "Modern premium design",
    description:
      "Your site looks polished and professional—no templates that look like everyone else.",
  },
  {
    title: "Mobile-first experience",
    description:
      "Most of your customers are on their phones. We design for that first.",
  },
  {
    title: "Clear messaging for local businesses",
    description:
      "Copy and structure that speaks to your neighbourhood and your services.",
  },
  {
    title: "Fast, streamlined process",
    description:
      "From discovery to launch, we keep things efficient so you can go live sooner.",
  },
  {
    title: "Focus on conversions",
    description:
      "We care how your site looks and how it turns visitors into leads and customers.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="border-t border-surface-border/60 bg-surface-elevated/30 py-20 lg:py-28"
      aria-labelledby="why-heading"
    >
      <Container>
        <h2
          id="why-heading"
          className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
        >
          Why work with us
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-accent-muted">
          A website should work for your business—not the other way around.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.slice(0, 6).map(({ title, description }, i) => (
            <li key={title} className="flex gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-border bg-surface-muted/50 text-sm font-medium text-accent-muted"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg text-accent">{title}</h3>
                <p className="mt-1 text-sm text-accent-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
