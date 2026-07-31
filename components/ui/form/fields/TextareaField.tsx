"use client";

import {
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

import FormField from "../FormField";
import { getFormError } from "@/utils/getFormError";

interface TextareaFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  rows?: number;
  rules?: RegisterOptions<T>;
}

export default function TextareaField<
  T extends FieldValues,
>({
  name,
  label,
  placeholder,
  rows = 5,
  rules,
}: TextareaFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = getFormError(errors, name);

  return (
    <FormField
      label={label}
      htmlFor={name}
      error={error?.message ? String(error.message) : undefined}
    >
      <Textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name, rules)}
      />
    </FormField>
  );
}