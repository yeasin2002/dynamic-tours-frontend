import {
  FaArrowRight,
  FaArrowLeft,
  FaLocationArrow,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";
import { oceanImage } from "../constant/constant";
import image1 from "@/public/image/image1.jpg";
import image2 from "@/public/image/image2.jpg";
import image3 from "@/public/image/image3.jpg";

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

            <div className=" py-5 px-5 flex items-center justify-between">
              <div>
                <h4 className=" font-bold text-lg tracking-wide pb-1.5">
                  Forest Wild Life
                </h4>
                <p className=" flex items-center gap-2 text-textBlack">
                  <FaLocationArrow /> Nrt Indonesia
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
    </>
  );
}
