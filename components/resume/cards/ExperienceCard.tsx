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

interface ExperienceCardProps {
  index: number;
  onRemove: () => void;
}

export default function ExperienceCard({
  index,
  onRemove,
}: ExperienceCardProps) {
  const { control, setValue } =
    useFormContext<ResumeFormValues>();

  const [isCurrent, company] = useWatch({
    control,
    name: [
      `experiences.${index}.current`,
      `experiences.${index}.company`,
    ],
  });

  useEffect(() => {
    if (isCurrent) {
      setValue(
        `experiences.${index}.endDate`,
        ""
      );
    }
  }, [isCurrent, index, setValue]);

  return (
    <div className="space-y-6 rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {company || `Experience ${index + 1}`}
        </h3>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label="Remove experience"
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField
          name={`experiences.${index}.company`}
          label="Company"
          placeholder="Google"
        />

        <InputField
          name={`experiences.${index}.position`}
          label="Job Title"
          placeholder="Software Engineer"
        />

        <InputField
          name={`experiences.${index}.location`}
          label="Location"
          placeholder="Hyderabad"
        />

        <DateField
          name={`experiences.${index}.startDate`}
          label="Start Date"
        />

        {!isCurrent && (
          <DateField
            name={`experiences.${index}.endDate`}
            label="End Date"
          />
        )}
      </div>

      <CheckboxField
        control={control}
        name={`experiences.${index}.current`}
        label="I currently work here"
      />

      <TextareaField
        name={`experiences.${index}.description`}
        label="Description"
        rows={5}
        placeholder="Describe your responsibilities, achievements and impact..."
      />
    </div>
  );
}