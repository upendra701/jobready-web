import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string().trim().min(1, "Company name is required"),

  position: z.string().trim().min(1, "Job title is required"),

  location: z.string().trim().optional(),

  startDate: z.string().min(1, "Start date is required"),

  endDate: z.string().optional(),

  current: z.boolean(),

  description: z.string().trim().optional(),
});

export type ExperienceFormValues = z.input<typeof experienceSchema>;