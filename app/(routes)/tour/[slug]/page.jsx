import { getTour } from "@/app/libs/getTour";
import Nav from "@/app/components/landingPage/Nav";
import Footer from "@/app/components/landingPage/Footer";
import Image from "next/image";
import { Button, Typography } from "@/app/ui/materialExport";
import Container from "@/app/components/extra/Container";
import { HiOutlineHeart, HiOutlineShare, HiStar } from "react-icons/hi";
import Link from "next/link";
import Review from "./Reviews";
import SubDetails from "./SubDetails";

export default async function SingleTour({ params }) {
  const { tour } = await getTour(params.slug);
  console.log(tour);
  return (
    <>
      <Nav />
      <main>
        <Container>
          <div className=" flex lg:flex-row flex-col h-[400px] lg:h-[520px]  gap-6">
            <div className=" w-full lg:w-[70%] h-full">
              <img
                src={tour?.coverImage}
                width={600}
                height={350}
                alt="tour-feature-image"
                className=" w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="lg:flex-grow hidden lg:flex lg:w-[25%] w-full flex-col  justify-between ">
              <div className="flex flex-col gap-2  ">
                <Image
                  src={tour?.images[0]}
                  width={500}
                  height={300}
                  quality={100}
                  alt="tour-feature-image"
                  className=" w-full h-[230px] object-cover rounded-2xl"
                />
                <Image
                  src={tour?.images[1]}
                  width={500}
                  height={300}
                  quality={100}
                  alt="tour-feature-image"
                  className=" w-full h-[230px] object-cover rounded-2xl"
                />
              </div>

              <div>
                <Button
                  fullWidth
                  className=" bg-actionBlue font-normal text-sm tracking-wide "
                >
                  {`${
                    tour?.images.length - 2 ? tour?.images.length - 2 : ""
                  } MORE PHOTOS`}
                </Button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className=" py-3 flex flex-col lg:flex-row justify-between">
            <Typography className="text-textBlack tracking-wide font-medium lg:text-3xl text-2xl">
              {tour?.title}
            </Typography>
            <div className="gap-2 hidden lg:flex">
              <Button
                variant="outlined"
                className="rounded-md px-4 flex items-center gap-2"
              >
                <HiOutlineHeart />
                Save
              </Button>
              <Button
                variant="outlined"
                className="rounded-md px-4 flex items-center gap-2"
              >
                <HiOutlineShare />
                Share
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rating flex gap-0.5">
              {new Array(5).fill(1).map((item) => (
                <HiStar className="text-yellow-900 w-6 h-6" />
              ))}
            </div>
            <div className="flex gap-3">
              <Typography className="text-shadeBlack tracking-wide ">
                {tour?.ratingsAverage}/5
              </Typography>

              <Typography className="text-shadeBlack tracking-wide ">
                {`(${tour?.totalRating})`}
              </Typography>
              <Link href="#reviews">
                <Typography
                  variant="small"
                  className="text-blue-500 tracking-wide "
                >
                  reviews
                </Typography>
              </Link>
            </div>
          </div>

          <SubDetails tour={tour} />
          {/* reviews */}
          <Review />
        </Container>
      </main>
      <Footer />
    </>
  );
}
