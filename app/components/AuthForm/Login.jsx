"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { signInAction, signInWithGoogleAction } from "@/app/action/AuthAction";
import BrandLogo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "@/public/google_icon.svg";

export function Login() {
  const [status, setStatus] = useState({ loading: false, error: null });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerHandler = async function (data) {
    const formdata = new FormData();
    formdata.set("email", data?.email);
    formdata.set("password", data?.password);
    try {
      setStatus((prev) => {
        return { ...prev, loading: true };
      });
      await signInAction(formdata);
    } catch (err) {
      setStatus((prev) => {
        return { ...prev, error: err.message, loading: false };
      });
    }
  };

  const googleSignInHandler = async function () {
    const isSignedIn = await signInWithGoogleAction();
  };

  return (
    <div className="p-8 py-4 w-full">
      <div className="my-4">
        <Image src={BrandLogo} height={50} width={125} alt="brand_logo" />
      </div>
      <div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex flex-col gap-2 "
        >
          <div className="py-3 ">
            <Typography variant="h3" className="mb-2 ">
              Log In
            </Typography>
            <Typography variant="paragraph" className="tracking-wide">
              Discover a better way of traveling with us
            </Typography>
          </div>
          <Button
            onClick={googleSignInHandler}
            className="bg-offWhite rounded-none flex items-center justify-center font-medium shadow-none normal-case text-[15px] text-textBlack tracking-wide"
          >
            <Image
              src={googleLogo}
              width={40}
              height={40}
              alt="google_icon"
              className="mr-3 w-6 h-6"
            />
            Login with Google
          </Button>

          <div className=" border-b border-[#2a2a2a6b] relative my-4 flex items-center justify-center">
            <p className=" bg-white rounded-full  inline-block px-2 absolute ">
              Or
            </p>
          </div>

          {status.error && (
            <Typography variant="paragraph" className="text-red-400">
              {status.error?.split(":")[1]}
            </Typography>
          )}
          <div>
            <label htmlFor="email">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                Email or username
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="text"
              name="email"
              {...register("email", {
                required: "Insert your email or Username",
              })}
              placeholder="Enter your e-mail"
              className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack rounded-none focus:!border-t-offGray !border-offGray"
              labelProps={{
                className: "hidden",
              }}
            />
            {errors?.email && (
              <p role="alert" className=" text-red-400 mt-2 text-sm">
                {errors?.email?.message}
              </p>
            )}

            <label htmlFor="password">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium my-2 "
              >
                Password
              </Typography>
            </label>
            <Input
              id="password"
              size="lg"
              {...register("password", {
                required: "Insert your password",
                minLength: { value: 8, message: "Password minlength is 8" },
              })}
              type="password"
              name="password"
              placeholder="Password"
              className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack rounded-none focus:!border-t-offGray !border-offGray"
              labelProps={{
                className: "hidden",
              }}
            />
            {errors?.password && (
              <p role="alert" className=" text-red-400 mt-2 text-sm">
                {errors.password?.message}
              </p>
            )}
            <div className=" my-2 flex items-center justify-between">
              <Typography
                color="blue-gray"
                variant="small"
                className="flex select-none items-center px-0 gap-2"
              >
                <input type="checkbox" defaultChecked />
                Remember me
              </Typography>
              <Button
                variant="text"
                className="rounded-none hover:bg-white p-1 my-0 normal-case tracking-wide"
              >
                <Typography variant="small" color="blue-gray">
                  Forgot Password
                </Typography>
              </Button>
            </div>
          </div>

          <Button
            className="bg-actionBlue rounded-none font-medium shadow-none normal-case text-white text-[15px] tracking-wide"
            loading={status.loading}
            type="submit"
          >
            Login
          </Button>

          <div className=" my-2">
            <Typography color="blue-gray" variant="small">
              Not a member ?{" "}
              <Link
                className="underline font-medium tracking-wide text-textBlack"
                href="/signup"
              >
                Create an account
              </Link>
            </Typography>
          </div>

          <Typography
            variant="small"
            className=" tracking-wide text-shadeBlack text-center mt-2"
          >
            &copy; All right reserved by Dynamic Travel
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Login;
