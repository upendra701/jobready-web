import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

export default async function ResumesPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      resumes: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Resume Builder
          </h1>

          <p className="mt-2 text-slate-400">
            Create and manage professional ATS-friendly resumes.
          </p>
        </div>

        <Link href="/dashboard/resumes/new">
          <Button>Create Resume</Button>
        </Link>
      </div>

      {user?.resumes.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {user.resumes.map((resume) => (
            <Link
              key={resume.id}
              href={`/dashboard/resumes/${resume.id}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <h2 className="text-xl font-semibold">
                {resume.title}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {resume.jobTitle || "No job title"}
              </p>

              <p className="mt-6 text-xs text-slate-500">
                Updated{" "}
                {resume.updatedAt.toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-700 p-16 text-center">
          <h2 className="text-2xl font-semibold">
            No resumes yet
          </h2>

          <p className="mt-4 text-slate-400">
            Create your first professional resume.
          </p>

          <div className="mt-8">
            <Link href="/dashboard/resumes/new">
              <Button>Create Resume</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}