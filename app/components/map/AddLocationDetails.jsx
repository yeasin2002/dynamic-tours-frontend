"use client";
import { Button, Typography } from "@/app/ui/materialExport";
import { Input, Textarea } from "@material-tailwind/react";

export default function AddLocationDetails({ address, cancelMaker }) {
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
              type="text"
              defaultValue={address}
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
          <div className=" mt-3 flex justify-between itec">
            <Button size="sm">Add Location</Button>
            <Button onClick={cancelMaker} size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
