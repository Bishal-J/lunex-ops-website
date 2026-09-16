const ContactHero = () => {
  return (
    <section
      className="border-b border-border bg-background"
      aria-labelledby="contact-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" aria-hidden="true" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Contact
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1
              id="contact-hero-heading"
              className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl"
            >
              Let&apos;s build something useful.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Tell us about your project, idea, or problem. We&apos;ll review
              the details and get back to you with the next steps.
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Project / Idea / Problem
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            Contact / 01
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
