import SideNav from "@components/Dashboard/side-nav";
import MobileMenu from "@components/Dashboard/mobile-menu";
import Profile from "@/app/components/Header/profile-bar";

import LargeHeading from "@components/Dashboard/large-heading";

export default function layout({ children }) {
  return (
    <>
      <div className="bg-offWhite w-full min-h-screen md:flex">
        <div className="hidden md:block h-full">
          <SideNav />
        </div>
        <div className=" md:hidden ">
          <MobileMenu />
        </div>
        <div className=" p-3 py-0 md:py-3  w-full h-screen overflow-auto">
          <div className=" hidden lg:flex items-center border-b mb-2 justify-between py-1 ">
            <LargeHeading />
            <Profile />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
