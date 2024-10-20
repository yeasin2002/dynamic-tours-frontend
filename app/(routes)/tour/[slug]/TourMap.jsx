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

// Custom marker icon (Leaflet default icon won't work out-of-the-box in React)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for the default marker icons not loading properly in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const TourMap = ({ locations }) => {
  // Default position for the map (center the view)
  const defaultPosition = [locations[0].lat, locations[0].lng];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      {/* Tile layer using OpenStreetMap */}
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Place Markers */}
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <div>
              <h3>{location.name}</h3>
              <img src={location.imgUrl} alt={location.name} width="100" />
              <p>{location.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Draw Polyline to connect the markers */}
      <Polyline
        positions={locations.map((loc) => [loc.lat, loc.lng])}
        color="blue"
      />
    </MapContainer>
  );
};

export default TourMap;
