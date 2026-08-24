const principles = [
  {
    number: "01",
    title: "Don't sell technology.",
    statement: "Sell the outcome.",
  },
  {
    number: "02",
    title: "Don't build for the sake of building.",
    statement: "Solve a real business problem.",
  },
  {
    number: "03",
    title: "Don't stop at launch.",
    statement: "Build products that can evolve.",
  },
];

const HowWeThink = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                How We Think
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Outcomes over technology.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              The tools change. The goal doesn&apos;t. We focus on creating
              useful digital products that move the business forward.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group flex min-h-75 flex-col bg-background p-6 transition-colors duration-300 hover:bg-card sm:p-8"
            >
              <span className="font-label text-[10px] text-muted-foreground">
                {principle.number}
              </span>

              <div className="mt-auto">
                <div className="mb-6 h-1 w-8 bg-primary transition-all duration-300 group-hover:w-14" />

                <h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="mt-4 text-lg font-medium leading-tight text-muted-foreground sm:text-xl">
                  {principle.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
            Good technology supports the solution.{" "}
            <span className="text-muted-foreground">
              It shouldn&apos;t become the solution.
            </span>
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Outcome / Purpose / Evolution
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            04 / 07
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowWeThink;
