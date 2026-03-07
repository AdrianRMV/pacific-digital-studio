import Link from "next/link";
import { Container } from "./Container";

export function CTA() {
  return (
    <section
      className="border-t border-surface-border/60 bg-surface-elevated/50 py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
          >
            Let’s build a website that reflects the quality of your business.
          </h2>
          <p className="mt-6 text-lg text-accent-muted">
            Tell us about your business and your goals. We’ll get back to you
            within one business day.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-medium text-surface transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
          >
            Let’s Talk
          </Link>
        </div>
      </Container>
    </section>
  );
}
