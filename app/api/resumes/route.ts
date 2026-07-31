import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import type { ResumeFormValues } from "@/lib/validations/resume.schema";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

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

    const resume = await prisma.resume.create({
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
        userId: user.id,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create resume" },
      { status: 500 }
    );
  }
}