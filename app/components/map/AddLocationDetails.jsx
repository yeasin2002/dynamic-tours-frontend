"use client";
import { Button, Typography } from "@/app/ui/materialExport";
import { Input, Textarea } from "@material-tailwind/react";
import { useMapContext } from "../Dashboard/CreateTour/MapContext";
import { useState } from "react";

export default function AddLocationDetails({
  address,
  cancelMaker,
  position,
  setPosition,
}) {
  const { state, dispatch } = useMapContext();
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [dayNumber, setDayNumber] = useState(null);

  const addNewLocationPoint = function (e) {
    // stopping from the event to propagate
    e.stopPropagation();
    // creating the location data format
    const locationData = {
      coordinates: [position[1], position[0]],
      address: address,
      description,
      dayNumber: 0,
      image: selectedImage,
    };

    console.log(locationData);
    // setSelectedLocation((prev) => [...prev, locationData]);
    dispatch({ type: "ADD_NEW_LOCATION", payload: locationData });
    setPosition(null);
  };

  return (
    <>
      <div className="p-0 w-full ">
        <div className=" w-full flex flex-col gap-2 ">
          <div className=" flex flex-col gap-2  ">
            <label htmlFor="adress">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium "
              >
                Location Address
              </Typography>
            </label>
            <Input
              id="adress"
              color="gray"
              size="lg"
              defaultValue={address}
              type="text"
              placeholder="Enter tour adress"
              className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
              labelProps={{
                className: "hidden",
              }}
            />
            {/* 
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-0.5"
            >
              there might be and error
            </Typography> */}
          </div>
          <div className=" flex flex-col gap-2  ">
            <label htmlFor="ldescription">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium "
              >
                Location Description
              </Typography>
            </label>
            <Textarea
              id="ldescription"
              color="gray"
              size="lg"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter tour ldescription"
              className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
              labelProps={{
                className: "hidden",
              }}
            />
            {/* 
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-0.5"
            >
              there might be and error
            </Typography> */}
          </div>
          <div className=" flex flex-col gap-2  ">
            <label htmlFor="day_no">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium "
              >
                Day number
              </Typography>
            </label>
            <Input
              id="day_no"
              color="gray"
              size="lg"
              onChange={(e) => setDayNumber(e.target.value)}
              type="number"
              min={1}
              max={100}
              placeholder="Enter the day no"
              className="!w-full placeholder:!opacity-100 placeholder:text-shadeBlack !bg-senseWhite border-none rounded-none "
              labelProps={{
                className: "hidden",
              }}
            />
            {/* 
            <Typography
              variant="small"
              className="opacity-90 tracking-wide text-red-600 mt-0.5"
            >
              there might be and error
            </Typography> */}
          </div>
          <div className=" flex flex-col gap-2  ">
            <label htmlFor="locationImage">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium "
              >
                Location Image
              </Typography>
            </label>
            <input
              id="locationImage"
              color="gray"
              onChange={(e) => setSelectedImage(e.target.files)}
              size="lg"
              type="file"
              accept="image/*"
              multiple
            />
            {/* <input type="file" accept="image/*" max={3} /> */}
          </div>
          <div className=" mt-3 flex justify-between itec">
            <Button onClick={addNewLocationPoint} size="sm">
              Add Location
            </Button>
            <Button onClick={cancelMaker} size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
