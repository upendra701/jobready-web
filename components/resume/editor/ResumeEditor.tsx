"use client";

import { FormProvider } from "react-hook-form";
import { useRef, useState } from "react";

import type { Resume } from "@prisma/client";

import EditorHeader from "./EditorHeader";
import EditorLayout from "./EditorLayout";
import EditorSidebar from "./EditorSidebar";
import SaveBar from "./SaveBar";

// TEMP: Disable preview while debugging
// import ResumePreview from "../preview/ResumePreview";

import PersonalInfoSection from "../sections/PersonalInfoSection";
import SummarySection from "../sections/SummarySection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import SkillsSection from "../sections/SkillsSection";

import { useResumeForm } from "../hooks/useResumeForm";
import { useResumeSubmit } from "../hooks/useResumeSubmit";

interface ResumeEditorProps {
  mode?: "create" | "edit";
  resume?: Resume;
}

export default function ResumeEditor({
  mode = "create",
  resume,
}: ResumeEditorProps) {
  const { form } = useResumeForm({
    resume,
  });

  const { loading, submit } = useResumeSubmit({
    mode,
    resume,
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sectionRefs = {
    personal: useRef<HTMLDivElement>(null),
    summary: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  const handleScroll = (
    section: keyof typeof sectionRefs
  ) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = form.handleSubmit(async (values) => {
    await submit(values);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <EditorLayout
          sidebarOpen={sidebarOpen}
          header={
            <EditorHeader
              title={
                mode === "create"
                  ? "Create Resume"
                  : "Edit Resume"
              }
              mode={mode}
              sidebarOpen={sidebarOpen}
              onToggleSidebar={() =>
                setSidebarOpen((prev) => !prev)
              }
            />
          }
          sidebar={
            <EditorSidebar
              onSectionChange={handleScroll}
            />
          }
          preview={<></>}
          footer={
            <SaveBar
              loading={loading}
              mode={mode}
            />
          }
        >
          <div
            ref={sectionRefs.personal}
            id="personal"
          >
            <PersonalInfoSection />
          </div>

          <div
            ref={sectionRefs.summary}
            id="summary"
          >
            <SummarySection />
          </div>

          <div
            ref={sectionRefs.experience}
            id="experience"
          >
            <ExperienceSection />
          </div>

          <div
            ref={sectionRefs.education}
            id="education"
          >
            <EducationSection />
          </div>

          <div
            ref={sectionRefs.skills}
            id="skills"
          >
            <SkillsSection />
          </div>
        </EditorLayout>
      </form>
    </FormProvider>
  );
}