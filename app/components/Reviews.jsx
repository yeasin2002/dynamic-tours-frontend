import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { oceanImage } from "../constant/constant";

const rating = 4;

export default function Reviews() {
  return (
    <>
      <div className=" ">
        <h3 className=" text-center text-4xl font-bold pb-8">
          Loved By Over Thousand Travelers
        </h3>
        <div className=" flex  flex-col  md:flex-row">
          {oceanImage.map((item) => (
            <div key={item.id} className="">
              <div className="group hover:bg-actionBlue duration-300 flex flex-col gap-3 p-3  rounded-3xl bg-offWhite">
                <div className=" bg-white p-8 rounded-3xl">
                  <div className="flex gap-3 pb-5 text-actionBlue">
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                  </div>

                  <p className=" text-lg  text-textBlack font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae expedita, doloribus consequatur eveniet excepturi ex,
                    eaque modi, dolore magnam perspiciatis est veritatis vero
                    nihil velit architecto necessitatibus qui quos ipsa. Illum,
                    enim atque voluptas nostrum blanditiis vero
                  </p>
                </div>

                <div className=" flex items-center px-8 gap-4">
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    className=" rounded-full "
                  />
                  <div className=" group-hover:text-white">
                    <h3 className=" text-[22px] font-medium">Sabbir Hossain</h3>
                    <p className=" text-lg group-hover:text-white text-textBlack">
                      Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
