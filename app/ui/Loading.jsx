import { Spinner } from "@material-tailwind/react";
export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center p-4 h-full">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    </>
  );
}
