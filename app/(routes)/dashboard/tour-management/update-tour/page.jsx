"use client";
import CreateTour from "@/app/components/Dashboard/CreateTour/CreateTour";
import { MapContextProvider } from "@/app/components/Dashboard/CreateTour/MapContext";
export default function page({ pageType }) {
  return (
    <>
      <div>
        <MapContextProvider>
          <CreateTour actionType={"update"} />
        </MapContextProvider>
      </div>
    </>
  );
}
