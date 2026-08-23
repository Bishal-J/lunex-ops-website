import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const FinalCta = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden border-x border-border py-24 sm:py-32 lg:py-40">
          {/* Technical Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Start Something
              </p>

              <span className="size-2 bg-primary" />
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
              Have something worth building?
            </h2>

            {/* Copy */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Tell us what you&apos;re working on, what isn&apos;t working, or
              where you want to go next.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start a Project
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View Our Work
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Technical Metadata */}
          <div className="absolute bottom-5 left-6 hidden font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Lunex <span className="text-primary">ops</span> / Project Intake
          </div>

          <div className="absolute bottom-5 right-6 hidden font-label text-[10px] text-muted-foreground sm:block">
            08 / 08
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
