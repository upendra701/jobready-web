import { z } from "zod";

export const skillSchema = z.object({
  id: z.string().optional(),

  name: z
    .string()
    .trim()
    .min(1, "Skill is required")
    .max(50, "Skill cannot exceed 50 characters"),

  level: z
    .enum([
      "Beginner",
      "Intermediate",
      "Advanced",
      "Expert",
    ])
    .default("Intermediate"),
});

export type SkillFormValues = z.input<typeof skillSchema>;