import { getTour } from "@/app/libs/getTour";
import Nav from "@/app/components/landingPage/Nav";
import { Typography } from "@/app/ui/materialExport";
import Footer from "@/app/components/landingPage/Footer";
import Image from "next/image";
import { Button } from "@/app/ui/materialExport";

export default async function SingleTour({ params }) {
  const { tour } = await getTour(params.slug);
  console.log(tour.coverImage);
  return (
    <>
      <Nav />
      <main className=" bg-green-200 py-4 container">
        <div className=" bg-red-200  flex ">
          <div className=" w-full lg:w-[65%] bg-purple-300">
            <Image
              src={tour?.coverImage}
              width={600}
              height={400}
              quality={100}
              alt="tour-feature-image"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="lg:flex-grow ">
            <Image
              src={tour?.coverImage}
              width={500}
              height={300}
              quality={100}
              alt="tour-feature-image"
              className=" w-full object-cover"
            />
            <Image
              src={tour?.coverImage}
              width={500}
              height={300}
              quality={100}
              alt="tour-feature-image"
              className=" w-full object-cover"
            />
            <div>
              <Button className=" bg-actionBlue">7 MORE PHOTOS</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
