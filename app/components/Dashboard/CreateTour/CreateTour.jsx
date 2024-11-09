"use client";
import { Input, Typography, Button, Textarea } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlinePhotograph } from "react-icons/hi";
import AddTourGuide from "./AddTourGuide";
import AddLocationPoint from "./AddLocationPoint";
import { convertToDataURL, convertToDataURLmultiple } from "@/app/util/helper";
import { useMapContext } from "./MapContext";
import { HiOutlineX } from "react-icons/hi";

export default function CreateTour() {
  const {
    register: registerTour,
    handleSubmit: handleSubmitTour,
    formState: { errors: errorsTour },
    setValue,
    watch,
  } = useForm();

  const [dragStart, setDragStart] = useState({
    coverImage: false,
    featureImage: false,
  });

  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [selectedFeatureImage, setSelectedFeatureImage] = useState(null);
  const formData = watch();
  console.log(formData);
  const coverImageRef = useRef(null);
  const featureImageRef = useRef(null);
  // const { state, dispatch } = useMapContext();
  // console.log(state);

  // the main submit function
  const createTourHandler = function (inputData) {
    console.log(inputData);
  };

  const dragOver = function (inputType) {
    return (event) => {
      event.preventDefault();
      if (inputType === "coverImage") {
        setDragStart((prev) => {
          return {
            ...prev,
            coverImage: true,
          };
        });
      } else if (inputType === "featureImage") {
        setDragStart((prev) => {
          return {
            ...prev,
            featureImage: true,
          };
        });
      }
    };
  };

  const dropHandler = function (inputType) {
    return (event) => {
      event.preventDefault();
      setDragStart({ coverImage: false, featureImage: false });
      if (inputType === "coverImage") {
        setValue("coverImage", [event.dataTransfer.files[0]]);
      } else if (inputType === "featureImage") {
        setValue("images", event.dataTransfer.files);
      }
    };
  };

  return (
    <>
      <div className="">
        <form>
          <label htmlFor="coverImage">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Cover Image
            </Typography>
          </label>
          <div
            onDragOver={dragOver("coverImage")}
            onDrop={dropHandler("coverImage")}
            onDragLeave={() =>
              setDragStart({ coverImage: false, featureImage: false })
            }
            className={` bg-senseWhite py-4 border-dashed ${
              dragStart.coverImage ? "opacity-60" : "opacity-100"
            } flex duration-300 items-center justify-center border-2  my-2  p-4`}
          >
            {formData.coverImage?.length > 0 && (
              <div className="  h-[140px] w-[300px]  relative">
                <div className=" absolute top-1 right-1">
                  <HiOutlineX
                    onClick={() => setValue("coverImage", undefined)}
                    className=" w-7 h-7 p-1 rounded-full text-shadeBlack bg-offWhite cursor-pointer"
                  />
                </div>
                <img
                  src={convertToDataURL(formData.coverImage[0])}
                  alt="cover-image"
                  width={200}
                  height={"auto"}
                  className=" object-cover w-full h-full "
                />
              </div>
            )}
            {!formData.coverImage?.length > 0 && (
              <>
                <HiOutlinePhotograph className=" w-16 h-16 text-actionBlue opacity-80" />
                <Typography className=" p-2 py-6 text-shadeBlack ">
                  Drop your cover image here or{" "}
                  <span
                    onClick={() => coverImageRef?.current?.click()}
                    className=" cursor-pointer text-actionBlue"
                  >
                    <label htmlFor="coverImage">browse</label>
                  </span>
                </Typography>
              </>
            )}
            <input
              id="coverImage"
              name="coverImage"
              color="gray"
              {...registerTour("coverImage", {
                required: "Please select a cover image",
                validate: {
                  maxFile: (image) =>
                    (image && image.length < 2) ||
                    "You can only select up to 1 cover image.",
                },
              })}
              size="lg"
              type="file"
              // ref={coverImageRef}
              accept="image/*"
              className="hidden"
            />
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 md:py-0  lg:gap-y-4 gap-x-8 ">
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

          <label htmlFor="featureImage">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium pt-4 mb-2"
            >
              Feature Image
            </Typography>
          </label>

          <div
            onDragOver={dragOver("featureImage")}
            onDrop={dropHandler("featureImage")}
            onDragLeave={() =>
              setDragStart({ coverImage: false, featureImage: false })
            }
            className={` bg-senseWhite py-4 border-dashed ${
              dragStart.featureImage ? "opacity-60" : "opacity-100"
            } flex duration-300 items-center ${
              formData.images?.length > 0 ? "" : "justify-center"
            } border-2 overflow-auto   p-4`}
          >
            <input
              id="featureImage"
              color="gray"
              {...registerTour("images", {
                validate: {
                  minFile: (image) =>
                    (image && image.length >= 1) ||
                    "Please select at least 1 feature image.",
                  maxFile: (image) =>
                    (image && image.length <= 15) ||
                    "You can only select up to 15 feature image.",
                },
              })}
              size="lg"
              type="file"
              className="hidden"
              accept="image/*"
              multiple
            />
            {formData.images?.length > 0 && (
              <div className="">
                <div className=" flex gap-4">
                  {[...formData.images].map((item) => (
                    <div className="h-[140px] w-[180px] relative">
                      <div className=" absolute top-1 right-1">
                        <HiOutlineX
                          onClick={() => setValue("coverImage", undefined)}
                          className=" w-7 h-7 p-1 rounded-full text-shadeBlack bg-offWhite cursor-pointer"
                        />
                      </div>
                      <img
                        src={convertToDataURL(item)}
                        alt="cover-image"
                        width={200}
                        height={"auto"}
                        className=" object-cover w-full h-full "
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!formData.images?.length > 0 && (
              <>
                <HiOutlinePhotograph className=" w-16 h-16 text-actionBlue opacity-80" />
                <Typography className=" p-2 py-6 text-shadeBlack ">
                  Drop your feature image here or{" "}
                  <span className=" cursor-pointer text-actionBlue">
                    <label htmlFor="featureImage">browse</label>
                  </span>
                </Typography>
              </>
            )}
          </div>
          {errorsTour?.images && (
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-1"
            >
              {errorsTour.images?.message}
            </Typography>
          )}

          <label htmlFor="totalParticipants">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium pt-4 mb-2"
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
