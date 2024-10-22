"use client";
import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Button,
} from "@material-tailwind/react";

import { filterPrice, filterRatings } from "@/app/constant/constant";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import filterManager from "@/app/util/FilterManager";

export default function Filter({ filteredEntry }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handlePriceFilter = function (selectedValue) {
    const modifiedParams = filterManager(searchParams, "Price", selectedValue);
    replace(`${pathName}?${modifiedParams?.toString()}`);
  };

  const handleRatingsFilter = function (selectedValue) {
    const modifiedParams = filterManager(
      searchParams,
      "Ratings",
      selectedValue
    );
    replace(`${pathName}?${modifiedParams?.toString()}`);
  };

  return (
    <>
      <div className=" w-full pt-4 flex flex-col gap-3">
        <Card>
          <Typography
            className="text-textBlack font-medium  border-b-2 p-4 py-2 "
            variant="h4"
          >
            Price
          </Typography>
          <List>
            {filterPrice.map((item) => (
              <ListItem key={item.id} className="p-0">
                <label
                  htmlFor={`vertical-list-${item.id}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="price-filter"
                      id={`vertical-list-${item.id}`}
                      ripple={false}
                      value={item.value}
                      checked={filteredEntry?.includes(item.value)}
                      onChange={(e) => handlePriceFilter(e.target.value)}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-[#000000cb]"
                  >
                    {item.price}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card>
          <Typography
            className="text-textBlack font-medium  border-b-2 p-4 py-2 "
            variant="h4"
          >
            Ratings
          </Typography>
          <List>
            {filterRatings.map((item) => (
              <ListItem key={item.id} className="p-0">
                <label
                  htmlFor={`vertical-list-${item.id}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="ratings-filter"
                      id={`vertical-list-${item.id}`}
                      ripple={false}
                      value={item.value}
                      checked={filteredEntry?.includes(item.value)}
                      onChange={(e) => handleRatingsFilter(e.target.value)}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-[#000000cb]"
                  >
                    {item.rate}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        </Card>

        <div>
          <Button
            className=" flex items-center lg:hidden px-4 gap-1 "
            size="md"
            variant="gradient"
          >
            Clear Filter
          </Button>
        </div>
      </div>
    </>
  );
}
