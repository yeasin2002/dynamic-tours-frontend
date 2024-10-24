"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  Input,
  Button,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { signInAction, signInWithGoogleAction } from "@/app/action/AuthAction";
import Link from "next/link";

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
    console.log(data);
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
    <div className="flex items-center justify-center h-screen">
      <Card className="md:max-w-[450px] shadow-none md:shadow-md py-8 md:px-6 md:border md:border-gray-300">
        <CardBody>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col gap-4 "
          >
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
                placeholder="name@mail.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-offGray !border-offGray"
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
                  className="block font-medium mb-2 mt-3"
                >
                  Password
                </Typography>
              </label>
              <Input
                id="password"
                color="gray"
                size="lg"
                {...register("password", {
                  required: "Insert your password",
                  minLength: { value: 8, message: "Password minlength is 8" },
                })}
                type="password"
                name="password"
                placeholder="name@mail.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-offGray !border-offGray"
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.password && (
                <p role="alert" className=" text-red-400 mt-2 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <Button loading={status.loading} type="submit">
              Login
            </Button>
            <Button onClick={googleSignInHandler} color="blue">
              Continue with google
            </Button>
            <Link href={"/signup"}>
              <Button color="blue">Sign Up</Button>
            </Link>

            <Typography
              variant="small"
              className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
            >
              Upon signing in, you consent to abide by our{" "}
              <a href="#" className="text-gray-900">
                Terms of Service
              </a>{" "}
              &{" "}
              <a href="#" className="text-gray-900">
                Privacy Policy.
              </a>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
