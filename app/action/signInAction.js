"use server";
import { isRedirectError } from "@/node_modules/next/dist/client/components/redirect";
import { signIn, signOut } from "@/auth";

export const signInAction = async function (formData) {
  try {
    await signIn("credentials", formData, { redirectTo: "/" });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(error?.cause?.err);
  }
};

export const signOutAction = async function () {
  try {
    await signOut();
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
  }
};
