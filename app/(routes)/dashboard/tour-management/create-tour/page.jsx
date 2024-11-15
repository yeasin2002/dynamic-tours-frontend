"use client";
import CreateTour from "@/app/components/Dashboard/CreateTour/create-tour";
import { MapContextProvider } from "@/app/components/Dashboard/CreateTour/map-context";
export default function page({ pageType }) {
  return (
    <>
      <div>
        <MapContextProvider>
          <CreateTour />
        </MapContextProvider>
      </div>
    </>
  );
}
