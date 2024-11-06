"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/public/marker.png";
import RoutingMachine from "./RoutingMachine";
import SearchControll from "./SearchControll";
import { OpenStreetMapProvider } from "leaflet-geosearch";
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

  // the main state of location data
  const [selectLocation, setSelectedLocation] = useState(
    pageType === "admin" ? [] : locations
  );
  // the position of the marker and popup
  const [position, setPosition] = useState(null);

  // address of selected point getting by reverseGeoCoding
  const [address, setAddress] = useState("");

  const markerRef = useRef(null);

  const reverseGeoCode = async function (lat, lng) {
    const provider = new OpenStreetMapProvider();
    const result = await provider.search({ query: `${lat},${lng}` });
    console.log(result);
    if (result && result.length > 0) {
      setAddress(result[0].label);
    } else {
      setAddress("no address found");
    }
  };

  const LocationMarkerGeoCoded = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        reverseGeoCode(lat, lng);
      },
    });
    useEffect(() => {
      if (markerRef.current) {
        markerRef.current.togglePopup();
      }
    }, [position]);

    const cancelMarker = function (e) {
      e.stopPropagation();
      setPosition(null);
    };

    const addLocationHandler = function (e) {
      // stopping from the event to propagate
      e.stopPropagation();
      // creating the location data format
      const locationData = {
        coordinates: [position[1], position[0]],
        address: address,
        dayNumber: 0,
        image: [],
      };
      setSelectedLocation((prev) => [...prev, locationData]);
      setPosition(null);
    };

    return position ? (
      <Marker ref={markerRef} icon={customIcon} position={position}>
        <Popup minWidth={300} className="p-0">
          <AddLocationDetails
            address={address}
            addLocation={addLocationHandler}
            cancelMaker={cancelMarker}
          />
        </Popup>
      </Marker>
    ) : null;
  };

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
