"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { SectionHeader } from "@/components/ui/form";
import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import ExperienceCard from "../cards/ExperienceCard";
import AddItemButton from "../shared/AddItemButton";
import SectionCard from "../shared/SectionCard";

export default function ExperienceSection() {
  const { control } = useFormContext<ResumeFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const handleAddExperience = () => {
    append({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  return (
    <SectionCard>
      <SectionHeader
        title="Work Experience"
        description="List your work experience starting with your most recent role."
      />

      <div className="space-y-6">
        {fields.length > 0 ? (
          fields.map((field, index) => (
            <ExperienceCard
              key={field.id}
              index={index}
              onRemove={() => remove(index)}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            No work experience added yet.
          </p>
        )}
      </div>

      <AddItemButton onClick={handleAddExperience}>
        Add Experience
      </AddItemButton>
    </SectionCard>
  );
}