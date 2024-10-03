"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { loginHandler } from "@/app/libs/authenticate";

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerHandler = function (data) {
    loginHandler(data?.email, data?.password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="md:max-w-[450px] shadow-none md:shadow-md py-8 md:px-6 md:border md:border-gray-300">
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Login now
          </Typography>
          <Typography className="!text-gray-600 text-md font-light md:max-w-sm px-5">
            Enjoy quick travel exeperience with us <br /> Register now.
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col gap-4 md:mt-12"
          >
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                {...register("email", { required: "Email is required" })}
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
                  required: "Password is required",
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
            <Button type="submit" size="lg" color="gray" fullWidth>
              Login
            </Button>
            <h1>{value}</h1>
            <Button onClick={increaseCount} size="lg" color="gray" fullWidth>
              Increase
            </Button>
            <Button onClick={decreaseCount} size="lg" color="gray" fullWidth>
              Decrease
            </Button>

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
