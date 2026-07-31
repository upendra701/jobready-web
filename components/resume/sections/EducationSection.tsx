"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { SectionHeader } from "@/components/ui/form";
import type { ResumeFormValues } from "@/lib/validations/resume.schema";

import EducationCard from "../cards/EducationCard";
import AddItemButton from "../shared/AddItemButton";
import SectionCard from "../shared/SectionCard";

export default function EducationSection() {
  const { control } = useFormContext<ResumeFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const handleAddEducation = () => {
    append({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      grade: "",
      description: "",
    });
  };

  return (
    <SectionCard>
      <SectionHeader
        title="Education"
        description="Add your educational qualifications starting with the most recent."
      />

      <div className="space-y-6">
        {fields.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No education added yet.
          </p>
        ) : (
          fields.map((field, index) => (
            <EducationCard
              key={field.id}
              index={index}
              onRemove={() => remove(index)}
            />
          ))
        )}
      </div>

      <AddItemButton onClick={handleAddEducation}>
        Add Education
      </AddItemButton>
    </SectionCard>
  );
}