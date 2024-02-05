import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Destination() {
  return (
    <>
      <div className=" flex items-center  justify-between">
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
    </>
  );
}
