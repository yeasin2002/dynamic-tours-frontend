"use client";
import Nav from "@/app/components/Nav";
import Filter from "@/app/components/Tour/Filter";
import Search from "@/app/components/Tour/Search";
import TourList from "@/app/components/Tour/TourList";
import Container from "@/app/components/extra/Container";
import { getFilteredData } from "@/app/libs/getFilteredTour";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";
import { Button, Select, Option } from "@material-tailwind/react";

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
            <div className=" flex justify-between items-center">
              <div className=" flex gap-3">
                <Button
                  className=" flex items-center gap-1 "
                  size="md"
                  variant="gradient"
                >
                  Filter
                  <HiFilter />
                </Button>

                <div>
                  <div className="flex flex-col gap-6">
                    <Select color="gray" label="Sort By" variant="outlined">
                      <Option value="rating">Top Rated</Option>
                      <Option>Starts Date</Option>
                      <Option>Newest</Option>
                      <Option>Most Reviewed</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <Search />
            </div>
            <div className=" flex justify-between gap-4">
              <div className="lg:flex hidden w-[290px] sticky top-0 h-screen">
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
