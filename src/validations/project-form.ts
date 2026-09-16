import { z } from "zod";

export const projectTypes = {
  Website: "WEBSITE",
  "Web Application": "WEB_APPLICATION",
  "SaaS / MVP": "SAAS_MVP",
  "Existing Product": "EXISTING_PRODUCT",
  "Ongoing Development": "ONGOING_DEVELOPMENT",
  "Not Sure": "NOT_SURE",
} as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),

  company: z.string().optional(),

  email: z.string().min(1, "Email is required").email("Enter a valid email"),

  phone: z.string().optional(),

  website: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^https?:\/\/.+/i.test(value),
      "Enter a valid URL, including https://",
    ),

  industry: z.string().optional(),

  projectType: z.enum(Object.values(projectTypes), {
    error: "Please select a project type",
  }),

  budget: z.string().optional(),

  timeline: z.string().optional(),

  projectDetails: z
    .string()
    .min(10, "Please tell us a little more about your project"),

  referral: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
