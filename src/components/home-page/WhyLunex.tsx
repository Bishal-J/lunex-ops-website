import { capabilities } from "@/data/static";
import { ArrowUpRight } from "lucide-react";

const WhyLunex = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          {/* Message */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Why Lunex <span className="text-primary">ops</span>
              </p>
            </div>

            <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Engineered for the real world.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Complex functionality shouldn&apos;t mean a complicated
              experience.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
              From responsive interfaces to integrations, authentication,
              payments and data-driven systems, Lunex{" "}
              <span className="text-primary">ops</span> handles the engineering
              behind the experience so your product stays clear, fast and
              usable.
            </p>
          </div>

          {/* Technical System */}
          <div className="border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Engineering capabilities
              </span>

              <span className="font-label text-[10px] text-muted-foreground">
                09 / 09
              </span>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className={`group flex min-h-16 items-center justify-between border-b border-border px-5 py-4 transition-colors duration-200 hover:bg-muted ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  } ${
                    index === capabilities.length - 1
                      ? "sm:col-span-2 sm:border-r-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-label text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-foreground">
                      {capability}
                    </span>
                  </div>

                  <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              ))}
            </div>

            {/* System Footer */}
            <div className="flex items-center justify-between border-t border-border px-5 py-4">
              <span className="font-label text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                Infrastructure / Interface / Performance
              </span>

              <span className="flex items-center gap-2 font-label text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="size-1.5 bg-primary" />
                Production ready
              </span>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-border pt-6">
          <p className="max-w-4xl text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            The technology stays behind the scenes.{" "}
            <span className="text-muted-foreground">
              The experience stays simple.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyLunex;
