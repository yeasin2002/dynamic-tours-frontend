"use client";
import { usePathname } from "next/navigation";
import { Typography } from "@material-tailwind/react";
export default function LargeHeading() {
  const pathName = usePathname();
  const heading = pathName
    .split("/")
    [pathName.split("/").length - 1]?.toUpperCase();
  const isUpdate = pathName.split("/")[pathName.split("/").length - 2];
  return (
    <>
      <Typography className=" font-medium text-[26px]  dashboardGradient rounded-tr-lg rounded-bl-lg tracking-wider text-offWhite p-1 px-5">
        {isUpdate === "update-tour" ? isUpdate.toUpperCase() : heading}
      </Typography>
    </>
  );
}
