"use client";
import Nav from "@/app/components/landingPage/Nav";
import Filter from "@/app/(routes)/tour/Filter";
import Search from "@/app/(routes)/tour/Search";
import TourList from "@/app/(routes)/tour/TourList";
import Container from "@/app/components/extra/Container";
import { getFilteredData } from "@/app/libs/getFilteredTour";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { act, useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";
import { Button, Select, Option, Chip } from "@material-tailwind/react";

import FilterTour from "@/app/util/FilterTour";

export default function Tour() {
  const [tourData, setTourData] = useState(null);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const filterTour = new FilterTour(searchParams);
  filterTour.init();
  const query = filterTour.getServerQuery();

  const filteredEntry = filterTour.getFilteredEntry();
  const activeFilter = filterTour.getActiveFilter();

  useEffect(() => {
    const getData = async () => {
      const data = query
        ? await getFilteredData(query)
        : await getFilteredData();

      console.log(data);
      if (data) setTourData(data);
    };
    getData();
  }, [query]);

  const activeFilterHandler = function (filteredBy) {
    if (!activeFilter) return;
    const params = new URLSearchParams(searchParams);
    params.delete(activeFilter[filteredBy]);
    replace(`${pathName}?${params?.toString()}`);
  };

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
              <div className="lg:flex hidden w-[300px] sticky px-2 top-0 overflow-auto h-screen ">
                <Filter filteredEntry={filteredEntry} />
              </div>
              <div className=" flex-grow ">
                <div className="  px-2.5 flex gap-4 items-center">
                  {Object.keys(activeFilter)?.map((item) => (
                    <Chip
                      value={`Filter : ${item}`}
                      key={item}
                      color="gray"
                      open={open}
                      className=" normal-case font-medium text-sm tracking-normal "
                      onClose={() => activeFilterHandler(item)}
                      variant="ghost"
                    />
                  ))}
                </div>
                {tourData && <TourList tourData={tourData} />}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
