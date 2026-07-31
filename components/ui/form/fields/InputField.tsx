"use client";

import {
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Input } from "@/components/ui/input";

import FormField from "../FormField";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  rules?: RegisterOptions<T>;
}

export default function InputField<
  T extends FieldValues,
>({
  name,
  label,
  placeholder,
  type = "text",
  rules,
}: InputFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = name
    .split(".")
    .reduce<any>((obj, key) => obj?.[key], errors);

  return (
    <FormField
      label={label}
      htmlFor={name}
      error={error?.message ? String(error.message) : undefined}
    >
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
      />
    </FormField>
  );
}