import { z } from "zod";

export const educationSchema = z.object({
  institution: z
    .string()
    .trim()
    .min(1, "Institution name is required"),

  degree: z
    .string()
    .trim()
    .min(1, "Degree is required"),

  fieldOfStudy: z
    .string()
    .trim()
    .optional(),

  location: z
    .string()
    .trim()
    .optional(),

  startDate: z
    .string()
    .min(1, "Start date is required"),

  endDate: z
    .string()
    .optional(),

  current: z.boolean(),

  grade: z
    .string()
    .trim()
    .optional(),

  description: z
    .string()
    .trim()
    .optional(),
});

export type EducationFormValues = z.input<typeof educationSchema>;