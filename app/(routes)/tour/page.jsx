import Nav from "@/app/components/Nav";
import Filter from "@/app/components/Tour/Filter";
import Search from "@/app/components/Tour/Search";
import TourList from "@/app/components/Tour/TourList";
import Container from "@/app/components/extra/Container";

export default function Tour() {
  return (
    <>
      <div className="container border-2 ">
        <Nav />
        <Container>
          <div id="main" className=" flex flex-col h-[calc(100vh-84px)]">
            <div className=" flex justify-end">
              <Search />
            </div>
            <div className=" bg-green-400 flex h-full gap-4">
              <div className=" bg-pink-200 hidden lg:flex w-[300px]">
                <Filter />
              </div>
              <div className="  flex-grow">
                <TourList />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
