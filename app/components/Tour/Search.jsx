"use client";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = function () {
    console.log(searchInput);
  };
  return (
    <>
      <div className=" p-2 w-full">
        <div className="relative flex w-full max-w-[30rem] float-end">
          <Input
            type="text"
            label="Search here"
            className="pr-20"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={submitHandler}
            size="sm"
            variant="gradient"
            className="!absolute right-1 top-1 rounded bg-transparent"
          >
            <IoSearch className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
