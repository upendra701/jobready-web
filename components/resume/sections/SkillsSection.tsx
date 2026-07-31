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

  console.log("Current fields:", fields);

  const handleAddSkill = () => {
    console.log("Add Skill clicked");

    append({
      name: "",
    });

    console.log("Append called");
  };

  return (
    <SectionCard>
      <SectionHeader
        title="Skills"
        description="Add your technical and professional skills."
      />

      <p>Skills Count: {fields.length}</p>

      <div className="space-y-4">
        {fields.length > 0 ? (
          fields.map((field, index) => (
            <SkillCard
              key={field.id}
              index={index}
              onRemove={() => remove(index)}
            />
          ))
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>

      <AddItemButton onClick={handleAddSkill}>
        Add Skill
      </AddItemButton>
    </SectionCard>
  );
}