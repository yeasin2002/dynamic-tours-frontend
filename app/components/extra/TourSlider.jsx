"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import image1 from "@/public/image/image1.jpg";
import image2 from "@/public/image/image2.jpg";
import image3 from "@/public/image/image3.jpg";

const image = [image1, image2, image3];

export default function TourSlider({ bestTours }) {
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
            <FaArrowLeft className=" prev-slide  w-10 h-10 p-2.5 bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
          <button>
            <FaArrowRight className=" next-slide w-10 h-10 p-2.5  bg-textBlack text-white rounded-full hover:bg-actionBlue duration-300 cursor-pointer active:opacity-50" />
          </button>
        </div>
      </div>
      <div className=" bg-green-200 justify-center cursor-pointer md:gap-4">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination, Navigation]}
          navigation={{ nextEl: ".next-slide", prevEl: ".prev-slide" }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {bestTours.data.map((tour) => (
            <SwiperSlide key={tour.id}>
              <div className="p-3">
                <Image
                  src={`http://localhost:4000/img/tours/${tour.imageCover}`}
                  alt="slide-image"
                  width={380}
                  height={400}
                  className=" w-full object-cover rounded-3xl"
                />

                <div className=" py-5 px-5 flex md:flex-col gap-2 lg:flex-row items-center justify-between">
                  <div>
                    <h4 className=" font-bold text-lg tracking-wide pb-1.5">
                      {tour.name}
                    </h4>
                    <p className=" flex items-center gap-2 text-textBlack">
                      <IoLocationSharp /> Nrt Indonesia
                    </p>
                  </div>

                  <div>
                    <p className=" font-medium flex items-center gap-1.5 text-white bg-actionBlue px-3 py-1.5 rounded-2xl">
                      <FaStar />
                      {tour.ratingsAverage}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
