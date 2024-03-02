"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
// import bcrypt from "bcrypt";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;
  console.log("hashing password");
  const hashedPassword = await bcrypt.hash(password, 11);
  console.log("searching db");
  const existingUser = await getUserByEmail(email);

  // await db.user.findUnique({where: {
  //     email,
  // }})

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  // SEND VERIFICATION TOKEN EMAIL

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "User created, Confirmation email sent" };
};
