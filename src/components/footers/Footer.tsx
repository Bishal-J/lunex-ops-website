import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Websites", href: "/services/websites" },
  { label: "Web Applications", href: "/services/web-applications" },
  {
    label: "Ongoing Development",
    href: "/services/ongoing-development",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-[-0.04em] text-foreground"
              aria-label="Lunex home"
            >
              Lunex
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Lunex designs and develops high-performance websites and custom
              web applications for businesses and startups.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-[11px] text-muted-foreground">
            © 2026 Lunex. All rights reserved.
          </p>

          <p className="font-label text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            Digital systems / Web development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
