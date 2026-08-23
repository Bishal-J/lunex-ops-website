import { ArrowUpRight } from "lucide-react";

const developmentServices = [
  "Maintenance",
  "Bug fixes",
  "New features",
  "Performance improvements",
  "Content updates",
  "Integrations",
  "Technical support",
  "Continuous development",
];

const OngoingDevelopment = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                04 / Ongoing Development
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Launch isn&apos;t the finish line.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Your product should keep improving after launch. Lunex provides
              ongoing development, technical support and improvements as your
              business evolves.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 border-y border-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {developmentServices.map((service, index) => (
              <div
                key={service}
                className={`group flex min-h-36 flex-col justify-between border-b border-border p-5 transition-colors duration-300 hover:bg-card ${
                  index % 4 !== 3 ? "lg:border-r" : ""
                } ${index % 2 === 0 ? "sm:border-r lg:border-r" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-label text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <div className="mt-8">
                  <span className="size-1.5 bg-primary" />

                  <h3 className="mt-3 text-sm font-medium text-foreground">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recurring Development Statement */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Continuous Development
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
              Keep your digital product moving forward.{" "}
              <span className="text-muted-foreground">
                Improve, adapt and build on what already works.
              </span>
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Support / Improvement / Growth
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            08 capabilities
          </span>
        </div>
      </div>
    </section>
  );
};

export default OngoingDevelopment;
