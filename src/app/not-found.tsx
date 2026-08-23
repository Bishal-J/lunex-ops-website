import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-background">
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="size-2 bg-primary" />

                <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Error 404
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="font-label text-[clamp(5rem,15vw,12rem)] font-medium leading-[0.8] tracking-[-0.08em] text-foreground">
                404
              </p>

              <h1 className="mt-10 max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                This page doesn&apos;t exist.
              </h1>

              <Link
                href="/"
                className="group mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
            <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Lunex / Not Found
            </span>

            <span className="font-label text-[10px] text-muted-foreground">
              404
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
