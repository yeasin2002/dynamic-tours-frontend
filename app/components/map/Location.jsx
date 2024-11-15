import { Typography } from "@/app/ui/materialExport";
import dynamic from "next/dynamic";
const TourMap = dynamic(() => import("@/app/components/Map/tour-map"), {
  ssr: false,
});

export default function Location({ places }) {
  console.log(places);
  return (
    <>
      <div className="py-6">
        <Typography variant="h3" className="tracking-wide">
          Places were gonna explore
        </Typography>
      </div>
      <div>
        <TourMap locations={places} />
      </div>
    </>
  );
}
