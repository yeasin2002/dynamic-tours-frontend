import Nav from "@/app/components/Nav";
import Filter from "@/app/components/Tour/Filter";
import Search from "@/app/components/Tour/Search";
import TourList from "@/app/components/Tour/TourList";
import Container from "@/app/components/extra/Container";
import { getAllTours } from "@/app/libs/getAllTours";

export default async function Tour() {
  const tourData = await getAllTours();
  return (
    <>
      <div>
        <Nav />
        <Container>
          <div id="main" className=" flex flex-col">
            <div className=" flex justify-end">
              <Search />
            </div>
            <div className=" flex h-full gap-4">
              <div className=" bg-pink-200 hidden lg:flex w-[300px]">
                <Filter />
              </div>
              <div className="  flex-grow overflow-auto">
                <TourList tourData={tourData} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
