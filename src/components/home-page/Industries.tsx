import { ArrowUpRight } from "lucide-react";

import { industries } from "@/data/static";

const Industries = () => {
  return (
    <section
      aria-labelledby="industries-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Who We Work With
              </p>
            </div>
          </div>

          <div>
            <h2
              id="industries-heading"
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Digital solutions for businesses moving forward.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We work with businesses across different industries to design and
              develop digital experiences that fit their goals, workflows, and
              customers.
            </p>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16 border-t border-border">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:bg-card sm:grid-cols-[72px_1fr_1fr_auto] sm:items-center sm:px-5"
            >
              {/* Number */}
              <span
                aria-hidden="true"
                className="font-label text-xs text-muted-foreground"
              >
                {industry.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl lg:text-4xl">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                {industry.description}
              </p>

              {/* Decorative Indicator */}
              <div
                aria-hidden="true"
                className="hidden size-9 items-center justify-center border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-neutral sm:flex"
              >
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>

        {/* Metadata */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Focus industries
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            {String(industries.length).padStart(2, "0")} sectors
          </span>
        </div>
      </div>
    </section>
  );
};

export default Industries;
