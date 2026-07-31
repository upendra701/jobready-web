import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import SectionTitle from "./SectionTitle";

interface ExperiencePreviewProps {
  experiences?: ResumeFormValues["experiences"];
}

export default function ExperiencePreview({
  experiences,
}: ExperiencePreviewProps) {
  const validExperiences =
    experiences?.filter(
      (exp) =>
        exp.position?.trim() ||
        exp.company?.trim() ||
        exp.description?.trim()
    ) ?? [];

  if (!validExperiences.length) {
    return null;
  }

  return (
    <section className="space-y-5">
      <SectionTitle title="Professional Experience" />

      <div className="space-y-6">
        {validExperiences.map((exp, index) => {
          const companyLine = [exp.company, exp.location]
            .filter(Boolean)
            .join(" • ");

          const descriptionLines =
            exp.description
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
                    {exp.position || "Job Title"}
                  </h3>

                  {companyLine && (
                    <p className="mt-1 text-[13px] font-medium text-slate-600">
                      {companyLine}
                    </p>
                  )}
                </div>

                <p className="shrink-0 whitespace-nowrap text-[12px] font-medium text-slate-500">
                  {exp.startDate || ""}

                  {exp.current
                    ? " – Present"
                    : exp.endDate
                    ? ` – ${exp.endDate}`
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