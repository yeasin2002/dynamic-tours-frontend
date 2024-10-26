"use client";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { HiOutlineMenu } from "react-icons/hi";
import { Button, Typography } from "@/app/ui/materialExport";
import { IconButton } from "@material-tailwind/react";
import SideNav from "./SideNav";
import { ProfileMenu } from "../Header/ProfileMenu";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const pathName = usePathname();
  const heading = pathName
    .split("/")
    [pathName.split("/").length - 1]?.toUpperCase();

  return (
    <>
      <div className=" p-2 py-3 shadow-md">
        <div className=" flex items-center justify-between ">
          <Button onClick={openDrawer} variant="text" className=" p-2">
            <HiOutlineMenu className="w-6 h-6" />
          </Button>
          <h4 className=" font-bold text-lg text-blue-gray-900">{heading}</h4>
          <div>
            <ProfileMenu />
          </div>
        </div>
        <div className=" bg-red-200">
          <Drawer open={open} onClose={closeDrawer} className="">
            <div className=" bg-green-400">
              <SideNav type={"mobile"} closeDrawer={closeDrawer} />
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
