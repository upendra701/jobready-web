import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import type { LoginInput } from "../schemas/login.schema";

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    name: string | null;
    email: string;
    role: string;
  };
}

export async function loginUser(
  data: LoginInput
): Promise<LoginResponse> {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const passwordMatch = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!passwordMatch) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  return {
    success: true,
    message: "Login successful.",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}