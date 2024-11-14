import dynamic from "next/dynamic";
const TourMain = dynamic(() => import("@/app/components/Tour/TourMain"), {
  ssr: false,
});
export default function page() {
  return (
    <>
      <TourMain />
    </>
  );
}
