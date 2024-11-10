import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import SelectedLocation from "./SelectedLocation";
import { createPortal } from "react-dom";

function CustomButtonControl({ pageType, places }) {
  const map = useMap();
  const controlRef = useRef();

  useEffect(() => {
    // Create a new control
    const controlDiv = L.DomUtil.create("div", "leaflet-bottom leaflet-left");
    const customControl = L.control({ position: "bottomleft" });

    // Define what the control should do when added to the map
    customControl.onAdd = () => {
      controlRef.current = controlDiv;
      return controlDiv;
    };

    // Add the control to the map
    customControl.addTo(map);

    // Cleanup when the component is unmounted
    return () => {
      customControl.remove();
    };
  }, [map, pageType]);

  console.log(controlRef);
  return (
    controlRef?.current &&
    createPortal(
      <SelectedLocation pageType={pageType} places={places} />,
      controlRef.current
    )
  );
}

export default CustomButtonControl;
