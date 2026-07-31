"use client";

import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
} from "lucide-react";

export type ResumeSection =
  | "personal"
  | "summary"
  | "experience"
  | "education"
  | "skills";

interface SidebarItem {
  id: ResumeSection;
  label: string;
  icon: React.ElementType;
}

const sections: SidebarItem[] = [
  {
    id: "personal",
    label: "Personal Information",
    icon: User,
  },
  {
    id: "summary",
    label: "Professional Summary",
    icon: FileText,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Wrench,
  },
];

interface EditorSidebarProps {
  onSectionChange: (section: ResumeSection) => void;
}

export default function EditorSidebar({
  onSectionChange,
}: EditorSidebarProps) {
  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Resume Builder
      </h2>

      <nav className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSectionChange(section.id)}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 transition-all duration-200 hover:bg-indigo-600 hover:text-white"
            >
              <Icon size={18} />

              <span className="text-sm font-medium">
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}