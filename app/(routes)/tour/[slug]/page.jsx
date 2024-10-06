import { getTour } from "@/app/libs/getTour";
import Nav from "@/app/components/landingPage/Nav";
import Footer from "@/app/components/landingPage/Footer";
import Image from "next/image";
import { Button } from "@/app/ui/materialExport";
import Container from "@/app/components/extra/Container";

export default async function SingleTour({ params }) {
  const { tour } = await getTour(params.slug);
  console.log(tour.coverImage);
  return (
    <>
      <Nav />
      <main>
        <Container>
          <div className=" flex lg:flex-row flex-col  h-[520px]  gap-6">
            <div className=" w-full lg:w-[70%]">
              <img
                src={tour?.coverImage}
                width={600}
                height={350}
                alt="tour-feature-image"
                className=" w-full h-full rounded-2xl"
              />
            </div>
            <div className="lg:flex-grow hidden lg:flex lg:w-[25%] w-full flex-col  justify-between ">
              <div className="flex flex-col gap-2  ">
                <Image
                  src={tour?.coverImage}
                  width={500}
                  height={300}
                  quality={100}
                  alt="tour-feature-image"
                  className=" w-full h-[230px] object-cover rounded-2xl"
                />
                <Image
                  src={tour?.coverImage}
                  width={500}
                  height={300}
                  quality={100}
                  alt="tour-feature-image"
                  className=" w-full h-[230px] object-cover rounded-2xl"
                />
              </div>

              <div>
                <Button fullWidth className=" bg-actionBlue ">
                  7 MORE PHOTOS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
