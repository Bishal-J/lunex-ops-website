import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const conceptProjects = [
  {
    number: "01",
    category: "Finance",
    title: "Investment / Portfolio Analytics Platform",
    description:
      "A concept platform for tracking portfolios, analyzing performance and turning investment data into clear insights.",
  },
  {
    number: "02",
    category: "Real Estate",
    title: "Real Estate Investment Platform",
    description:
      "A concept digital platform for discovering, evaluating and managing real estate investment opportunities.",
  },
  {
    number: "03",
    category: "SaaS",
    title: "SaaS Management Platform",
    description:
      "A concept management platform for monitoring products, users, subscriptions and operational data.",
  },
];

const ConceptProjects = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Concepts
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Exploring what&apos;s possible.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Selected product concepts exploring how thoughtful design and
              engineering can solve complex problems across different
              industries.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
          {conceptProjects.map((project) => (
            <Link
              key={project.number}
              href="/contact"
              className="group flex min-h-120 flex-col bg-background transition-colors duration-300 hover:bg-card focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
            >
              {/* Visual */}
              <div className="relative aspect-4/3 overflow-hidden border-b border-border bg-muted">
                <div
                  className="absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Abstract interface */}
                <div className="absolute inset-8 border border-border bg-background sm:inset-10">
                  <div className="flex h-8 items-center border-b border-border px-3">
                    <div className="h-1.5 w-16 bg-muted-foreground/30" />
                  </div>

                  <div className="grid grid-cols-[28%_1fr]">
                    <div className="border-r border-border p-3">
                      <div className="h-1.5 w-full bg-primary" />

                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 w-4/5 bg-muted" />
                        <div className="h-1.5 w-full bg-muted" />
                        <div className="h-1.5 w-3/4 bg-muted" />
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="h-2 w-20 bg-muted" />

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="h-16 border border-border" />
                        <div className="h-16 border border-border" />
                      </div>

                      <div className="mt-2 h-20 border border-border" />
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <span className="absolute left-4 top-4 font-label text-[10px] text-muted-foreground">
                  {project.number}
                </span>

                {/* Concept Label */}
                <span className="absolute right-4 top-4 bg-primary px-2 py-1 font-label text-[9px] font-medium uppercase tracking-[0.12em] text-neutral">
                  Concept Project
                </span>

                {/* Arrow */}
                <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-neutral">
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-foreground">
                  Explore Concept
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Clarification */}
        <div className="mt-6 flex items-center gap-3">
          <span className="size-1.5 bg-primary" />

          <p className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Concept projects — independent explorations, not client work
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Finance / Real Estate / SaaS
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            03 concepts
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConceptProjects;
