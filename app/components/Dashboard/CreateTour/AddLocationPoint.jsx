"use client";
import TourMap from "../../Map/TourMap";
import SelectedLocation from "../../Map/SelectedLocation";
import { useMapContext } from "./MapContext";

export default function AddLocationPoint() {
  const locations = [{ coordinates: [89.251608, 24.003675] }];
  const { state, dispatch } = useMapContext();
  return (
    <>
      <div>
        <TourMap locations={locations} pageType={"admin"} />
      </div>
    </>
  );
}
