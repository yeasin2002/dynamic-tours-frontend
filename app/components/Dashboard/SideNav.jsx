"use client";
import { adminNavMenu } from "@/app/constant/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Typography } from "@/app/ui/materialExport";

export default function SideNav({ type, closeDrawer }) {
  const pathName = usePathname();
  const session = useSession();
  return (
    <>
      <div
        className={`${
          type === "mobile" ? "w-full" : "lg:min-w-[330px]"
        }   min-h-screen bg-white p-4`}
      >
        <div className=" pb-2 border-b border-[#D5D5D5]">
          <div
            className={`flex lg:flex-row ${
              type === "mobile" ? "flex-row text-left" : "flex-col  text-center"
            }   lg:text-left items-center py-2 gap-4`}
          >
            <img
              src={session?.data?.user?.image}
              width={60}
              height={60}
              className=" object-cover rounded-full h-[60px] w-[60px] border-actionBlue border-2 p-[2px]"
            />
            <div>
              <Typography
                variant="paragraph"
                className=" font-bold tracking-wide text-textBlack"
              >
                {session?.data?.user?.name}
              </Typography>
              <Typography variant="small" className=" text-offGray">
                Admin
              </Typography>
            </div>
          </div>
        </div>
        <ul className=" pt-4">
          {adminNavMenu.map((menu) => (
            <li key={menu.id}>
              <Link
                onClick={closeDrawer}
                href={menu.link}
                variant="paragraph"
                className={`flex ${
                  type === "mobile" ? "text-base" : "flex-col text-lg"
                } lg:flex-row  lg:gap gap-2 lg:text-lg font-medium tracking-wider text-blue-gray-900 items-center hover:bg-actionBlue my-1 ${
                  menu.link === pathName
                    ? "bg-actionBlue text-white rounded-md"
                    : "text-admin_text"
                } hover:text-white transition  p-2.5 hover:rounded-md  `}
              >
                <menu.icon className="w-6 h-6 -translate-y-[0 px]" />
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
