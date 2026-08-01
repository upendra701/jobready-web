"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { SectionHeader } from "@/components/ui/form";
import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import AddItemButton from "../shared/AddItemButton";
import SectionCard from "../cards/SectionCard";
import SkillCard from "../cards/SkillCard";

export default function SkillsSection() {
  const { control } = useFormContext<ResumeFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const handleAddSkill = () => {
    append({
      name: "",
    });
  };

  return (
    <SectionCard>
      <SectionHeader
        title="Skills"
        description="Add your technical and professional skills."
        className="text-slate-900"
        descriptionClassName="text-slate-600"
      />

      <div className="space-y-4">
        {fields.map((field, index) => (
          <SkillCard
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
      </div>

      <AddItemButton onClick={handleAddSkill}>
        Add Skill
      </AddItemButton>
    </SectionCard>
  );
}