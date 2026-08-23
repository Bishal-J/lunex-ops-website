import { ArrowUpRight } from "lucide-react";

const applicationTypes = [
  "Dashboards",
  "Admin panels",
  "Customer portals",
  "Internal tools",
  "SaaS MVPs",
  "Booking systems",
  "Data platforms",
  "Payment systems",
  "Workflow applications",
  "API-driven applications",
];

const WebApplications = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                03 / Web Applications
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Applications that do more.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Custom web applications built around the way your business
              operates, from internal tools to customer-facing platforms.
            </p>
          </div>
        </div>

        {/* Application Types */}
        <div className="mt-16 border-y border-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {applicationTypes.map((type, index) => (
              <div
                key={type}
                className={`group flex min-h-28 flex-col justify-between border-b border-border p-5 transition-colors duration-300 hover:bg-card ${
                  index % 5 !== 4 ? "lg:border-r" : ""
                } ${index % 2 === 0 ? "sm:border-r lg:border-r" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-label text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <span className="mt-8 text-sm font-medium text-foreground">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Statement */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Built Around Your Workflow
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
              Your business has its own way of working.{" "}
              <span className="text-muted-foreground">
                Your application should work the same way.
              </span>
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Product / Systems / Engineering
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            10 application types
          </span>
        </div>
      </div>
    </section>
  );
};

export default WebApplications;
