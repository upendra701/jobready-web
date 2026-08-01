"use client";

import { useFormContext } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/form";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import SectionCard from "../cards/SectionCard";

export default function SummarySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeFormValues>();

  return (
    <SectionCard>
      <SectionHeader
        title="Professional Summary"
        description="Briefly introduce yourself and highlight your strengths, experience, and career goals."
      />

      <div className="space-y-2">
        <Label
          htmlFor="summary"
          className="text-slate-900"
        >
          Summary
        </Label>

        <Textarea
          id="summary"
          rows={6}
          placeholder="Results-driven Technical Support Engineer with experience in troubleshooting, customer support, networking, and cloud technologies..."
          {...register("summary")}
        />

        {errors.summary && (
          <p className="text-sm text-red-500">
            {errors.summary.message}
          </p>
        )}
      </div>
    </SectionCard>
  );
}