import { ArrowUpRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Performance First",
    description:
      "Fast, responsive experiences built with modern web technology.",
  },
  {
    number: "02",
    title: "Built Around Your Business",
    description: "No unnecessary templates or one-size-fits-all solutions.",
  },
  {
    number: "03",
    title: "From Idea to Production",
    description: "Development, integrations and deployment under one roof.",
  },
  {
    number: "04",
    title: "Built to Evolve",
    description: "Continue improving your product after launch.",
  },
];

const LunexDifference = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Why Lunex
              </p>
            </div>

            <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              More than a website.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We combine design, frontend engineering and full-stack development
              to create digital experiences that are built for real business
              needs.
            </p>
          </div>

          {/* Features */}
          <div className="border-t border-border">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-6 border-b border-border py-7 sm:grid-cols-[56px_1fr_auto] sm:items-start"
              >
                {/* Number */}
                <span className="font-label text-xs text-muted-foreground">
                  {feature.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Icon */}
                <ArrowUpRight className="hidden size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground sm:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Design / Engineering / Development
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            04 principles
          </span>
        </div>
      </div>
    </section>
  );
};

export default LunexDifference;
