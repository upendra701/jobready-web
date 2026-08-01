import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import DashboardShell from "@/components/dashboard/DashboardShell";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardShell session={session}>
      {children}
    </DashboardShell>
  );
}