import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@components/Tour/tour-main"), {
  ssr: false,
});
import { Suspense } from "react";
export default function page() {
  return (
    <>
      <Suspense>
        <TourMain />
      </Suspense>
    </>
  );
}
