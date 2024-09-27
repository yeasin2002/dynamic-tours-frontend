"use client";
import { Input, Button } from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleSearch = function (query) {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    router.replace(`${pathName}?${params?.toString()}`);
  };

  return (
    <>
      <div className=" p-2 w-full">
        <div className="relative flex w-full max-w-[30rem] float-end">
          <Input
            type="text"
            label="Search here"
            className="pr-20"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
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
