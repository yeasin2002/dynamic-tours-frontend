"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/public/marker.png";
import RoutingMachine from "./RoutingMachine";
import SearchControll from "./SearchControll";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const customIcon = new L.Icon({
  iconUrl: markerIcon?.src, // Replace with your icon path
  iconSize: [46, 46], // Size of the icon
  iconAnchor: [20, 35], // Anchor the icon at its bottom center
  popupAnchor: [0, -46], // Adjust popup position if using popups
});

const TourMap = ({ locations, pageType }) => {
  const defaultPosition = [
    locations[0].coordinates[1],
    locations[0].coordinates[0],
  ];

  const [position, setPosition] = useState(defaultPosition);
  const [address, setAddress] = useState("");

  const reverseGeoCode = async function (lat, lng) {
    const provider = new OpenStreetMapProvider();
    const result = await provider.search({ query: `${lat},${lng}` });
    if (result && result.length > 0) {
      setAddress(result[0].raw.display_name);
      console.log(result);
    } else {
      setAddress("no address found");
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        reverseGeoCode(lat, lng);
      },
    });

    return position ? (
      <Marker icon={customIcon} position={position}>
        <Popup>{address || "Searching adress..."}</Popup>
      </Marker>
    ) : null;
  };

  return (
    <MapContainer
      center={defaultPosition}
      zoom={14}
      maxZoom={18}
      minZoom={8}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((item, index) => (
        <Marker
          key={index}
          position={[item?.coordinates[1], item?.coordinates[0]]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3>{item?.description}</h3>
            </div>
          </Popup>
        </Marker>
      ))}

      <RoutingMachine locations={locations} />
      {pageType === "admin" && <SearchControll />}
      {pageType === "admin" && <LocationMarker />}
    </MapContainer>
  );
};

export default TourMap;
