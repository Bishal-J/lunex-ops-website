import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/static";

const SelectedWork = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Selected Work
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Work built to make an impact.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A selection of digital products and experiences built by Lunex
              OPS.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className={`group block ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Visual */}
              <div
                className={`relative overflow-hidden border border-border bg-card ${
                  project.featured
                    ? "aspect-16/8 sm:aspect-16/7"
                    : "aspect-16/10"
                }`}
              >
                {/* Technical Grid */}
                <div
                  className="absolute inset-0 opacity-50 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Project Interface */}
                <div className="absolute inset-8 flex items-center justify-center sm:inset-12">
                  <div className="relative h-full w-full border border-foreground/10">
                    {/* Main visual block */}
                    <div
                      className={`absolute left-1/2 top-1/2 aspect-video w-[55%] -translate-x-1/2 -translate-y-1/2 border border-foreground/20 bg-background transition-transform duration-500 group-hover:scale-[1.03] ${
                        project.featured ? "w-[55%]" : "w-[60%]"
                      }`}
                    >
                      <div className="absolute left-0 top-0 h-1 w-1/3 bg-primary" />

                      <div className="absolute left-5 right-5 top-8 h-2 bg-muted" />

                      <div className="absolute left-5 top-16 h-24 w-[35%] bg-muted" />

                      <div className="absolute right-5 top-16 h-24 w-[45%] border border-border" />

                      <div className="absolute bottom-5 left-5 h-2 w-1/2 bg-muted" />
                    </div>

                    {/* Interface lines */}
                    <div className="absolute left-1/2 top-0 h-full w-px bg-border/50" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-border/50" />
                  </div>
                </div>

                {/* Metadata */}
                <span className="absolute left-5 top-5 font-label text-[10px] text-muted-foreground">
                  {project.number}
                </span>

                <span className="absolute right-5 top-5 font-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {project.category}
                </span>

                <span className="absolute bottom-5 right-5 flex size-9 items-center justify-center border border-border bg-background text-foreground transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-neutral">
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Project Info */}
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {project.category}
                  </p>
                </div>

                <span className="hidden pt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:block">
                  View project
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-start">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View All Work
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
