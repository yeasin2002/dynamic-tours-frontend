import hero from "@/public/hero.png";
import plane from "@/public/plane.png";
import Image from "next/image";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Action from "./Action";
import { oceanImage } from "../constant/constant";

export default function Hero() {
  return (
    <>
      <div className="px-7 relative flex justify-center items-center flex-col md:flex-row  ">
        <div className=" p-4 md:absolute container   z-20 ">
          <p className=" uppercase text-sm font-medium text-textBlack">
            Elevate your travel journey
          </p>
          <h2 className=" lg:text-6xl lg:leading-[1.2] text-4xl py-3 font-semibold leading-[1.1] ">
            Exeperience <br /> The Magic Of <br /> Flight!
          </h2>
          <div className=" flex py-6 gap-4">
            <Action href={"/booking"}>Book A Trip Now</Action>

            <div className="p-[12px] cursor-pointer  bg-offWhite rounded-full">
              <PlayIcon className="w-[20x] h-[20px] p-1 rounded-full bg-actionBlue text-plainWhite box-border" />
            </div>
          </div>
        </div>

        <div
          className="lg:h-[751px] md:h-[480px] h-[360px] rounded-3xl"
          style={{
            backgroundImage: `url(${hero.src})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="p-2 h-full flex items-center">
            <Image
              src={plane}
              className="h-auto lg:w-[60%] md:w-[55%] w-[85%] absolute float-right right-0"
            />
          </div>

          <div className=" knowmore lg:absolute bottom-0 right-6  bg-green-300">
            <div className=" bg-red-300 flex flex-col">
              <div className="  flex justify-end ">
                <div className="bg-offWhite flex relative items-center curve w-3/5 group hover:cursor-pointer justify-around rounded-full p-4 rounded-br-none">
                  <p className=" text-lg font-bold">Know More</p>
                  <ArrowRightIcon className="w-[25x] h-[25px] p-1 group-hover:translate-x-1 group-hover:duration-300  rounded-full bg-actionBlue  text-plainWhite box-border" />
                </div>
              </div>
              <div className=" bg-gray-300 flex p-5 rounded-full  rounded-tr-none">
                <div className=" image-list flex">
                  {oceanImage.map((image, i) => (
                    <div
                      key={image.id}
                      className={`${i > 0 ? "-translate-x-6" : ""} ${
                        i === 2 ? "-translate-x-[48px]" : ""
                      }`}
                    >
                      <Image
                        src={image.image}
                        width={65}
                        height={65}
                        className="object-cover rounded-full border-[3px] border-offWhite"
                      />
                    </div>
                  ))}
                </div>

                <div className=" -translate-x-4">
                  <p className="text-base font-bold pb-1">Awesome places</p>
                  <p className="text-sm font-medium text-textBlack">
                    Discover The World One <br />
                    Adventure At A Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
