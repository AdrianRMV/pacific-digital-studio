import { Container } from "./Container";

export function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2
            id="about-heading"
            className="font-display text-3xl text-accent sm:text-4xl lg:text-5xl"
          >
            About Pacific Digital Studio
          </h2>
          <div className="mt-8 space-y-6 text-lg text-accent-muted leading-relaxed">
            <p>
              Pacific Digital Studio is a Vancouver-based digital studio focused
              on helping local businesses create a stronger online presence. We
              work with contractors, restaurants, clinics, real estate agents,
              and other service-based businesses in Vancouver and the surrounding
              area.
            </p>
            <p>
              We build clean, modern, high-performing websites that reflect the
              quality of your work and make it easy for customers to find you,
              trust you, and get in touch. No generic templates—every project is
              tailored to your business and your goals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
