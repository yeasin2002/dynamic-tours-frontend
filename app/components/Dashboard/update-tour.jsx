"use client";
import CreateTour from "@/app/components/Dashboard/create-tour";
import { MapContextProvider } from "@/app/components/Dashboard/map-context";

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
