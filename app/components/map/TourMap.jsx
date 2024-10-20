"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/public/marker.png";
import RoutingMachine from "./RoutingMachine";

const customIcon = new L.Icon({
  iconUrl: markerIcon?.src, // Replace with your icon path
  iconSize: [46, 46], // Size of the icon
  iconAnchor: [20, 35], // Anchor the icon at its bottom center
  popupAnchor: [0, -46], // Adjust popup position if using popups
});

const TourMap = ({ locations }) => {
  const defaultPosition = [
    locations[0].coordinates[1],
    locations[0].coordinates[0],
  ];

  const [position, setPosition] = useState(defaultPosition);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      maxZoom={18}
      minZoom={7}
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
    </MapContainer>
  );
};

export default TourMap;
