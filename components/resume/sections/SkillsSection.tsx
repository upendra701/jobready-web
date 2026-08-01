"use client";

import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { SectionHeader } from "@/components/ui/form";
import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import AddItemButton from "../shared/AddItemButton";
import SectionCard from "../cards/SectionCard";
import SkillCard from "../cards/SkillCard";

export default function SkillsSection() {
  const { control, getValues } = useFormContext<ResumeFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  useEffect(() => {
    console.log("Fields:", fields);
    console.log("Form Values:", getValues());
  }, [fields, getValues]);

  const handleAddSkill = () => {
    console.log("===== ADD SKILL =====");
    console.log("Before:", getValues("skills"));

    append({
      name: "",
    });

    setTimeout(() => {
      console.log("After:", getValues("skills"));
    }, 100);
  };

  return (
    <SectionCard>
      <SectionHeader
        title="Skills"
        description="Add your technical and professional skills."
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