"use client";

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
    <div className="sticky top-6">
      <div className="mx-auto w-full max-w-[794px] rounded-xl border bg-white shadow-xl">
        {/* A4 Resume */}
        <div
          className="min-h-[1123px] p-10"
          style={{
            aspectRatio: "210 / 297",
          }}
        >
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
  );
}