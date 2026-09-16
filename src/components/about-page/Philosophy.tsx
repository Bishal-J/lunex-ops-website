const Philosophy = () => {
  return (
    <section
      className="border-b border-border bg-background"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" aria-hidden="true" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Philosophy
              </p>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h2
              id="philosophy-heading"
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl"
            >
              Don&apos;t just build websites.
            </h2>

            <div className="mt-8 flex items-start gap-4 sm:gap-6">
              <span
                className="mt-2 h-8 w-1 shrink-0 bg-primary sm:mt-3 sm:h-10"
                aria-hidden="true"
              />

              <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-muted-foreground sm:text-3xl lg:text-4xl">
                Build digital products that solve business problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 grid gap-8 border-t border-border pt-6 sm:grid-cols-2">
          <p className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Problem First / Product Second
          </p>

          <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:justify-self-end">
            Technology is a means, not the destination. Every project starts
            with understanding what needs to be solved and ends with something
            useful, measurable, and built to evolve.
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Purpose / Clarity / Impact
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            About / 03
          </span>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
