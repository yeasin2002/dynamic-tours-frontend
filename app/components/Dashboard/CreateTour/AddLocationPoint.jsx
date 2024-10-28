"use client";
import TourMap from "../../Map/TourMap";

export default function AddLocationPoint() {
  const locations = [{ coordinates: [89.251608, 24.003675] }];
  return (
    <>
      <div className=" bg-green-300">
        <TourMap locations={locations} pageType={"admin"} />
      </div>
    </>
  );
}
