import type { ResumeFormValues } from "@/lib/validations/resume.schema";

export async function saveResume(
  values: ResumeFormValues,
  mode: "create" | "edit",
  resumeId?: string
) {
  const response = await fetch(
    mode === "create"
      ? "/api/resumes"
      : `/api/resumes/${resumeId}`,
    {
      method: mode === "create" ? "POST" : "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.error ?? "Failed to save resume.");
  }

  return response.json();
}