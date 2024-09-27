"use client";
import Nav from "@/app/components/Nav";
import Filter from "@/app/components/Tour/Filter";
import Search from "@/app/components/Tour/Search";
import TourList from "@/app/components/Tour/TourList";
import Container from "@/app/components/extra/Container";
import { getFilteredData } from "@/app/libs/getFilteredTour";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tour() {
  const [tourData, setTourData] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.split(" ")?.join("+");

  useEffect(() => {
    const getData = async () => {
      const data = query
        ? await getFilteredData(`query=${query}`)
        : await getFilteredData();
      if (data) setTourData(data);
      console.log(data);
    };
    getData();
  }, [query]);
  return (
    <>
      <div>
        <Nav />
        <Container>
          <div id="main" className=" flex flex-col">
            <div className=" flex justify-end">
              <Search />
            </div>
            <div className=" flex bg-green-200 justify-between gap-4">
              <div className=" bg-red-300 lg:flex hidden w-[320px] sticky top-0 h-screen">
                <Filter />
              </div>
              <div className=" flex-grow p-2">
                <TourList tourData={tourData && tourData} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
