"use client";
import CreateTour from "@components/Dashboard/create-tour";
import { MapContextProvider } from "@components/Dashboard/map-context";
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
