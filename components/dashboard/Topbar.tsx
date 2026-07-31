"use client";

import { Bell } from "lucide-react";
import { Session } from "next-auth";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

interface TopbarProps {
  session: Session;
}

export default function Topbar({
  session,
}: TopbarProps) {
  const initials =
    session.user?.name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() ?? "U";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900/80 px-8 backdrop-blur">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back, {session.user?.name}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-slate-800">
          <Bell className="h-5 w-5" />
        </button>

        <Avatar className="h-12 w-12 border-2 border-blue-500">
          <AvatarFallback className="bg-blue-600 text-white font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}