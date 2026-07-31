import type { ResumeFormValues } from "@/lib/validations/resume.schema";

export function mapResumeToPreview(
  values: Partial<ResumeFormValues> | undefined
) {
  return {
    fullName: values?.fullName ?? "",
    jobTitle: values?.jobTitle ?? "",

    email: values?.email ?? "",
    phone: values?.phone ?? "",
    location: values?.location ?? "",

    website: values?.website ?? "",
    linkedin: values?.linkedin ?? "",
    github: values?.github ?? "",

    summary: values?.summary ?? "",

    experiences:
      values?.experiences?.map((exp) => ({
        company: exp.company ?? "",
        position: exp.position ?? "",
        location: exp.location ?? "",
        startDate: exp.startDate ?? "",
        endDate: exp.endDate ?? "",
        current: exp.current ?? false,
        description: exp.description ?? "",
      })) ?? [],

    educations:
      values?.educations?.map((edu) => ({
        institution: edu.institution ?? "",
        degree: edu.degree ?? "",
        fieldOfStudy: edu.fieldOfStudy ?? "",
        location: edu.location ?? "",
        startDate: edu.startDate ?? "",
        endDate: edu.endDate ?? "",
        current: edu.current ?? false,
        grade: edu.grade ?? "",
        description: edu.description ?? "",
      })) ?? [],
  };
}

export type ResumePreviewData = ReturnType<
  typeof mapResumeToPreview
>;