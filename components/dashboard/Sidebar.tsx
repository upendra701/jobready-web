"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

import {
  Home,
  FileText,
  BarChart3,
  Briefcase,
  Bot,
  Settings,
} from "lucide-react";

import LogoutButton from "./LogoutButton";

interface SidebarProps {
  session: Session;
  sidebarOpen: boolean;
}

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Resume Builder",
    href: "/dashboard/resumes",
    icon: FileText,
  },
  {
    label: "ATS Checker",
    href: "/dashboard/ats",
    icon: BarChart3,
  },
  {
    label: "Job Tracker",
    href: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    label: "AI Assistant",
    href: "/dashboard/ai",
    icon: Bot,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  session,
  sidebarOpen,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`hidden lg:flex lg:flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 ${
        sidebarOpen ? "w-72" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="border-b border-slate-800 px-5 py-6">
        <h1
          className={`font-bold text-blue-500 transition-all duration-300 ${
            sidebarOpen ? "text-3xl" : "text-xl text-center"
          }`}
        >
          {sidebarOpen ? "JobReady" : "JR"}
        </h1>

        {sidebarOpen && (
          <p className="mt-2 text-sm text-slate-400">
            AI Career Platform
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={!sidebarOpen ? item.label : undefined}
                  className={`flex items-center rounded-xl transition-all duration-300 ${
                    sidebarOpen
                      ? "gap-3 px-4 py-3"
                      : "justify-center py-3"
                  } ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={20} />

                  {sidebarOpen && (
                    <span className="font-medium">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        {sidebarOpen ? (
          <>
            <div className="mb-4 rounded-2xl bg-slate-800 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                  {session.user?.name?.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold">
                    {session.user?.name}
                  </h3>

                  <p className="truncate text-sm text-slate-400">
                    {session.user?.email}
                  </p>
                </div>
              </div>
            </div>

            <LogoutButton sidebarOpen={sidebarOpen} />
          </>
        ) : (
          <div
            className="flex justify-center"
            title={`${session.user?.name}\n${session.user?.email}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
              {session.user?.name?.charAt(0)}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}