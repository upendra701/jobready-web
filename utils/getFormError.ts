import { FieldErrors } from "react-hook-form";

export function getFormError(
  errors: FieldErrors,
  path: string,
) {
  return path
    .split(".")
    .reduce(
      (obj: any, key) => obj?.[key],
      errors,
    );
}