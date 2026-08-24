import { z } from "zod";

export const projectTypes = [
  "Website",
  "Web Application",
  "SaaS / MVP",
  "Existing Product",
  "Ongoing Development",
  "Not Sure",
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  website: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^https?:\/\/.+/i.test(value),
      "Enter a valid URL, including https://",
    ),
  projectType: z.enum(projectTypes, {
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
