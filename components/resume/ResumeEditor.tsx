"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resumeSchema,
  type ResumeFormValues,
} from "@/lib/validations/resume.schema";

import ResumePreview from "./preview/ResumePreview";

import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import SkillsSection from "./sections/SkillsSection";
import SummarySection from "./sections/SummarySection";

export default function ResumeEditor() {
  const methods = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),

    defaultValues: {
      // Resume Details
      title: "",
      jobTitle: "",

      // Personal Information
      fullName: "",
      email: "",
      phone: "",
      location: "",

      // Links
      website: "",
      linkedin: "",
      github: "",

      // Professional Summary
      summary: "",

      // Resume Sections
      experiences: [],
      educations: [],
      skills: [],
    },

    mode: "onChange",
  });

  const onSubmit = (data: ResumeFormValues) => {
    console.log("Resume Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-cols-[1fr_450px]"
      >
        {/* Resume Form */}
        <div className="space-y-8">
          <PersonalInfoSection />

          <SummarySection />

          <ExperienceSection />

          <EducationSection />

          <SkillsSection />
        </div>

        {/* Live Resume Preview */}
        <ResumePreview />
      </form>
    </FormProvider>
  );
}