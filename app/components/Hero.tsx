import Link from "next/link";
import { Container } from "./Container";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] pt-32 pb-20 lg:min-h-[88vh] lg:pt-40 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-4xl leading-[1.15] tracking-tight text-accent sm:text-5xl lg:text-6xl"
          >
            Websites that help local businesses grow.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-accent-muted leading-relaxed">
            Pacific Digital Studio builds modern, high-converting websites for
            local businesses in Vancouver. We help you stand out, build trust,
            and turn visitors into leads.
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
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-lg border border-surface-border bg-surface-elevated/80 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full rounded border border-surface-border/60 bg-surface-muted/50 p-6 text-center">
                <div className="h-2 w-16 mx-auto rounded-full bg-accent-subtle/40 mb-4" />
                <div className="space-y-2">
                  <div className="h-3 w-full max-w-[80%] mx-auto rounded bg-accent-subtle/30" />
                  <div className="h-3 w-3/4 mx-auto rounded bg-accent-subtle/20" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded border border-surface-border/50 bg-surface/60"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
