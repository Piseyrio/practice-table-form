import { z } from "zod";

export const userSchema = z.object({
  firstname: z.string().min(4, "message"),
  lastname: z.string().min(4, "message"),
  email: z.string().min(4, "message").email("Failed"),
  password: z.string().min(4, "message"),
  gender: z.string().min(4, "message"),
  phone: z.string().min(4, "phone must 4"),
  address: z.string().min(4, "message"),
});

export type UserSchema = z.infer<typeof userSchema>;

