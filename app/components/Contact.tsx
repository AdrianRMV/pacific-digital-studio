"use client";

import { useState } from "react";
import { Container } from "./Container";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: replace with your form handler (e.g. API route, Formspree, etc.)
    setTimeout(() => setStatus("done"), 800);
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="mx-auto max-w-xl">
          <h2
            id="contact-heading"
            className="font-display text-3xl text-accent sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-accent-muted">
            Share a few details and we’ll reach out to schedule a free
            consultation.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-accent">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-2 block w-full rounded-md border border-surface-border bg-surface-elevated px-4 py-3 text-accent placeholder-accent-subtle focus:border-accent-muted focus:outline-none focus:ring-1 focus:ring-accent-muted"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-accent">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-2 block w-full rounded-md border border-surface-border bg-surface-elevated px-4 py-3 text-accent placeholder-accent-subtle focus:border-accent-muted focus:outline-none focus:ring-1 focus:ring-accent-muted"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="contact-business" className="block text-sm font-medium text-accent">
                Business name
              </label>
              <input
                id="contact-business"
                type="text"
                name="business"
                autoComplete="organization"
                className="mt-2 block w-full rounded-md border border-surface-border bg-surface-elevated px-4 py-3 text-accent placeholder-accent-subtle focus:border-accent-muted focus:outline-none focus:ring-1 focus:ring-accent-muted"
                placeholder="Your business"
              />
            </div>
            <div>
              <label htmlFor="contact-details" className="block text-sm font-medium text-accent">
                Project details
              </label>
              <textarea
                id="contact-details"
                name="details"
                rows={4}
                className="mt-2 block w-full rounded-md border border-surface-border bg-surface-elevated px-4 py-3 text-accent placeholder-accent-subtle focus:border-accent-muted focus:outline-none focus:ring-1 focus:ring-accent-muted resize-y min-h-[120px]"
                placeholder="Tell us about your project, timeline, or questions..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending…"
                : status === "done"
                  ? "Message sent"
                  : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
