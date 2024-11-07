"use client";
import {
  Input,
  Typography,
  Button,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlinePhotograph } from "react-icons/hi";
import AddTourGuide from "./AddTourGuide";
import AddLocationPoint from "./AddLocationPoint";

export default function CreateTour() {
  const {
    register: registerTour,
    handleSubmit: handleSubmitTour,
    formState: { errors: errorsTour },
  } = useForm();

  const [dragStart, setDragStart] = useState(false);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [selectedFeatureImage, setSelectedFeatureImage] = useState(null);

  const coverImageRef = useRef(null);
  const featureImageRef = useRef(null);

  // the main submit function
  const createTourHandler = function (inputData) {
    console.log(inputData);
  };

  const makeLocalUrl = function (file, imageType) {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (event) {
        imageType === "coverImage"
          ? setSelectedCoverImage(event.target.result)
          : setSelectedFeatureImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select valid image");
    }
  };
  const handlerCoverImage = function (event) {
    makeLocalUrl(event.target.files[0], "coverImage");
  };

  const handleFeatureImage = function (event) {};

  const dragOver = function (event) {
    event.preventDefault();
    setDragStart(true);
  };

  const dropHandler = function (event) {
    event.preventDefault();
    setDragStart(false);
    const imageFile = event.dataTransfer.files[0];
    makeLocalUrl(imageFile);
  };

  const clearImage = function (actiontype) {
    if (actiontype === "featureImage") {
      return () => {
        featureImageRef.current.value = null;
        setSelectedFeatureImage(null);
      };
    }
    if (actiontype === "coverImage") {
      return () => {
        coverImageRef.current.value = null;
        setSelectedCoverImage(null);
      };
    }
  };

  return (
    <>
      <div className="">
        <form>
          <div
            onDragOver={dragOver}
            onDrop={dropHandler}
            onDragLeave={() => setDragStart(false)}
            className={` bg-senseWhite py-4 border-dashed ${
              dragStart ? "opacity-60" : "opacity-100"
            } flex duration-300 items-center justify-center border-2  my-2 p-4`}
          >
            {selectedCoverImage && (
              <div className=" bg-green-200">
                <img
                  onClick={clearImage("coverImage")}
                  src={selectedCoverImage}
                  alt=""
                  width={200}
                  height={"auto"}
                  className=" object-cover"
                />
              </div>
            )}
            <input
              id="coverImage"
              name="coverImage"
              onChangeCapture={handlerCoverImage}
              type="file"
              {...registerTour("coverImage", {
                required: "cover image is required",
              })}
              ref={coverImageRef}
              className="hidden"
              accept="image/*"
            />
            {!selectedCoverImage && (
              <>
                <HiOutlinePhotograph className=" w-16 h-16 text-actionBlue opacity-80" />
                <Typography className=" p-2 text-shadeBlack ">
                  Drop your cover image here or{" "}
                  <span
                    onClick={() => coverImageRef?.current?.click()}
                    className=" cursor-pointer text-actionBlue"
                  >
                    browse
                  </span>
                </Typography>
              </>
            )}
          </div>
          {errorsTour?.coverImage && (
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-1"
            >
              {errorsTour.coverImage?.message}
            </Typography>
          )}

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
                {...registerTour("title", {
                  required: "Insert tour title",
                })}
                placeholder="Enter tour title"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errorsTour?.title && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.title?.message}
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
                {...registerTour("duration", {
                  required: "Insert tour duration",
                  min: {
                    value: 1,
                    message: "Duration must be at least 1 day",
                  },
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
              {errorsTour?.duration && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.duration?.message}
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
                {...registerTour("description", {
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
              {errorsTour?.description && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.description?.message}
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
                {...registerTour("summery", {
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
              {errorsTour?.summery && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.summery?.message}
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
                {...registerTour("price", {
                  required: "Insert tour price",
                  min: { value: 1, message: "Price must be at least 1" },
                })}
                placeholder="Enter tour price"
                className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
                labelProps={{
                  className: "hidden",
                }}
              />
              {errorsTour?.price && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.price?.message}
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
                {...registerTour("discountPrice", {
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
              {errorsTour?.discountPrice && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.discountPrice?.message}
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
                {...registerTour("totalParticipants", {
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
              {errorsTour?.totalParticipants && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.totalParticipants?.message}
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
                  Tour Guides
                </Typography>
              </label>
              <div>
                <AddTourGuide />
              </div>

              {errorsTour?.totalParticipants && (
                <Typography
                  variant="small"
                  className="opacity-90 tracking-wide text-red-600 mt-1"
                >
                  {errorsTour.totalParticipants?.message}
                </Typography>
              )}
            </div>
          </div>

          <div
            onDragOver={dragOver}
            onDrop={dropHandler}
            onDragLeave={() => setDragStart(false)}
            className={` bg-senseWhite py-4 border-dashed ${
              dragStart ? "opacity-60" : "opacity-100"
            } flex duration-300 items-center justify-center border-2  my-4 p-4`}
          >
            {selectedFeatureImage && (
              <div className=" bg-green-200">
                <img
                  onClick={clearImage("featureImage")}
                  src={selectedFeatureImage}
                  alt=""
                  width={200}
                  height={"auto"}
                  className=" object-cover"
                />
              </div>
            )}
            <input
              id="coverImage"
              name="coverImage"
              onChangeCapture={handleFeatureImage}
              type="file"
              {...registerTour("coverImage", {
                required: "cover image is required",
              })}
              ref={featureImageRef}
              className="hidden"
              accept="image/*"
            />
            {!selectedFeatureImage && (
              <>
                <HiOutlinePhotograph className=" w-16 h-16 text-actionBlue opacity-80" />
                <Typography className=" p-2 text-shadeBlack ">
                  Drop your feature image here or{" "}
                  <span
                    onClick={() => featureImageRef?.current?.click()}
                    className=" cursor-pointer text-actionBlue"
                  >
                    browse
                  </span>
                </Typography>
              </>
            )}
          </div>
          {errorsTour?.coverImage && (
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-1"
            >
              {errorsTour.coverImage?.message}
            </Typography>
          )}

          <label htmlFor="totalParticipants">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Add Tour Locations
            </Typography>
          </label>

          <AddLocationPoint />

          <Button
            className="bg-actionBlue my-6 w-full rounded-none font-medium shadow-none normal-case text-white text-[15px] tracking-wide"
            onClick={handleSubmitTour(createTourHandler)}
          >
            Create Tour
          </Button>
        </form>
      </div>
    </>
  );
}
