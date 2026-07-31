"use client";

import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { resumeSchema } from "@/lib/validations/resume.schema";

import type { Resume } from "@prisma/client";

type ResumeFormValues = z.input<typeof resumeSchema>;

interface UseResumeFormProps {
  resume?: Resume;
}

interface UseResumeFormReturn {
  form: UseFormReturn<ResumeFormValues>;
}

export function useResumeForm({
  resume,
}: UseResumeFormProps = {}): UseResumeFormReturn {
  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),

    defaultValues: {
      title: resume?.title ?? "",
      jobTitle: resume?.jobTitle ?? "",
      fullName: resume?.fullName ?? "",
      email: resume?.email ?? "",
      phone: resume?.phone ?? "",
      location: resume?.location ?? "",
      website: resume?.website ?? "",
      linkedin: resume?.linkedin ?? "",
      github: resume?.github ?? "",
      summary: resume?.summary ?? "",

      // Dynamic Sections
      experiences: [],
      educations: [],
      skills: [],
    },

    mode: "onChange",
  });

  return {
    form,
  };
}