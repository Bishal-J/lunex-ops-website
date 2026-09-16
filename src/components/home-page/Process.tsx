import { processSteps } from "@/data/static";
import { ArrowRight } from "lucide-react";

const Process = () => {
  const stageCount = String(processSteps.length).padStart(2, "0");

  return (
    <section
      aria-labelledby="process-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                How We Work
              </p>
            </div>
          </div>

          <div>
            <h2
              id="process-heading"
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              A clear process for building better digital products.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              From the initial idea to launch and beyond, we follow a structured
              and collaborative process that keeps every stage focused on your
              goals.
            </p>
          </div>
        </div>

        {/* Desktop Process */}
        <div className="mt-16 hidden lg:block">
          <div
            className="grid border-y border-border"
            style={{
              gridTemplateColumns: `repeat(${processSteps.length}, minmax(0, 1fr))`,
            }}
          >
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`group relative min-h-75 border-border p-6 transition-colors duration-300 hover:bg-card ${
                  index !== processSteps.length - 1 ? "border-r" : ""
                }`}
              >
                {/* Step number */}
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs text-muted-foreground">
                    {step.number}
                  </span>

                  {index !== processSteps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  )}
                </div>

                {/* Step content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="mb-5 h-1 w-8 bg-primary transition-all duration-300 group-hover:w-14" />

                  <h3 className="font-label text-sm font-medium tracking-[0.08em] text-foreground">
                    {step.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Process */}
        <div className="mt-16 border-t border-border lg:hidden">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="group grid grid-cols-[48px_1fr] gap-5 border-b border-border py-6"
            >
              {/* Number / Line */}
              <div className="relative">
                <span className="font-label text-xs text-muted-foreground">
                  {step.number}
                </span>

                {index !== processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1.25 top-7 h-[calc(100%+1px)] w-px bg-border"
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <div className="mb-4 h-1 w-8 bg-primary transition-all duration-300 group-hover:w-14" />

                <h3 className="font-label text-sm font-medium tracking-[0.08em] text-foreground">
                  {step.label}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Metadata */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Product development lifecycle
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            {stageCount} stages
          </span>
        </div>
      </div>
    </section>
  );
};

export default Process;
