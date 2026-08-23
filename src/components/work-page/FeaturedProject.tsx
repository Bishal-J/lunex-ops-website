import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="size-2 bg-primary" />

          <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Featured Project
          </p>
        </div>

        {/* Visual */}
        <Link
          href="/work/growth-sailor"
          className="group mt-8 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <div className="relative aspect-[16/8] overflow-hidden border border-border bg-card sm:aspect-[16/7]">
            {/* Technical Grid */}
            <div
              className="absolute inset-0 opacity-50 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Browser / Product Interface */}
            <div className="absolute inset-6 sm:inset-10 lg:inset-16">
              <div className="relative h-full w-full border border-foreground/15 bg-background shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.015]">
                {/* Browser Header */}
                <div className="flex h-9 items-center gap-2 border-b border-border px-3">
                  <span className="size-1.5 bg-muted-foreground/40" />
                  <span className="size-1.5 bg-muted-foreground/40" />
                  <span className="size-1.5 bg-muted-foreground/40" />

                  <div className="ml-4 h-2 w-32 bg-muted sm:w-48" />
                </div>

                {/* Interface */}
                <div className="grid h-[calc(100%-36px)] grid-cols-[22%_1fr]">
                  <div className="border-r border-border p-3 sm:p-5">
                    <div className="h-2 w-16 bg-muted" />

                    <div className="mt-8 space-y-3">
                      <div className="h-2 w-full bg-primary" />
                      <div className="h-2 w-4/5 bg-muted" />
                      <div className="h-2 w-3/4 bg-muted" />
                      <div className="h-2 w-5/6 bg-muted" />
                    </div>
                  </div>

                  <div className="p-4 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-24 bg-muted sm:w-32" />
                        <div className="mt-2 h-2 w-16 bg-muted sm:w-20" />
                      </div>

                      <div className="h-7 w-20 bg-primary" />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-5">
                      <div className="h-20 border border-border sm:h-28" />
                      <div className="h-20 border border-border sm:h-28" />
                      <div className="h-20 border border-border sm:h-28" />
                    </div>

                    <div className="mt-5 grid grid-cols-[1.4fr_1fr] gap-3 sm:gap-5">
                      <div className="h-28 border border-border sm:h-40" />
                      <div className="h-28 border border-border sm:h-40" />
                    </div>
                  </div>
                </div>

                <span className="absolute left-0 top-0 h-1 w-1/4 bg-primary" />
              </div>
            </div>

            {/* Project Number */}
            <span className="absolute left-5 top-5 font-label text-[10px] text-muted-foreground sm:left-6 sm:top-6">
              01
            </span>

            {/* Category */}
            <span className="absolute right-5 top-5 font-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:right-6 sm:top-6">
              Client Project
            </span>

            {/* Arrow */}
            <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-neutral sm:bottom-6 sm:right-6">
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>

        {/* Project Information */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Main Info */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Client Project
              </span>

              <span className="size-1 bg-primary" />

              <span className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Featured
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Growth Sailor
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              A digital product designed to help businesses turn growth
              opportunities into measurable action.
            </p>
          </div>

          {/* Details + CTA */}
          <div className="flex flex-col justify-between gap-8 lg:items-end">
            <dl className="grid w-full grid-cols-2 border-t border-border">
              <div className="border-b border-border py-4">
                <dt className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Category
                </dt>

                <dd className="mt-2 text-sm font-medium text-foreground">
                  Digital Product
                </dd>
              </div>

              <div className="border-b border-border py-4 pl-5">
                <dt className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Role
                </dt>

                <dd className="mt-2 text-sm font-medium text-foreground">
                  Design & Development
                </dd>
              </div>
            </dl>

            <Link
              href="/work/growth-sailor"
              className="group inline-flex items-center gap-2 self-start border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-neutral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:self-end"
            >
              View Case Study
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Featured / Growth Sailor
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            02 / 05
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
