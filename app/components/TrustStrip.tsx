import { Container } from "./Container";

const ITEMS = [
  { label: "Vancouver-Based", desc: "Local expertise" },
  { label: "Modern Responsive Design", desc: "Looks great on every device" },
  { label: "Built to Convert", desc: "Focused on leads" },
  { label: "Fast Turnaround", desc: "Efficient process" },
];

export function TrustStrip() {
  return (
    <section
      className="border-y border-surface-border/60 bg-surface-elevated/50 py-10 lg:py-12"
      aria-label="Trust indicators"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {ITEMS.map(({ label, desc }) => (
            <li key={label} className="text-center lg:text-left">
              <p className="font-display text-lg text-accent lg:text-xl">
                {label}
              </p>
              <p className="mt-1 text-sm text-accent-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
