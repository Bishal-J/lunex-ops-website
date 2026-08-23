import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Design System
            </span>

            <h1 className="mt-1 font-headline text-xl font-bold tracking-tight">
              Future UI
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-primary" />

            <span className="font-label text-xs uppercase tracking-widest text-muted-foreground">
              v1.0.0
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <section className="border-b border-border py-20 sm:py-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />

              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">
                Foundation
              </span>
            </div>

            <h2 className="mt-6 font-headline text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Built for the
              <br />
              <span className="text-primary">future.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A high-contrast design system built around Geist, JetBrains Mono,
              sharp geometry, semantic tokens, and a focused neon palette.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button className="bg-primary px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-neutral transition-opacity hover:opacity-80">
                Get Started
              </button>

              <button className="border border-border bg-transparent px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background">
                Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="01"
            title="Color System"
            description="A small, intentional palette for strong visual identity."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Primary"
              value="#CCFF00"
              description="Accent, action, focus"
              className="bg-primary text-neutral"
            />

            <ColorCard
              name="Secondary"
              value="#F5F5F5"
              description="Light surfaces, contrast"
              className="bg-secondary text-neutral"
            />

            <ColorCard
              name="Tertiary"
              value="#DCEFFF"
              description="Information, highlights"
              className="bg-tertiary text-neutral"
            />

            <ColorCard
              name="Neutral"
              value="#08090A"
              description="Strong surfaces, contrast"
              className="bg-neutral text-secondary"
            />
          </div>

          <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <TokenCard
              name="Background"
              token="bg-background"
              className="bg-background text-foreground"
            />

            <TokenCard
              name="Card"
              token="bg-card"
              className="bg-card text-card-foreground"
            />

            <TokenCard
              name="Muted"
              token="bg-muted"
              className="bg-muted text-foreground"
            />

            <TokenCard
              name="Input"
              token="bg-input"
              className="bg-input text-input-foreground"
            />
          </div>
        </section>

        {/* Typography */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="02"
            title="Typography"
            description="Three clear typographic roles create hierarchy and consistency."
          />

          <div className="mt-12 space-y-14">
            <div>
              <TypographyLabel>Headline / Geist</TypographyLabel>

              <h3 className="mt-4 max-w-5xl font-headline text-5xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-7xl">
                Make the future visible.
              </h3>
            </div>

            <div className="max-w-3xl">
              <TypographyLabel>Body / Geist</TypographyLabel>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Design systems should make decisions easier. This system uses a
                focused set of strong primitives to create interfaces that are
                consistent, expressive, accessible, and easy to extend.
              </p>
            </div>

            <div>
              <TypographyLabel>Label / JetBrains Mono</TypographyLabel>

              <p className="mt-4 font-label text-sm uppercase tracking-[0.18em] text-primary">
                SYSTEM_READY / 2026
              </p>
            </div>

            <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <TypeSample size="text-5xl" label="5XL" />
              <TypeSample size="text-4xl" label="4XL" />
              <TypeSample size="text-2xl" label="2XL" />
              <TypeSample size="text-base" label="BASE" />
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="03"
            title="Actions"
            description="Buttons use contrast, typography, and geometry to establish hierarchy."
          />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button className="bg-primary px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-neutral transition-opacity hover:opacity-80">
              Primary
            </button>

            <button className="bg-neutral px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-secondary transition-opacity hover:opacity-80">
              Neutral
            </button>

            <button className="border border-border bg-transparent px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background">
              Outline
            </button>

            <button className="bg-tertiary px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-neutral transition-opacity hover:opacity-80">
              Tertiary
            </button>

            <button
              disabled
              className="cursor-not-allowed bg-muted px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Disabled
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-8">
            <button className="font-label text-xs uppercase tracking-wider text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary">
              Text Action
            </button>

            <button className="group flex items-center gap-3 font-label text-xs uppercase tracking-wider text-foreground">
              <span className="h-2 w-2 bg-primary transition-transform group-hover:translate-x-1" />
              Arrow Action
            </button>
          </div>
        </section>

        {/* Surfaces */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="04"
            title="Surfaces"
            description="Semantic surfaces automatically adapt to light and dark themes."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <SurfaceCard
              eyebrow="CARD"
              title="Card Surface"
              description="Use semantic card surfaces for content containers, panels, and grouped information."
              className="bg-card text-card-foreground"
            />

            <SurfaceCard
              eyebrow="TERTIARY"
              title="Highlight Surface"
              description="Use tertiary for informational blocks, highlights, callouts, and visual emphasis."
              className="bg-tertiary text-neutral"
            />

            <SurfaceCard
              eyebrow="NEUTRAL"
              title="Dark Surface"
              description="Use neutral for strong contrast sections, navigation areas, and dramatic visual moments."
              className="bg-neutral text-secondary"
            />
          </div>

          <div className="mt-6 border border-border bg-muted p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-primary">
                  MUTED SURFACE
                </span>

                <h3 className="mt-2 font-headline text-xl font-bold">
                  Secondary information
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Muted surfaces should provide separation without competing with
                the primary content.
              </p>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="05"
            title="Geometry"
            description="Square geometry is the default language of the system."
          />

          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            <GeometryCard
              title="Border"
              description="Use border-border for standard component separation."
            />

            <GeometryCard
              title="Strong Border"
              description="Use border-border-strong for high-contrast boundaries."
              strong
            />

            <GeometryCard
              title="No Radius"
              description="Components remain square unless intentionally overridden."
            />
          </div>
        </section>

        {/* Forms */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="06"
            title="Form Elements"
            description="Inputs use semantic colors with a primary focus state."
          />

          <div className="mt-10 grid max-w-3xl gap-6">
            <FormField label="Name" placeholder="Enter your name" />

            <FormField
              label="Email"
              type="email"
              placeholder="you@example.com"
            />

            <div>
              <label className="mb-2 block font-label text-xs font-bold uppercase tracking-widest text-foreground">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write something..."
                className="w-full resize-none border border-border bg-input px-4 py-3 text-input-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex items-center gap-3 border border-primary bg-primary/10 p-4">
              <span className="h-2 w-2 shrink-0 bg-primary" />

              <p className="text-sm text-foreground">
                Focus states use the primary brand color for clear keyboard
                navigation.
              </p>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="border-b border-border py-20">
          <SectionHeader
            number="07"
            title="States"
            description="System states remain visually distinct from brand colors."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <StateCard
              title="Success"
              description="Operation completed successfully."
              className="bg-success text-success-foreground"
            />

            <StateCard
              title="Warning"
              description="Something requires your attention."
              className="bg-warning text-warning-foreground"
            />

            <StateCard
              title="Danger"
              description="An action requires caution."
              className="bg-danger text-danger-foreground"
            />
          </div>
        </section>

        {/* Principles */}
        <section className="py-20">
          <SectionHeader
            number="08"
            title="Principles"
            description="The rules that keep the visual language consistent."
          />

          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <Principle
              number="01"
              title="Sharp"
              description="Square geometry by default. No unnecessary rounded corners."
            />

            <Principle
              number="02"
              title="Bold"
              description="Strong contrast and expressive typography create visual hierarchy."
            />

            <Principle
              number="03"
              title="Focused"
              description="A small, intentional palette keeps interfaces coherent."
            />

            <Principle
              number="04"
              title="Adaptive"
              description="Semantic tokens allow components to work across light and dark themes."
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-headline font-bold">Future UI</p>

            <p className="mt-1 font-label text-[10px] uppercase tracking-widest text-muted-foreground">
              Design system foundation
            </p>
          </div>

          <span className="font-label text-xs uppercase tracking-widest text-primary">
            Built with Tailwind CSS
          </span>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   Components
   ========================================================= */

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="font-label text-xs font-bold text-primary">
            {number}
          </span>

          <span className="h-px w-8 bg-primary" />

          <span className="font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
            System
          </span>
        </div>

        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function TypographyLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

function ColorCard({
  name,
  value,
  description,
  className,
}: {
  name: string;
  value: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`min-h-44 border border-border p-5 ${className}`}>
      <div className="flex h-full flex-col justify-between">
        <div>
          <span className="font-label text-xs font-bold uppercase tracking-widest">
            {name}
          </span>

          <p className="mt-2 text-sm opacity-70">{description}</p>
        </div>

        <span className="font-label text-sm">{value}</span>
      </div>
    </div>
  );
}

function TokenCard({
  name,
  token,
  className,
}: {
  name: string;
  token: string;
  className: string;
}) {
  return (
    <div className={`p-5 ${className}`}>
      <span className="font-headline font-bold">{name}</span>

      <p className="mt-2 font-label text-[10px] uppercase tracking-wider opacity-60">
        {token}
      </p>
    </div>
  );
}

function TypeSample({ size, label }: { size: string; label: string }) {
  return (
    <div>
      <span className="font-label text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>

      <p className={`mt-3 font-headline font-bold tracking-tight ${size}`}>
        Aa
      </p>
    </div>
  );
}

function SurfaceCard({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`min-h-64 border border-border p-6 ${className}`}>
      <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>

      <h3 className="mt-12 font-headline text-2xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 opacity-70">{description}</p>
    </div>
  );
}

function GeometryCard({
  title,
  description,
  strong = false,
}: {
  title: string;
  description: string;
  strong?: boolean;
}) {
  return (
    <div className="bg-card p-6">
      <div
        className={`mb-8 h-16 w-16 border ${
          strong ? "border-border-strong" : "border-border"
        }`}
      />

      <h3 className="font-headline text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-label text-xs font-bold uppercase tracking-widest text-foreground">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-border bg-input px-4 py-3 text-input-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function StateCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`border border-border p-6 ${className}`}>
      <span className="font-label text-xs font-bold uppercase tracking-widest">
        {title}
      </span>

      <p className="mt-4 text-sm leading-6 opacity-75">{description}</p>
    </div>
  );
}

function Principle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card p-6">
      <span className="font-label text-xs font-bold text-primary">
        {number}
      </span>

      <h3 className="mt-8 font-headline text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
