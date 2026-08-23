const AboutHero = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                About
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl">
              A small studio building serious digital products.
            </h1>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Studio / Design / Development
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            01 / 07
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
