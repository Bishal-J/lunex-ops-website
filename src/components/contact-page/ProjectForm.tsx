"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Loader2 } from "lucide-react";
import {
  ContactFormValues,
  contactSchema,
  projectTypes,
} from "@/validations/project-form";

const ProjectForm = () => {
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      website: "",
      projectType: undefined,
      budget: "",
      timeline: "",
      projectDetails: "",
      referral: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full border border-border bg-input px-4 py-3.5 text-sm text-input-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring";

  const labelClass =
    "mb-2 block font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground";

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <p className="font-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Start a Project
              </p>
            </div>

            <h2 className="mt-8 max-w-md text-3xl font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-4xl">
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              You don&apos;t need to have everything figured out. Give us the
              context, and we&apos;ll help understand what comes next.
            </p>

            <div className="mt-10 border-t border-border pt-5">
              <p className="font-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                All fields marked * are required
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {isSubmitSuccessful ? (
              <div className="border border-border bg-card p-8 sm:p-12">
                <span className="inline-flex size-10 items-center justify-center bg-primary text-neutral">
                  <ArrowUpRight className="size-5" />
                </span>

                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  Thanks for reaching out.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
                  We&apos;ve received your project details and will get back to
                  you soon.
                </p>

                <button
                  type="button"
                  onClick={() => reset()}
                  className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Submit another project
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="border border-border bg-card"
              >
                <div className="grid gap-0 sm:grid-cols-2">
                  {/* Name */}
                  <div className="border-b border-border p-5 sm:border-r">
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-primary">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={inputClass}
                    />

                    {errors.name && (
                      <p className="mt-2 text-xs text-danger">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="border-b border-border p-5">
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      {...register("company")}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div className="border-b border-border p-5 sm:border-r">
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-primary">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      {...register("email")}
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-2 text-xs text-danger">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Website */}
                  <div className="border-b border-border p-5">
                    <label htmlFor="website" className={labelClass}>
                      Website
                    </label>

                    <input
                      id="website"
                      type="url"
                      autoComplete="url"
                      placeholder="https://example.com"
                      {...register("website")}
                      className={inputClass}
                    />

                    {errors.website && (
                      <p className="mt-2 text-xs text-danger">
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="border-b border-border p-5 sm:col-span-2">
                    <label htmlFor="projectType" className={labelClass}>
                      Project Type <span className="text-primary">*</span>
                    </label>

                    <select
                      id="projectType"
                      {...register("projectType")}
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    {errors.projectType && (
                      <p className="mt-2 text-xs text-danger">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="border-b border-border p-5 sm:border-r">
                    <label htmlFor="budget" className={labelClass}>
                      Budget
                    </label>

                    <select
                      id="budget"
                      {...register("budget")}
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="">Select a range</option>
                      <option value="Under ₹1L">Under ₹1L</option>
                      <option value="₹1L – ₹3L">₹1L – ₹3L</option>
                      <option value="₹3L – ₹5L">₹3L – ₹5L</option>
                      <option value="₹5L – ₹10L">₹5L – ₹10L</option>
                      <option value="₹10L+">₹10L+</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="border-b border-border p-5">
                    <label htmlFor="timeline" className={labelClass}>
                      Timeline
                    </label>

                    <select
                      id="timeline"
                      {...register("timeline")}
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="">Select a timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1–2 months">1–2 months</option>
                      <option value="2–3 months">2–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="border-b border-border p-5 sm:col-span-2">
                    <label htmlFor="projectDetails" className={labelClass}>
                      Project Details <span className="text-primary">*</span>
                    </label>

                    <textarea
                      id="projectDetails"
                      rows={7}
                      placeholder="Tell us about the project, what you're trying to achieve, and what you need help with..."
                      {...register("projectDetails")}
                      className={`${inputClass} resize-y`}
                    />

                    {errors.projectDetails && (
                      <p className="mt-2 text-xs text-danger">
                        {errors.projectDetails.message}
                      </p>
                    )}
                  </div>

                  {/* Referral */}
                  <div className="border-b border-border p-5 sm:col-span-2">
                    <label htmlFor="referral" className={labelClass}>
                      How did you hear about us?
                    </label>

                    <input
                      id="referral"
                      type="text"
                      placeholder="Google, referral, LinkedIn, etc."
                      {...register("referral")}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                    By submitting this form, you&apos;re giving us the
                    information we need to understand your project.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-neutral transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        Sending
                        <Loader2 className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Project Details
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="border-t border-danger bg-danger/10 px-5 py-4 text-sm text-danger"
                  >
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Project Intake / Lunex <span className="text-primary">ops</span>
          </span>

          <span className="font-label text-[10px] text-muted-foreground">
            03 / 05
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectForm;
