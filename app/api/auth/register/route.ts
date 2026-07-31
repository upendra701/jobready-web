import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/features/auth/schemas/register.schema";
import { registerUser } from "@/features/auth/services/register.service";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body must be JSON.",
        },
        {
          status: 400,
        }
      );
    }

    const body = await request.json();

    const validatedData = registerSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validatedData.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const result = await registerUser(validatedData.data);

    return NextResponse.json(result, {
      status: result.success ? 201 : 409,
    });
  } catch (error) {
    console.error("Register Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      {
        status: 400,
      }
    );
  }
}