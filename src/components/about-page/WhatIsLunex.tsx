const WhatIsLunex = () => {
  return (
    <section
      aria-labelledby="what-is-lunex-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                What is Lunex <span className="text-primary">OPS</span>?
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="what-is-lunex-heading"
              className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl"
            >
              Lunex <span className="text-primary">OPS</span> is a small,
              independent digital development studio focused on building
              websites and web applications that solve real business problems.
            </h2>

            <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
              {/* Why We Exist */}
              <article>
                <h3 className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Why we exist
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Too many digital products are built around templates,
                  unnecessary complexity, or technology for its own sake. Lunex
                  OPS takes a more thoughtful approach: understand the problem
                  first, then build what actually makes sense.
                </p>
              </article>

              {/* What We Build */}
              <article>
                <h3 className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  What we build
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  From high-performance marketing websites to custom
                  applications, internal tools, and digital platforms, Lunex{" "}
                  <span className="text-primary">OPS</span> combines design and
                  engineering to create products built around how businesses
                  work.
                </p>
              </article>

              {/* Who We Work With */}
              <article>
                <h3 className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Who we work with
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  We work with ambitious businesses, startups, and teams that
                  need a technical partner to turn an idea, problem, or
                  opportunity into a useful digital product.
                </p>
              </article>

              {/* How We&apos;re Growing */}
              <article>
                <h3 className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  How we&apos;re growing
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Lunex <span className="text-primary">OPS</span> is starting
                  small and intentionally. Our hands-on approach keeps every
                  project focused, with a long-term goal of becoming a remotely
                  operated studio that brings together great people, design, and
                  engineering.
                </p>
              </article>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 border-t border-border pt-8">
              <p className="max-w-3xl text-xl font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-2xl">
                Small by design.{" "}
                <span className="text-muted-foreground">
                  Focused on doing serious work well.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Independent / Remote / Digital
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            About / 02
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLunex;
