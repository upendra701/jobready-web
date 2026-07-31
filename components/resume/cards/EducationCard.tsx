"use client";

import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  CheckboxField,
  DateField,
  InputField,
  TextareaField,
} from "@/components/ui/form";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

interface EducationCardProps {
  index: number;
  onRemove: () => void;
}

export default function EducationCard({
  index,
  onRemove,
}: EducationCardProps) {
  const { control, setValue } =
    useFormContext<ResumeFormValues>();

  const [isCurrent, institution] = useWatch({
    control,
    name: [
      `educations.${index}.current`,
      `educations.${index}.institution`,
    ],
  });

  useEffect(() => {
    if (isCurrent) {
      setValue(
        `educations.${index}.endDate`,
        ""
      );
    }
  }, [isCurrent, index, setValue]);

  return (
    <div className="space-y-6 rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {institution || `Education ${index + 1}`}
        </h3>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label="Remove education"
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField
          name={`educations.${index}.institution`}
          label="Institution"
          placeholder="Harvard University"
        />

        <InputField
          name={`educations.${index}.degree`}
          label="Degree"
          placeholder="Bachelor of Technology"
        />

        <InputField
          name={`educations.${index}.fieldOfStudy`}
          label="Field of Study"
          placeholder="Computer Science"
        />

        <InputField
          name={`educations.${index}.location`}
          label="Location"
          placeholder="Hyderabad"
        />

        <InputField
          name={`educations.${index}.grade`}
          label="CGPA / Percentage"
          placeholder="8.5 CGPA or 82%"
        />

        <DateField
          name={`educations.${index}.startDate`}
          label="Start Date"
        />

        {!isCurrent && (
          <DateField
            name={`educations.${index}.endDate`}
            label="End Date"
          />
        )}
      </div>

      <CheckboxField
        control={control}
        name={`educations.${index}.current`}
        label="I am currently studying here"
      />

      <TextareaField
        name={`educations.${index}.description`}
        label="Description"
        rows={4}
        placeholder="Mention achievements, coursework, honors, activities..."
      />
    </div>
  );
}