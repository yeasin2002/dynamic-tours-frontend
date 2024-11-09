"use client";
import TourMap from "../../Map/TourMap";
import SelectedLocation from "../../Map/SelectedLocation";

export default function AddLocationPoint() {
  const locations = [{ coordinates: [89.251608, 24.003675] }];
  return (
    <>
      <div className=" relative">
        <div className=" absolute bottom-1 left-2 z-[999]">
          <SelectedLocation />
        </div>
        <TourMap locations={locations} pageType={"admin"} />
      </div>
    </>
  );
}
