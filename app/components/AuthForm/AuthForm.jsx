"use client";
import { usePathname } from "next/navigation";
import Login from "./Login";
import SignUp from "./SignUp";

export function AuthForm() {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/signup" && <SignUp />}
      {pathName === "/login" && <Login />}
    </>
  );
}

export default AuthForm;
