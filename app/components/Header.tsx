"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border/50 bg-surface/95 backdrop-blur-sm transition-colors"
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between py-5 lg:py-6"
          aria-label="Main navigation"
        >
          <Link
            href="#"
            className="block transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface rounded"
            aria-label="Pacific Digital Studio — Home"
          >
            <Image
              src="/pacific-digital-studio-logo.svg"
              alt="Pacific Digital Studio"
              width={180}
              height={40}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-accent-muted transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface rounded"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#contact"
              className="rounded-md border border-accent-muted/40 bg-transparent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface"
            >
              Book a Free Consultation
            </Link>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 text-accent focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface rounded md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        className={`border-t border-surface-border/50 bg-surface-elevated md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 text-accent-muted transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                className="block rounded-md border border-accent-muted/40 py-3 text-center text-sm font-medium text-accent"
                onClick={() => setMenuOpen(false)}
              >
                Book a Free Consultation
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
