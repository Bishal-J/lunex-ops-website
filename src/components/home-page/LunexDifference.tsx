import { ArrowUpRight } from "lucide-react";

import { features } from "@/data/static";

const LunexDifference = () => {
  return (
    <section
      aria-labelledby="difference-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Why Lunex <span className="text-primary">OPS</span>
              </p>
            </div>

            <h2
              id="difference-heading"
              className="mt-8 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Thoughtful design. Solid engineering. Built for your goals.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We bring design and development together to build digital products
              that align with your business, support your users, and provide a
              foundation for what comes next.
            </p>
          </div>

          {/* Features */}
          <div className="border-t border-border">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group grid gap-6 border-b border-border py-7 sm:grid-cols-[56px_1fr_auto] sm:items-start"
              >
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="font-label text-xs text-muted-foreground"
                >
                  {feature.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Icon */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground sm:block"
                />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Design / Engineering / Development
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            {String(features.length).padStart(2, "0")} principles
          </span>
        </div>
      </div>
    </section>
  );
};

export default LunexDifference;
