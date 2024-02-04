"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { navMenu } from "../constant/constant";
import { useState } from "react";

export default function Nav() {
  const [isNavShowed, setIsNavShowed] = useState();

  return (
    <>
      <nav className="container p-4 py-6">
        <div className="flex justify-between items-center px-2">
          <a href="/">
            <Image src={logo} height={50} width={125} alt="Brand logo" />
          </a>
          <ul className="gap-3 md:flex hidden">
            {navMenu.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className=" text-black hidden md:block px-4 uppercase lg:px-6 py-2 hover:bg-black hover:text-white rounded-full hover:duration-200 "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="bg-red-300">
            <Bars3Icon
              className={`h-8 w-8 hover:scale-110 ${
                isNavShowed ? "hidden" : "block"
              } hover:duration-75 hover:cursor-pointer md:hidden`}
              onClick={() => {
                setIsNavShowed((prev) => !prev);
              }}
            />

            <div
              className={`fadeIn absolute right-0 bg-green-200   z-10  ${
                !isNavShowed ? "hidden" : "block"
              } absolute w-full  p-6 top-0 right-0`}
            >
              <ul className=" flex flex-col gap-4 justify-center  items-center">
                {navMenu.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className=" text-black px-4 uppercase lg:px-6 py-2 hover:bg-black hover:text-white rounded-full hover:duration-200 "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <XMarkIcon
                  className={`h-8 w-8 hover:scale-110 ${
                    isNavShowed ? "block" : "hidden"
                  } hover:duration-75 hover:cursor-pointer md:hidden`}
                  onClick={() => {
                    setIsNavShowed((prev) => !prev);
                  }}
                />
              </ul>
            </div>
          </div>

          <a
            href="#"
            className="bg-textBlack text-white hidden md:block px-8 py-2 rounded-full"
          >
            Book Trip
          </a>
        </div>
      </nav>
    </>
  );
}
