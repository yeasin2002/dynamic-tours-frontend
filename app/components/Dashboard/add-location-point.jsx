"use client";
import dynamic from "next/dynamic";
const TourMap = dynamic(() => import("@components/Tour/tour-main"), {
  ssr: false,
});
import { useMapContext } from "@/app/components/Dashboard/map-context";
import { useEffect } from "react";

export default function AddLocationPoint({ registerTour, setValue }) {
  const locations = [{ coordinates: [89.251608, 24.003675] }];
  const { state } = useMapContext();
  useEffect(() => {
    console.log("chenges");
    setValue("locations", state?.selectedLocation);
  }, [state?.selectedLocation]);

  registerTour("locations", {
    validate: (value) =>
      (value && value.length > 0) ||
      "Please select at least one location on the map",
  });

  return (
    <>
      <div>
        <TourMap locations={locations} pageType={"admin"} />
      </div>
    </>
  );
}
