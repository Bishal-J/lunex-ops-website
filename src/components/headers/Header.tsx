"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "@/data/static";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Lunex OPS home"
        >
          <Image
            src="/logo.svg"
            alt="Lunex OPS"
            width={165}
            height={44}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex"
        >
          Start a Project
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-border bg-background transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`mx-auto flex max-w-7xl flex-col px-6 py-4 transition-transform duration-300 ease-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-3"
            }`}
            aria-label="Mobile navigation"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className={`flex items-center justify-between py-4 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  index !== navigation.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                {item.label}

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="mt-4 flex items-center justify-between bg-primary px-5 py-4 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start a Project
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
