"use client";
import CreateTour from "@/app/components/Dashboard/CreateTour/CreateTour";
import { MapContextProvider } from "@/app/components/Dashboard/CreateTour/MapContext";

export default function UpdateTour({ tourData }) {
  return (
    <>
      <div>
        <MapContextProvider>
          <CreateTour tourData={tourData} actionType={"update"} />
        </MapContextProvider>
      </div>
    </>
  );
}
