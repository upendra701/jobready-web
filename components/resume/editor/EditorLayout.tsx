"use client";

import type { ReactNode } from "react";

interface EditorLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  preview: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  sidebarOpen: boolean;
}

export default function EditorLayout({
  header,
  sidebar,
  preview,
  footer,
  children,
  sidebarOpen,
}: EditorLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        {header}
      </header>

      {/* Workspace */}
      <div className="mx-auto max-w-[1800px] px-8 py-8">
        <div className="flex items-start gap-8">

          {/* Sidebar */}
          <aside
            className={`sticky top-24 overflow-hidden transition-all duration-300 ${
              sidebarOpen
                ? "w-[260px] opacity-100"
                : "w-0 opacity-0"
            }`}
          >
            {sidebar}
          </aside>

          {/* Resume Form */}
          <main
            className={`min-w-0 transition-all duration-300 ${
              sidebarOpen
                ? "flex-1 max-w-[900px]"
                : "flex-1 max-w-[1200px]"
            }`}
          >
            <div className="space-y-8">
              {children}
            </div>
          </main>

          {/* Preview */}
          <aside className="sticky top-24 w-[420px]">
            {preview}
          </aside>

        </div>

        {/* Footer */}
        <div className="mt-10">
          {footer}
        </div>
      </div>
    </div>
  );
}