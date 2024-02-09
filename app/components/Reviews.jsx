import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { oceanImage } from "../constant/constant";

const rating = 4;

export default function Reviews() {
  return (
    <>
      <div className=" bg-green-300">
        <h3 className=" text-center text-4xl font-bold pb-8">
          Loved By Over Thousand Travelers
        </h3>
        <div className=" flex  gap-10">
          {oceanImage.map((item) => (
            <div key={item.id} className=" bg-red-400">
              <div className="reviews flex flex-col gap-3 p-3  rounded-3xl bg-offWhite">
                <div className=" bg-white p-12 rounded-3xl">
                  <div className="flex gap-3 pb-5">
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                    <FaStar className=" w-7 h-7" />
                  </div>

                  <p className=" text-xl text-textBlack font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae expedita, doloribus consequatur eveniet excepturi ex,
                    eaque modi, dolore magnam perspiciatis est veritatis vero
                    nihil velit architecto necessitatibus qui quos ipsa. Illum,
                    enim atque voluptas nostrum blanditiis vero
                  </p>
                </div>

                <div className=" flex items-center px-10 py-4 gap-4">
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    className=" rounded-full "
                  />
                  <div>
                    <h3 className=" text-xl font-medium">Sabbir Hossain</h3>
                    <p className=" text-lg text-textBlack">Developer</p>
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
