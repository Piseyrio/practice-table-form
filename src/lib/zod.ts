import { z } from "zod";

export const userSchema = z.object({
  firstname: z.string().min(4, "Firstname must be at least 4 characters"),
  lastname: z.string().min(4, "Lastname must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required" }),
  phone: z.string().min(4, "Phone must be at least 4 digits"),
  address: z.string().min(4, "Address must be at least 4 characters"),
  birthday: z.coerce.date({ message: "Birthday is required" }),
});

export type UserSchema = z.infer<typeof userSchema>;
