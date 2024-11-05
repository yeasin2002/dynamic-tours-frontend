"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { Button } from "@/app/ui/materialExport";
import AddLocationDetails from "./AddLocationDetails";

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

  const [selectLocation, setSelectedLocation] = useState(
    pageType === "admin" ? [] : locations
  );

  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const markerRef = useRef(null);

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

  const LocationMarkerGeoCoded = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        setSelectedLocation((prev) => [...prev, { coordinates: [lng, lat] }]);
        reverseGeoCode(lat, lng);
      },
    });
    useEffect(() => {
      if (markerRef.current) {
        markerRef.current.togglePopup();
      }
    }, [position]);

    const cancelMarker = function (e) {
      setSelectedLocation((prev) => {
        return prev?.slice(0, -1);
      });

      setPosition(
        selectLocation[selectLocation.length - 1]?.coordinates
          ? [
              selectLocation[selectLocation.length - 1]?.coordinates[1],
              selectLocation[selectLocation.length - 1]?.coordinates[0],
            ]
          : null
      );
      markerRef.current.closePopup();
      e.stopPropagation();
    };
    return position ? (
      <Marker ref={markerRef} icon={customIcon} position={position}>
        <Popup minWidth={300} className="p-0">
          <AddLocationDetails address={address} cancelMaker={cancelMarker} />
        </Popup>
      </Marker>
    ) : null;
  };
  console.log(selectLocation, "location");
  console.log(position, "position");

  return (
    <MapContainer
      center={defaultPosition}
      zoom={14}
      maxZoom={18}
      minZoom={8}
      style={{ height: "550px", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectLocation &&
        selectLocation?.map((item, index) => (
          <Marker
            key={index}
            position={[item?.coordinates[1], item?.coordinates[0]]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{item?.address}</h3>
              </div>
            </Popup>
          </Marker>
        ))}

      <RoutingMachine locations={selectLocation} />
      {pageType === "admin" && <SearchControll />}
      {pageType === "admin" && <LocationMarkerGeoCoded />}
    </MapContainer>
  );
};

export default TourMap;
