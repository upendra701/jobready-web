"use client";

import { Button } from "@/components/ui/button";

interface SaveBarProps {
  loading: boolean;
  mode: "create" | "edit";
}

export default function SaveBar({
  loading,
  mode,
}: SaveBarProps) {
  return (
    <div className="sticky bottom-0 mt-8 border-t border-slate-800 bg-slate-900/95 p-6 backdrop-blur">
      <div className="flex items-center justify-end">
        <Button
          type="submit"
          disabled={loading}
          size="lg"
        >
          {loading
            ? "Saving..."
            : mode === "create"
            ? "Create Resume"
            : "Update Resume"}
        </Button>
      </div>
    </div>
  );
}