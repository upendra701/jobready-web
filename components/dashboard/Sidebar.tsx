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
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 lg:flex lg:flex-col">
      <div className="border-b border-slate-800 px-6 py-6">
        <h1 className="text-3xl font-bold text-blue-500">
          JobReady
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Career Platform
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">
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
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-4 border-t border-slate-800 p-6">
        <div className="rounded-2xl bg-slate-800 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
              {session.user?.name?.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold">
                {session.user?.name}
              </h3>

              <p className="text-sm text-slate-400">
                {session.user?.email}
              </p>
            </div>
          </div>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}