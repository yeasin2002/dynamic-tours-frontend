"use client";
import {
  Radio,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import { filterPrice, filterLevel } from "@/app/constant/constant";
import { useState } from "react";

export default function Filter() {
  const [priceValue, setPriceValue] = useState(null);
  const priceHandler = function (selectedValue) {
    console.log(selectedValue);
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
                      name="vertical-list"
                      id={`vertical-list-${item.id}`}
                      ripple={false}
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
            Level
          </Typography>
          <List>
            {filterLevel.map((item) => (
              <ListItem key={item.id} className="p-0">
                <label
                  htmlFor={`vertical-${item.id}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id={`vertical-${item.id}`}
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    {item.level}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </>
  );
}
