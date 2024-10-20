import { Typography } from "@/app/ui/materialExport";
import TourMap from "./TourMap";
export default function Location({ places }) {
  const locations = [
    {
      lat: 37.7749,
      lng: -122.4194,
      name: "San Francisco",
      imgUrl: "url-to-image1",
      address: "Location 1 Address",
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      name: "Los Angeles",
      imgUrl: "url-to-image2",
      address: "Location 2 Address",
    },
    {
      lat: 36.1699,
      lng: -115.1398,
      name: "Las Vegas",
      imgUrl: "url-to-image3",
      address: "Location 3 Address",
    },
  ];

  return (
    <>
      <div className="py-6">
        <Typography variant="h3" className="tracking-wide">
          Places were gonna explore
        </Typography>
      </div>
      <div>
        <TourMap locations={locations} />
      </div>
    </>
  );
}
