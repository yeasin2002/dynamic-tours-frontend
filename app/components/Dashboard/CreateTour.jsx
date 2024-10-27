"use client";
import { Input, Typography, Button, Textarea } from "@material-tailwind/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function CreateTour() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputRef = useRef(null);

  const createTourHandler = function (inputData) {
    console.log(inputData);
  };

  const handleFile = (event) => {
    console.log(event.target.files);
  };

  return (
    <>
      <div className=" ">
        <form onSubmit={handleSubmit(createTourHandler)}>
          <div className=" bg-pink-100 py-2">
            <Input
              onChange={handleFile}
              ref={inputRef}
              type="file"
              accept="image/*"
            />
          </div>

          {/* main */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 md:py-0  lg:gap-y-6 gap-x-8 ">
            <div className=" w-full">
              <label htmlFor="title">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Tour Title
                </Typography>
              </label>
              <Input
                id="title"
                color="gray"
                size="lg"
                type="text"
                name="title"
                {...register("title", {
                  required: "Insert tour title",
                })}
                placeholder="Enter tour title"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.title && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.title?.message}
                </Typography>
              )}
            </div>

            <div className=" w-full">
              <label htmlFor="duration">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Tour Duration
                </Typography>
              </label>
              <Input
                id="duration"
                color="gray"
                size="lg"
                type="number"
                name="duration"
                {...register("duration", {
                  required: "Insert tour duration",
                  min: { value: 1, message: "Duration must be at least 1 day" },
                  max: {
                    value: 60,
                    message: "Duration must be no more than 60 days",
                  },
                })}
                placeholder="Enter tour duration"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.duration && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.duration?.message}
                </Typography>
              )}
            </div>

            <div className=" w-full">
              <label htmlFor="description">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Tour Description
                </Typography>
              </label>
              <Textarea
                id="description"
                color="gray"
                size="lg"
                type="text"
                name="description"
                {...register("description", {
                  required: "Insert your description",
                  minLength: {
                    value: 100,
                    message: "Description should be at least 100 characters",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Description cannot exceed 1000 characters",
                  },
                })}
                placeholder="Enter tour description"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.description && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.description?.message}
                </Typography>
              )}
            </div>
            <div className=" w-full">
              <label htmlFor="summery">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Tour Summery
                </Typography>
              </label>
              <Textarea
                id="summery"
                color="gray"
                size="lg"
                type="text"
                name="summery"
                {...register("summery", {
                  required: "Insert your summery",
                  minLength: {
                    value: 30,
                    message: "Summary should be at least 30 characters",
                  },
                  maxLength: {
                    value: 200,
                    message: "Summary cannot exceed 200 characters",
                  },
                })}
                placeholder="Enter tour summery"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.summery && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.summery?.message}
                </Typography>
              )}
            </div>

            <div className=" w-full">
              <label htmlFor="price">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Tour price
                </Typography>
              </label>
              <Input
                id="price"
                color="gray"
                size="lg"
                type="number"
                name="price"
                {...register("price", {
                  required: "Insert tour price",
                  min: { value: 1, message: "Price must be at least 1" },
                })}
                placeholder="Enter tour price"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.price && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.price?.message}
                </Typography>
              )}
            </div>

            <div className=" w-full">
              <label htmlFor="discountPrice">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Discount Price (Optional)
                </Typography>
              </label>
              <Input
                id="discountPrice"
                color="gray"
                size="lg"
                type="number"
                name="discountPrice"
                {...register("discountPrice", {
                  min: {
                    value: 1,
                    message: "discountPrice must be at least 1",
                  },
                })}
                placeholder="Enter discount price"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.discountPrice && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.discountPrice?.message}
                </Typography>
              )}
            </div>

            <div className=" w-full">
              <label htmlFor="totalParticipants">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Total Participants
                </Typography>
              </label>
              <Input
                id="totalParticipants"
                color="gray"
                size="lg"
                type="number"
                name="totalParticipants"
                {...register("totalParticipants", {
                  required: "Insert total participants",
                  min: {
                    value: 1,
                    message: "total participant must be at least 1 people",
                  },
                  max: {
                    value: 100,
                    message: "total participant must not exceed  100 people",
                  },
                })}
                placeholder="Enter total participants"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errors?.totalParticipants && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errors.totalParticipants?.message}
                </Typography>
              )}
            </div>
          </div>

          <Button
            className="bg-actionBlue my-6 w-full rounded-none font-medium shadow-none normal-case text-white text-[15px] tracking-wide"
            type="submit"
          >
            Create Tour
          </Button>
        </form>
      </div>
    </>
  );
}
