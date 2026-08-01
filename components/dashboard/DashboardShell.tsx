"use client";

import { ReactNode, useEffect, useState } from "react";
import { Session } from "next-auth";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardShellProps {
  session: Session;
  children: ReactNode;
}

export default function DashboardShell({
  session,
  children,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("dashboard-sidebar");

    if (stored !== null) {
      setSidebarOpen(stored === "true");
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev;
      localStorage.setItem(
        "dashboard-sidebar",
        String(next)
      );
      return next;
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar
        session={session}
        sidebarOpen={sidebarOpen}
      />

      <main className="flex flex-1 flex-col overflow-hidden transition-all duration-300">
        <Topbar
          session={session}
          onToggleSidebar={toggleSidebar}
        />

        <section className="flex-1 overflow-y-auto p-8">
          {children}
        </section>
      </main>
    </div>
  );
}