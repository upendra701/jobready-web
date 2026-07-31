"use client";

import { useFormContext } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

export default function SummarySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeFormValues>();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Professional Summary
        </h3>

        <p className="text-sm text-slate-400">
          Briefly introduce yourself and highlight your strengths,
          experience, and career goals.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>

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
    </div>
  );
}