import Image from "next/image";
import kidImage from "@/public/kid.png";
import imageforbg from "@/public/image/image1.jpg";

export default function Unleash() {
  return (
    <>
      <div>
        <div className="  flex flex-col gap- md:gap-12 xl:gap-20 lg:flex-row  items-center">
          <Image
            src={kidImage.src}
            width={450}
            height={670}
            className=" object-cover w-[570px] h-[690px] rounded-[35px]"
          />

          <div className=" flex text-center justify-center flex-col gap-7">
            <div className="  flex flex-col xl:flex-row items-center gap-4 md:gap-6">
              <h3 className=" text-5xl lg:text-7xl font-bold uppercase tracking-widest">
                Unleash
              </h3>
              <p className=" text-base w-full font-thin text-textBlack    ">
                Travelling Is A Wonderfull Way To Explore New Places. Learn
                About Different Culture And Gain New Exeperience
              </p>
            </div>
            <h3 className="  uppercase text-5xl lg:text-7xl  font-bold">
              Wonderlust with
            </h3>
            <div className="  flex flex-col xl:flex-row-reverse justify-end items-center gap-4 md:gap-6">
              <h3 className=" uppercase text-5xl lg:text-7xl font-bold tracking-widest">
                Skywings
              </h3>
              <p className="  text-base w-full font-thin text-textBlack  ">
                Travelling Is A Wonderfull Way To Explore New Places. Learn
                About Different Culture And Gain New Exeperience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
