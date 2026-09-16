import { steps } from "@/data/static";

const WhatHappensNext = () => {
  const stepCount = String(steps.length).padStart(2, "0");

  return (
    <section
      className="border-b border-border bg-background"
      aria-labelledby="what-happens-next-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" aria-hidden="true" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                What Happens Next
              </p>
            </div>
          </div>

          <div>
            <h2
              id="what-happens-next-heading"
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              A simple path forward.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              No unnecessary process. Just a clear conversation about what
              you&apos;re trying to build and what it will take to get there.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex min-h-70 flex-col bg-background p-6 transition-colors duration-300 hover:bg-card sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-label text-[10px] text-muted-foreground"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span
                  className="size-2 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-auto">
                <div
                  className="mb-6 h-1 w-8 bg-primary transition-all duration-300 group-hover:w-14"
                  aria-hidden="true"
                />

                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Review → Conversation → Scope
          </p>

          <p className="text-xs text-muted-foreground">
            The goal is clarity before development begins.
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Discovery / Requirements / Scope
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            Contact / 03 · {stepCount} Steps
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
