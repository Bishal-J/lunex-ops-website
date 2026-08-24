import { ArrowUpRight } from "lucide-react";

const websiteTypes = [
  "Business websites",
  "Startup websites",
  "SaaS websites",
  "Finance websites",
  "Real estate websites",
  "Landing pages",
];

const capabilities = [
  "Custom UI",
  "Responsive design",
  "Animation",
  "CMS",
  "Forms",
  "Analytics",
  "SEO",
  "Performance optimization",
  "Integrations",
];

const Websites = () => {
  return (
    <section className="border-b border-border bg-background" id="websites">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                02 / Websites
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              High-performance websites.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We build fast, responsive websites designed around your brand,
              audience and business goals.
            </p>
          </div>
        </div>

        {/* Website Types */}
        <div className="mt-16 grid border-y border-border md:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map((type, index) => (
            <div
              key={type}
              className={`group flex items-center justify-between border-b border-border px-5 py-5 transition-colors duration-300 hover:bg-card md:odd:border-r lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r ${
                index >= websiteTypes.length - 3 ? "lg:border-b-0" : ""
              } ${
                index >= websiteTypes.length - 2
                  ? "md:border-b-0 lg:border-b-0"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="font-label text-[10px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-foreground">
                  {type}
                </span>
              </div>

              <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Capabilities
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Everything needed to turn a website into a reliable business tool,
              from the interface through to performance and integrations.
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
                <span className="size-1.5 bg-primary" />

                <span className="text-sm font-medium text-foreground">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Websites / Experience / Performance
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            09 capabilities
          </span>
        </div>
      </div>
    </section>
  );
};

export default Websites;
