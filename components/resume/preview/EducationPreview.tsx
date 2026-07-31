import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import SectionTitle from "./SectionTitle";

interface EducationPreviewProps {
  educations?: ResumeFormValues["educations"];
}

export default function EducationPreview({
  educations,
}: EducationPreviewProps) {
  const validEducations =
    educations?.filter(
      (edu) =>
        edu.degree?.trim() ||
        edu.institution?.trim() ||
        edu.fieldOfStudy?.trim()
    ) ?? [];

  if (!validEducations.length) {
    return null;
  }

  return (
    <section className="space-y-5">
      <SectionTitle title="Education" />

      <div className="space-y-6">
        {validEducations.map((edu, index) => {
          const institutionLine = [
            edu.institution,
            edu.location,
          ]
            .filter(Boolean)
            .join(" • ");

          const descriptionLines =
            edu.description
              ?.split("\n")
              .map((line) => line.trim())
              .filter(Boolean) ?? [];

          return (
            <article
              key={index}
              className="space-y-3"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {edu.degree || "Degree"}
                  </h3>

                  {institutionLine && (
                    <p className="mt-1 text-[13px] font-medium text-slate-600">
                      {institutionLine}
                    </p>
                  )}

                  {edu.fieldOfStudy && (
                    <p className="mt-1 text-[13px] italic text-slate-500">
                      {edu.fieldOfStudy}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="mt-1 text-[12px] text-slate-500">
                      Grade / CGPA: {edu.grade}
                    </p>
                  )}
                </div>

                <p className="shrink-0 whitespace-nowrap text-[12px] font-medium text-slate-500">
                  {edu.startDate || ""}
                  {edu.current
                    ? " – Present"
                    : edu.endDate
                    ? ` – ${edu.endDate}`
                    : ""}
                </p>
              </div>

              {descriptionLines.length > 0 && (
                <ul className="ml-5 list-disc space-y-1 text-[13px] leading-6 text-slate-700">
                  {descriptionLines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}