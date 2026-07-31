"use client";

import {
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Input } from "@/components/ui/input";

import FormField from "../FormField";
import { getFormError } from "@/utils/getFormError";

interface DateFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  rules?: RegisterOptions<T>;
}

export default function DateField<
  T extends FieldValues,
>({
  name,
  label,
  rules,
}: DateFieldProps<T>) {
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
      <Input
        id={name}
        type="date"
        {...register(name, rules)}
      />
    </FormField>
  );
}