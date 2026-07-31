"use client";

import { Trash2 } from "lucide-react";
import {
  useFormContext,
  useWatch,
} from "react-hook-form";

import { Button } from "@/components/ui/button";
import type { ResumeFormValues } from "@/lib/validations/resume.schema";

interface SkillCardProps {
  index: number;
  onRemove: () => void;
}

export default function SkillCard({
  index,
  onRemove,
}: SkillCardProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ResumeFormValues>();

  const skill = useWatch({
    control,
    name: `skills.${index}.name`,
  });

  const error =
    errors.skills?.[index]?.name?.message;

  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <label
            htmlFor={`skills.${index}.name`}
            className="mb-2 block text-sm font-medium"
          >
            Skill {index + 1}
          </label>

          <input
            id={`skills.${index}.name`}
            type="text"
            placeholder="React"
            className="w-full rounded-md border border-input px-3 py-2 text-sm outline-none focus:border-blue-500"
            {...register(`skills.${index}.name`)}
          />

          {error && (
            <p className="mt-1 text-sm text-red-500">
              {String(error)}
            </p>
          )}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label={`Remove ${skill || "skill"}`}
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
}