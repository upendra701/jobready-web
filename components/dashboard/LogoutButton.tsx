"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  sidebarOpen: boolean;
}

export default function LogoutButton({
  sidebarOpen,
}: LogoutButtonProps) {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  if (!sidebarOpen) {
    return (
      <button
        onClick={handleLogout}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:bg-red-700"
      >
        <LogOut size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}