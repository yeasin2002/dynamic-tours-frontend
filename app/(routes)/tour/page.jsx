"use client";
import Nav from "@/app/components/header/Nav";
import Filter from "@/app/(routes)/tour/Filter";
import Search from "@/app/(routes)/tour/Search";
import TourList from "@/app/(routes)/tour/TourList";
import Container from "@/app/components/extra/Container";
import { getFilteredData } from "@/app/libs/getFilteredTour";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";
import {
  Button,
  Select,
  Option,
  Chip,
  Typography,
  Card,
} from "@material-tailwind/react";
import { filterSort } from "@/app/constant/constant";
import FilterTour from "@/app/util/FilterTour";
import filterManager from "@/app/util/FilterManager";
import Loading from "@/app/ui/Loading";
import NotFound from "./NotFound";

export default function Tour() {
  const [tourData, setTourData] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      const data = query
        ? await getFilteredData(query)
        : await getFilteredData();

      if (data) {
        setTourData(data);
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  const activeFilterHandler = function (filteredBy) {
    if (!activeFilter) return;
    const params = new URLSearchParams(searchParams);
    params.delete(activeFilter[filteredBy]);
    replace(`${pathName}?${params?.toString()}`);
    setSelectedSort(null);
  };

  const sortHandler = function (selectedValue) {
    const modifiedParams = filterManager(searchParams, "Sort", selectedValue);
    replace(`${pathName}?${modifiedParams?.toString()}`);
    setSelectedSort(selectedValue);
  };

  console.log(filteredEntry);
  return (
    <>
      <div>
        <Nav />
        <Container>
          <div id="main" className=" flex flex-col">
            <div className=" flex justify-between items-center">
              <div className=" hidden  md:flex gap-3 ">
                <Button
                  className=" flex items-center px-4 gap-1 "
                  size="md"
                  variant="gradient"
                >
                  Filter
                  <HiFilter />
                </Button>

                <div className="  md:flex">
                  <div className="flex flex-col gap-6">
                    <Select
                      value={selectedSort}
                      onChange={(value) => sortHandler(value)}
                      color="gray"
                      label="Sort By"
                      variant="outlined"
                    >
                      {filterSort?.map((item) => (
                        <Option key={item.id} value={item.value}>
                          {item.title}
                        </Option>
                      ))}
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
                <div className=" hidden md:flex px-2.5  gap-4 items-center">
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

                {tourData?.total > 0 && !loading && (
                  <TourList tourData={tourData} />
                )}
                {tourData?.total < 1 && !loading && <NotFound />}
                {loading && (
                  <Card className="h-[400px]">
                    <Loading />
                  </Card>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
