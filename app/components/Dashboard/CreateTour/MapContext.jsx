"use client";
import { createContext, useContext } from "react";

export const MapContext = createContext();

export const useMapContext = function () {
  const context = useContext(MapContext);
  return context;
};

export const MapContextProvider = function ({ children }) {
  const data = { name: "sabbir hossain ", role: "admin" };
  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};
