import { adminNavMenu } from "@/app/constant/constant";
import Link from "next/link";
import { Typography } from "@/app/ui/materialExport";
import SideNav from "@/app/components/Dashboard/SideNav";
import MobileMenu from "@/app/components/Dashboard/MobileMenu";

export default function layout({ children }) {
  return (
    <>
      <div className="dashboardGradient w-full min-h-screen md:flex">
        <div className="hidden md:block h-full">
          <SideNav />
        </div>
        <div className=" md:hidden ">
          <MobileMenu />
        </div>
        <div className=" p-3 py-0  w-full h-screen overflow-auto">
          {children}
        </div>
      </div>
    </>
  );
}
