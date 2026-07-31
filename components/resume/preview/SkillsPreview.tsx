import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import SectionTitle from "./SectionTitle";

interface SkillsPreviewProps {
  skills?: ResumeFormValues["skills"];
}

export default function SkillsPreview({
  skills,
}: SkillsPreviewProps) {
  const validSkills =
    skills
      ?.map((skill) => skill.name.trim())
      .filter(Boolean) ?? [];

  if (!validSkills.length) {
    return null;
  }

  return (
    <section className="space-y-3">
      <SectionTitle title="Technical Skills" />

      <p className="text-[13px] leading-7 text-slate-700">
        {validSkills.join(" • ")}
      </p>
    </section>
  );
}