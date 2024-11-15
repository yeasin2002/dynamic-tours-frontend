import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@components/Tour/tour-main"), {
  ssr: false,
});
import { Suspense } from "react";
// import TourMain from "../Tour/tour-main";
export default function ManageTour() {
  return (
    <>
      <Suspense>
        <TourMain pageType={"admin"} />
      </Suspense>
    </>
  );
}
