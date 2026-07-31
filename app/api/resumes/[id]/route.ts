import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  req: Request,
  { params }: RouteContext
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const body: ResumeFormValues = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const resume = await prisma.resume.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!resume) {
      return NextResponse.json(
        { error: "Resume not found" },
        { status: 404 }
      );
    }

    const updatedResume = await prisma.resume.update({
      where: {
        id,
      },
      data: {
        title: body.title.trim(),
        jobTitle: body.jobTitle?.trim() || "",
        fullName: body.fullName.trim(),
        email: body.email?.trim() || "",
        phone: body.phone?.trim() || "",
        location: body.location?.trim() || "",
        website: body.website?.trim() || "",
        linkedin: body.linkedin?.trim() || "",
        github: body.github?.trim() || "",
        summary: body.summary?.trim() || "",
      },
    });

    return NextResponse.json(updatedResume);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update resume" },
      { status: 500 }
    );
  }
}