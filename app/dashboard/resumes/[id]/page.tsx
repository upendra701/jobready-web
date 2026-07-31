import { notFound, redirect } from "next/navigation";

import ResumeEditor from "@/components/resume/editor/ResumeEditor";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditResumePage({
  params,
}: PageProps) {
  const { id } = await params;

  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const resume = await prisma.resume.findFirst({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!resume) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <ResumeEditor
        mode="edit"
        resume={resume}
      />
    </div>
  );
}