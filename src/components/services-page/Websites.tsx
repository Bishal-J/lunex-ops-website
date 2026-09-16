import { capabilities, websiteTypes } from "@/data/static";
import { ArrowUpRight } from "lucide-react";

const Websites = () => {
  const capabilityCount = String(capabilities.length).padStart(2, "0");

  return (
    <section
      id="websites"
      aria-labelledby="websites-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                02 / Websites
              </p>
            </div>
          </div>

          <div>
            <h2
              id="websites-heading"
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Websites that make your business stand out.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We design and develop fast, responsive websites that communicate
              your value clearly, support your brand, and create meaningful
              paths for visitors to take action.
            </p>
          </div>
        </div>

        {/* Website Types */}
        <div className="mt-16 grid border-y border-border md:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map((type, index) => (
            <div
              key={type}
              className={`group flex items-center justify-between border-b border-border px-5 py-5 transition-colors duration-300 hover:bg-card ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"} ${
                index >= websiteTypes.length - 3 ? "lg:border-b-0" : ""
              } ${index >= websiteTypes.length - 2 ? "md:border-b-0" : ""}`}
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="font-label text-[10px] text-muted-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-foreground">
                  {type}
                </span>
              </div>

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Website Capabilities
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              From the first interaction to ongoing performance, we build
              websites that support your brand, users, and business objectives.
            </p>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className={`flex items-center gap-4 border-b border-border py-5 ${
                  index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 bg-primary"
                />

                <span className="text-sm font-medium text-foreground">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Websites / Experience / Performance
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            {capabilityCount} capabilities
          </span>
        </div>
      </div>
    </section>
  );
};

export default Websites;
