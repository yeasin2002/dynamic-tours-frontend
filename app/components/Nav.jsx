"use client";
import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

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

          <div className=" relative md:hidden w-[60%]">
            {!isNavShowed ? (
              <FiMenu
                className={`h-8 w-8 hover:scale-110 float-right hover:duration-75 hover:cursor-pointer md:hidden`}
                onClick={() => {
                  setIsNavShowed((prev) => !prev);
                }}
              />
            ) : (
              <FaXmark
                className={`h-8 w-8 hover:scale-110 float-right hover:duration-75 hover:cursor-pointer md:hidden`}
                onClick={() => {
                  setIsNavShowed((prev) => !prev);
                }}
              />
            )}
            <div
              className={`fadeIn absolute top-10 right-0 z-30 bg-offWhite bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg  ${
                !isNavShowed ? "hidden" : "block"
              } absolute w-full  p-6 top-0 right-0`}
            >
              <ul className=" flex flex-col gap-4 justify-center  items-center">
                {navMenu.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className=" text-white px-4 uppercase lg:px-6 py-2 hover:bg-black hover:text-white rounded-full hover:duration-200 "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
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
