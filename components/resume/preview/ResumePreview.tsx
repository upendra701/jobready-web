"use client";

import { Eye, ZoomIn } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PreviewHeader from "./PreviewHeader";
import SkillsPreview from "./SkillsPreview";
import SummaryPreview from "./SummaryPreview";

export default function ResumePreview() {
  const { control } = useFormContext<ResumeFormValues>();

  const values = useWatch({
    control,
  }) as Partial<ResumeFormValues>;

  return (
    <div className="sticky top-24">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

        {/* Preview Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Live Preview
              </h3>

              <p className="text-xs text-slate-500">
                ATS Resume Preview
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100"
          >
            <ZoomIn className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        {/* Preview Workspace */}
        <div className="bg-slate-100 p-6">
          <div
            className="mx-auto overflow-hidden rounded-md bg-white shadow-2xl"
            style={{
              width: "210mm",
              minHeight: "297mm",
              transform: "scale(0.45)",
              transformOrigin: "top center",
              marginBottom: "-650px",
            }}
          >
            <div className="min-h-[297mm] p-12">
              <div className="space-y-8">
                <PreviewHeader values={values} />

                <SummaryPreview summary={values.summary} />

                <SkillsPreview skills={values.skills} />

                <ExperiencePreview
                  experiences={values.experiences}
                />

                <EducationPreview
                  educations={values.educations}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}