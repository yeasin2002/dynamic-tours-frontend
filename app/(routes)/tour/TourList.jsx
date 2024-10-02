"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {
  HiHeart,
  HiLocationMarker,
  HiUser,
  HiStar,
  HiFlag,
} from "react-icons/hi";

import { IoIosPricetag } from "react-icons/io";

export default function TourList({ tourData }) {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-x-2 gap-y-6  py-4 ">
        {tourData?.tour?.map((item) => (
          <Card
            key={item?.id}
            className="w-full xl:w-[310px] flex flex-col justify-between 2xl:w-[350px] bg-white "
          >
            <CardBody className=" flex flex-col">
              <div className=" h-[250px]">
                <Image
                  src={item?.coverImage}
                  width={650}
                  height={380}
                  alt={"tourImage"}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>

              <div>
                <Typography variant="h5" className="mb-2 mt-3 text-black">
                  {item?.title}
                </Typography>
                <Typography className="text-offGray">
                  {item?.description}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col gap-6 ">
              <div className=" pt-4 grid grid-cols-2  gap-3 ">
                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiLocationMarker className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {item?.startLocation?.address}
                </Typography>
                <Typography
                  variant="small"
                  className="text-offGray gap-1 flex items-center  "
                >
                  <HiUser className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.totalParticipant} People`}
                </Typography>

                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiFlag className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.locations.length} Stop`}
                </Typography>
                <Typography
                  variant="small"
                  className="  text-offGray   gap-1  flex items-center  "
                >
                  <HiStar className="w-6 h-6 mr-0.5 text-actionBlue" />
                  {`${item?.ratingsAverage} (${item.totalRating})`}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography
                  variant="paragraph"
                  className="  text-green-600   gap-1  flex items-center  "
                >
                  <IoIosPricetag className="w-6 h-6 mr-0.5 text-green-600" />
                  {`$ ${item?.price}`}
                </Typography>
                <div>
                  <Button size="sm" color="blue-gray" className=" mr-3">
                    <HiHeart className="w-4 h-4" />
                  </Button>

                  <Link href={`/tour/${item?.id}`}>
                    <Button size="sm" className=" bg-actionBlue font-light">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
