import { AuthTab } from "@/features/auth/lib/types";
import { z } from "zod";

const AUTH_FORM_SCHEMA = (activeTab: AuthTab) =>
  z.object({
    name:
      activeTab === AuthTab.SignUp
        ? z.string().min(1, { message: "Name is required" })
        : z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

export { AUTH_FORM_SCHEMA };
