"use client";

import { adminNavMenu } from "@/app/constant/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Typography } from "@/app/ui/materialExport";

export default function SideNav() {
  const pathName = usePathname();
  const session = useSession();
  return (
    <>
      <div className=" min-w-[350px] min-h-screen bg-white p-4">
        <div className=" pb-2 border-b border-[#D5D5D5]">
          <div className=" flex items-center py-2 gap-4">
            <Image
              src={session?.data?.user?.image}
              width={60}
              height={60}
              className=" object-fill rounded-full h-[60px] w-[60px] p-0.5 border-primary border-2"
            />
            <div>
              <h2 className=" font-bold text-admin_text">
                {session?.data?.user?.name}
              </h2>
              <p className=" text-sm text-admin_small_text">Admin</p>
            </div>
          </div>
        </div>
        <ul className=" pt-4">
          {adminNavMenu.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.link}>
                <Typography
                  variant="paragraph"
                  className={`flex gap-3 items-center hover:bg-actionBlue my-1 ${
                    menu.link === pathName
                      ? "bg-actionBlue text-white rounded-md"
                      : "text-admin_text"
                  } hover:text-white transition  p-2.5 hover:rounded-md   font-normal `}
                >
                  <menu.icon className="w-6 h-6" /> {menu.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
