"use server";
import { isRedirectError } from "@/node_modules/next/dist/client/components/redirect";
import { signIn, signOut, auth } from "@/auth";
import { redirect } from "next/navigation";

export const signInAction = async function (formData) {
  let status;
  try {
    await signIn("credentials", formData);
    status = true;
  } catch (error) {
    if (isRedirectError(error)) {
      redirect("/");
    }
    status = false;
    throw new Error(error?.cause?.err);
  }
  return status;
};

export const signOutAction = async function () {
  let status;
  try {
    await signOut();
    status = true;
  } catch (error) {
    if (isRedirectError(error)) {
      // redirect("/login");
      status = false;
      throw error;
    }
    status = false;
  }
  return status;
};

export const signInWithGoogleAction = async function () {
  try {
    await signIn("google");
  } catch (error) {
    if (isRedirectError(error)) {
      // redirect("/login");
      throw error;
    }
  }
};
