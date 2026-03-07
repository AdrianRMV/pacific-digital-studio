import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-surface-border/60 bg-surface-elevated/50 py-14 lg:py-16"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link
              href="#"
              className="block transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-surface rounded"
              aria-label="Pacific Digital Studio — Home"
            >
              <Image
                src="/pacific-digital-studio-logo.svg"
                alt="Pacific Digital Studio"
                width={150}
                height={33}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-accent-muted">
              Modern websites for local businesses in Vancouver and the Lower Mainland.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {FOOTER_LINKS.map(({ href, label }) => (
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
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-surface-border/60 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:hello@pacificdigitalstudio.com"
            className="text-sm text-accent-muted transition-colors hover:text-accent"
          >
            hello@pacificdigitalstudio.com
          </a>
          <p className="text-sm text-accent-subtle">
            © {year} Pacific Digital Studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
