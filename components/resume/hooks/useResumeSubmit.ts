"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import type { Resume } from "@prisma/client";

import { resumeSchema } from "@/lib/validations/resume.schema";
import { saveResume } from "../services/resume.service";

type ResumeFormValues = z.input<typeof resumeSchema>;

interface UseResumeSubmitProps {
  mode: "create" | "edit";
  resume?: Resume;
}

export function useResumeSubmit({
  mode,
  resume,
}: UseResumeSubmitProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const submit = async (values: ResumeFormValues) => {
    setLoading(true);

    try {
      await saveResume(values, mode, resume?.id);

      router.push("/dashboard/resumes");
      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submit,
  };
}