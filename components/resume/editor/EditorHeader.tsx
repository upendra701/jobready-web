"use client";

import { FileText, Menu } from "lucide-react";

interface EditorHeaderProps {
  title: string;
  mode: "create" | "edit";
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function EditorHeader({
  title,
  mode,
  sidebarOpen,
  onToggleSidebar,
}: EditorHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-white px-8 py-6">
      <div className="flex items-center gap-4">

        <button
          type="button"
          onClick={onToggleSidebar}
          className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
        >
          <Menu className="h-5 w-5 text-slate-700" />
        </button>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <FileText className="h-7 w-7" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-1 text-sm text-slate-600">
            {mode === "create"
              ? "Build a professional ATS-friendly resume."
              : "Update your professional ATS-friendly resume."}
          </p>
        </div>
      </div>

      <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
        Auto Save Coming Soon
      </span>
    </div>
  );
}