import L from "leaflet";
import { useEffect } from "react";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function RoutingMachine({ locations }) {
  //   console.log(locations);
  const map = useMap();
  const waypoints = locations?.map((item) =>
    L.latLng(item.coordinates[1], item.coordinates[0])
  );
  let apiKey = `5b3ce3597851110001cf6248a100cc83ca544e04a7d2d35e3b9b3e54`;

  const router = L.Routing.osrmv1({
    serviceUrl: `https://api.openrouteservice.org/v2/directions/driving-car`, // OpenRouteService URL
    profile: "driving-car", // You can use different profiles (foot-walking, cycling, etc.)
    timeout: 30 * 1000, // Timeout for the request
    headers: {
      Authorization: apiKey,
    },
  });

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints,
      draggableWaypoints: false,
      createMarker: () => null,
      lineOptions: {
        styles: [
          { color: "rgba(41, 154, 250, 0.74)", weight: 8, opacity: 0.6 },
        ],
      },
      show: false,
      showAlternatives: false,
      addWaypoints: false,
      routeWhileDragging: false,
    }).addTo(map);

    routingControl.on("routesfound", () => {
      map.closePopup();
    });

    return () => map.removeControl(routingControl.getContainer());
  }, [map, locations]);
  return null;
}
