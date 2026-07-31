import { ReactNode } from "react";

import { Label } from "@/components/ui/label";

import FormError from "./FormError";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>
        {label}
      </Label>

      {children}

      <FormError message={error} />
    </div>
  );
}