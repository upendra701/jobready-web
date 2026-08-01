"use client";

import { Trash2 } from "lucide-react";
import {
  useFormContext,
  useWatch,
} from "react-hook-form";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

interface SkillCardProps {
  index: number;
  onRemove: () => void;
}

export default function SkillCard({
  index,
  onRemove,
}: SkillCardProps) {
  const { control } =
    useFormContext<ResumeFormValues>();

  const skill = useWatch({
    control,
    name: `skills.${index}.name`,
  });

  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <InputField
            name={`skills.${index}.name`}
            label={`Skill ${index + 1}`}
            placeholder="React"
          />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label={`Remove ${skill || "skill"}`}
          className="mt-7"
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
}