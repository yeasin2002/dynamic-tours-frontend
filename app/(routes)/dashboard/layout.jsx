import { adminNavMenu } from "@/app/constant/constant";
import Link from "next/link";
import { Typography } from "@/app/ui/materialExport";
import SideNav from "@/app/components/Dashboard/SideNav";

export default function layout({ children }) {
  return (
    <>
      <div className="dashboardGradient w-full min-h-screen lg:flex">
        <div className="hidden lg:block h-full">
          <SideNav />
        </div>
        <div className=" lg:hidden bg-green-200">the mobile menu</div>
        <div className=" w-full h-screen overflow-auto">{children}</div>
      </div>
    </>
  );
}
