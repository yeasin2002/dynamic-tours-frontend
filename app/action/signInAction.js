"use server";
import { signIn } from "@/auth";

export const signInAction = async function (formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    throw new Error("Invalid Username or Password");
  }
};
