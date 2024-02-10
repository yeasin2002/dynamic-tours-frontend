import {
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaCaretRight,
} from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/image/image1.jpg";
import image2 from "@/public/image/image2.jpg";
import image3 from "@/public/image/image3.jpg";

import { journeyData } from "../constant/constant";

const image = [image1, image2, image3];

export default function Destination() {
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className="flex-grow sm:text-left text-center">
          <h3 className=" text-4xl pb-3  font-bold text-black">
            Popular Destination
          </h3>
          <p className=" text-sm tracking-wide">
            Unlead Your Wanderlust With SkyWings
          </p>
        </div>
        <div className="sm:flex items-center gap-3 hidden ">
          <button>
            <FaArrowLeft className=" w-10 h-10 p-2.5 bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
          <button>
            <FaArrowRight className=" w-10 h-10 p-2.5  bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
        </div>
      </div>

      <div className="py-8 flex flex-col md:flex-row justify-center cursor-pointer md:gap-4">
        {image.map((img, i) => (
          <div key={i} className="p-3">
            <Image src={img} className=" w-full  object-cover rounded-3xl" />

            <div className=" py-5 px-5 flex md:flex-col gap-2 lg:flex-row items-center justify-between">
              <div>
                <h4 className=" font-bold text-lg tracking-wide pb-1.5">
                  Forest Wild Life
                </h4>
                <p className=" flex items-center gap-2 text-textBlack">
                  <IoLocationSharp /> Nrt Indonesia
                </p>
              </div>

              <div>
                <p className=" font-medium flex items-center gap-1.5 text-white bg-actionBlue px-3 py-1.5 rounded-2xl">
                  <FaStar />
                  4.6
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col items-center py-3">
        <h3 className=" text-4xl text-center pb-4 font-bold text-black">
          Journey To The Sky Made Simple!
        </h3>
        <p className=" text-sm px-4 text-textBlack text-center tracking-wider w-full md:w-3/6 lg:w-2/6 ">
          Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience
        </p>
      </div>

      <div className="  py-4 md:py-10 flex flex-col flex-wrap  md:flex-row items-center md:items-end justify-center gap-5 md:gap-6  ">
        {journeyData.map((data) => (
          <div
            key={data.id}
            className="group hover:bg-actionBlue bg-offWhite relative duration-500 text-white p-12  rounded-[30px] overflow-hidden md:max-w-[320px] lg:max-w-[400px] shadow-slate-600 drop-shadow-md flex flex-col gap-3"
          >
            <div
              style={{
                backgroundImage: `url(${data.image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className=" absolute -top-24 -right-16 w-[240px] rounded-full h-[240px]  "
            ></div>

            <data.icon className=" w-16 h-16 p-4 group-hover:border-white group-hover:text-white rounded-full border-textBlack border-[2px]  text-textBlack" />

            <h3 className=" text-2xl font-medium group-hover:text-white text-textBlack w-2/4 group-hover:pt-3 pt-3 ">
              {data.title}
            </h3>

            <p className=" text-sm w-4/5 group-hover:text-white text-textBlack font-thin  leading-6 duration-300 ">
              {data.description}
            </p>

            <Link
              href={"#"}
              className="pt-6 flex  items-center text-base font-thin group-hover:text-offWhite text-actionBlue uppercase tracking-wide gap-2"
            >
              Learn More <FaCaretRight />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
