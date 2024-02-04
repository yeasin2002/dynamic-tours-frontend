import hero from "@/public/hero.png";
import plane from "@/public/plane2.png";
import Image from "next/image";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Action from "./Action";

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

          <div className=" knowmore lg:absolute bottom-0 right-5  bg-green-300">
            <div>
              <div className="bg-blue-300 flex items-center right-10 gap-10 roundedfu p-4">
                <p className=" text-lg font-bold">Know More</p>
                <ArrowRightIcon className="w-[25x] h-[25px] p-1 rounded-full bg-actionBlue text-plainWhite box-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
