"use client";
import { Button } from "@/app/ui/materialExport";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <>
      <div>
        <h2>Something went wrong</h2>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
}
