"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { HiLocationMarker } from "react-icons";
import markerIcon from "@/public/marker.png";
console.log(markerIcon);

const customIcon = new L.Icon({
  iconUrl: markerIcon?.src, // Replace with your icon path
  iconSize: [46, 46], // Size of the icon
  iconAnchor: [23, 46], // Anchor the icon at its bottom center
  popupAnchor: [0, -46], // Adjust popup position if using popups
});

const TourMap = ({ locations }) => {
  const defaultPosition = [locations[0].lat, locations[0].lng];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3>{location.name}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TourMap;
