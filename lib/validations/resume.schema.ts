import { z } from "zod";

import { educationSchema } from "./education.schema";
import { experienceSchema } from "./experience.schema";
import { skillSchema } from "./skill.schema";

export const resumeSchema = z.object({
  // Resume Details
  title: z
    .string()
    .trim()
    .min(1, "Resume title is required")
    .max(100),

  jobTitle: z.string().trim().optional(),

  // Personal Information
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .or(z.literal(""))
    .optional(),

  phone: z.string().trim().optional(),

  location: z.string().trim().optional(),

  website: z.string().trim().optional(),

  linkedin: z.string().trim().optional(),

  github: z.string().trim().optional(),

  // Professional Summary
  summary: z
    .string()
    .max(1000)
    .optional(),

  // Resume Sections
  experiences: z.array(experienceSchema).default([]),

  educations: z.array(educationSchema).default([]),

  skills: z.array(skillSchema).default([]),
});

export type ResumeFormValues = z.input<typeof resumeSchema>;