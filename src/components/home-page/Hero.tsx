import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-20">
          {/* Content */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Digital Product & Development Studio
              </p>
            </div>

            <h1
              id="hero-heading"
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Digital experiences{" "}
              <span className="text-muted-foreground">
                built to move your business forward.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Lunex <span className="text-primary">OPS</span> designs and
              develops high-performance websites and custom web applications
              that turn ideas into reliable digital products.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start a Project
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore Our Work
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Technical Visual */}
          <div
            aria-hidden="true"
            className="relative min-h-105 border border-border bg-card lg:min-h-140"
          >
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Corner Labels */}
            <div className="absolute left-5 top-5 font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              LN / 001
            </div>

            <div className="absolute right-5 top-5 font-label text-[10px] text-muted-foreground">
              01—08
            </div>

            <div className="absolute bottom-5 left-5 font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              System / Interface
            </div>

            <div className="absolute bottom-5 right-5 font-label text-[10px] text-muted-foreground">
              2026
            </div>

            {/* Main Interface */}
            <div className="absolute inset-10 flex items-center justify-center sm:inset-16">
              <div className="relative aspect-square w-full max-w-90 border border-foreground/20">
                {/* Primary Shape */}
                <div className="absolute left-1/2 top-1/2 size-[45%] -translate-x-1/2 -translate-y-1/2 bg-primary" />

                {/* Interface Lines */}
                <div className="absolute left-0 top-1/2 h-px w-full bg-foreground/20" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-foreground/20" />

                {/* Center Point */}
                <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 border border-neutral bg-background" />

                {/* Coordinates */}
                <div className="absolute left-3 top-3 font-label text-[9px] text-muted-foreground">
                  X: 04.21
                </div>

                <div className="absolute bottom-3 right-3 font-label text-[9px] text-muted-foreground">
                  Y: 08.72
                </div>
              </div>
            </div>

            {/* Technical Status */}
            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2 font-label text-[9px] uppercase text-muted-foreground sm:flex">
              <span>Design</span>
              <span>Development</span>
              <span>Systems</span>
              <span className="text-foreground">● Active</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden border-t border-border py-5 md:flex md:items-center md:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Scroll to explore
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            01 / 08
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
