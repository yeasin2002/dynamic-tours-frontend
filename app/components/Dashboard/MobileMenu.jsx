"use client";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { HiOutlineMenu } from "react-icons/hi";
import { Button, Typography } from "@/app/ui/materialExport";
import { IconButton } from "@material-tailwind/react";
import SideNav from "./SideNav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className=" p-3  bg-blue-300">
        <div className=" flex items-center justify-between ">
          <h4 className=" font-bold text-lg text-blue-gray-900">Dashboard</h4>
          <Button onClick={openDrawer} variant="text" className=" p-2">
            <HiOutlineMenu className="w-6 h-6" />
          </Button>
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
