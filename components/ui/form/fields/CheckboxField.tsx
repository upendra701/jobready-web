"use client";

import {
  Control,
  Controller,
  FieldValues,
  Path,
} from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxFieldProps<
  T extends FieldValues,
> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

export default function CheckboxField<
  T extends FieldValues,
>({
  control,
  name,
  label,
}: CheckboxFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex items-center gap-3">
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
          />

          <Label>
            {label}
          </Label>
        </div>
      )}
    />
  );
}