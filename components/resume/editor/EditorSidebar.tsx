"use client";

import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  CheckCircle2,
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
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Resume Builder
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete each section to build your resume.
        </p>
      </div>

      <nav className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSectionChange(section.id)}
              className="group flex w-full items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:border-blue-100 hover:bg-blue-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={18} />
              </div>

              <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-8 rounded-xl bg-slate-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <CheckCircle2
            size={18}
            className="text-emerald-600"
          />

          <span className="text-sm font-semibold text-slate-800">
            Resume Progress
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/5 rounded-full bg-blue-600" />
        </div>

        <p className="mt-2 text-xs text-slate-500">
          Progress tracking will update automatically.
        </p>
      </div>
    </aside>
  );
}