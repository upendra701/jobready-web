"use client";

import type { ReactNode } from "react";

interface EditorLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  preview: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function EditorLayout({
  header,
  sidebar,
  preview,
  footer,
  children,
}: EditorLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
        {header}
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-[1800px] px-6 py-8">
        <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)_430px]">
          {/* Sidebar */}
          <aside className="sticky top-24 h-fit">
            {sidebar}
          </aside>

          {/* Resume Form */}
          <main className="min-w-0">
            <div className="space-y-6">
              {children}
            </div>
          </main>

          {/* Live Preview */}
          <aside className="sticky top-24 hidden xl:block">
            {preview}
          </aside>
        </div>

        {/* Save Button */}
        <div className="mt-10">
          {footer}
        </div>
      </div>
    </div>
  );
}