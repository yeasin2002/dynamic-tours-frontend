"use client";

import { usePathname } from "next/navigation";
import { Typography } from "@material-tailwind/react";
export default function LargeHeading() {
  const pathName = usePathname();
  const heading = pathName
    .split("/")
    [pathName.split("/").length - 1]?.toUpperCase();

  return (
    <>
      <Typography className=" font-medium text-[26px]  dashboardGradient rounded-tr-lg rounded-bl-lg tracking-wider text-offWhite p-1 px-5">
        {heading}
      </Typography>
    </>
  );
}
