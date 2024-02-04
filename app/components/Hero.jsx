import hero from "@/public/hero.png";
import plane from "@/public/plane.png";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import Action from "./Action";

export default function Hero() {
  return (
    <>
      <div className="px-7 relative flex justify-center flex-col  ">
        <div className=" py-4">
          <p className=" uppercase text-sm font-medium text-textBlack">
            Elevate your travel journey
          </p>
          <h2 className=" text-5xl py-3 font-semibold leading-[1.1] ">
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
          className="  lg:h-[751px] md:h-[480px] h-[360px] rounded-3xl"
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
              className="h-auto w-[85%] absolute float-right right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
