"use client";
import { usePathname } from "next/navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import authImage from "@/public/image/auth_form.png";
import Image from "next/image";

export function AuthForm() {
  const pathName = usePathname();
  console.log(authImage.src);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center loginGradient">
        <div className="flex h-full md:rounded-xl md:h-fit rounded-none  md:w-[90%] lg:w-[85%] xl:w-[70%] 2xl:w-[60%] shadow-xl  bg-white">
          <div
            className="w-1/2 min-h-[450px] hidden md:block bg-cover bg-center bg-no-repeat rounded-tl-xl rounded-bl-xl"
            style={{ backgroundImage: `url('${authImage.src}')` }}
          ></div>

          <div className=" w-full md:w-1/2 flex items-center ">
            {pathName === "/signup" && <SignUp />}
            {pathName === "/login" && <Login />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
