import { capabilityGroups } from "@/data/static";

const Capabilities = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                05 / Capabilities
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              The capabilities behind the work.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From interfaces and infrastructure to product functionality and
              performance, Lunex <span className="text-primary">ops</span>{" "}
              brings the pieces together under one roof.
            </p>
          </div>
        </div>

        {/* Capability Groups */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <div
              key={group.number}
              className="group flex min-h-80 flex-col bg-background p-6 transition-colors duration-300 hover:bg-card sm:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="font-label text-xs text-muted-foreground">
                  {group.number}
                </span>

                <span className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {group.title}
                </span>
              </div>

              {/* Description */}
              <div className="mt-10">
                <div className="mb-5 h-1 w-8 bg-primary transition-all duration-300 group-hover:w-14" />

                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
              </div>

              {/* Items */}
              <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-5">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="size-1.5 bg-primary" />

                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metadata */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Frontend / Backend / Product / Experience
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            04 disciplines
          </span>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
