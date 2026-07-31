"use client";

interface EditorHeaderProps {
  title: string;
  mode: "create" | "edit";
}

export default function EditorHeader({
  title,
  mode,
}: EditorHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          {mode === "create"
            ? "Create your professional resume."
            : "Edit your professional resume."}
        </p>
      </div>

      <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
        Auto Save Coming Soon
      </div>
    </div>
  );
}