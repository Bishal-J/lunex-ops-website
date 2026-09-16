const WorkHero = () => {
  return (
    <section
      aria-labelledby="work-hero-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Work
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1
              id="work-hero-heading"
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl"
            >
              Selected work.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore websites, applications, and digital product concepts
              shaped through thoughtful design and practical engineering.
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Websites / Applications / Concepts
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            Work / 01
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
