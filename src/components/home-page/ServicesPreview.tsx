import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { services } from "@/data/static";

const ServicesPreview = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                What We Build
              </p>
            </div>
          </div>

          <div>
            <h2
              id="services-heading"
              className="max-w-3xl text-4xl font-semibold leading-none tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Digital products designed to solve real business needs.
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-97.5 flex-col bg-background p-6 transition-colors duration-300 hover:bg-card sm:p-8"
            >
              {/* Number and Icon */}
              <div className="flex items-center justify-between">
                <span className="font-label text-xs text-muted-foreground">
                  {service.number}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                />
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  aria-label={`${service.cta}: ${service.title}`}
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {service.cta}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>

              {/* Hover Accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </article>
          ))}
        </div>

        {/* Bottom Metadata */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Digital capabilities
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            {String(services.length).padStart(2, "0")} services
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
