import axios from "axios";
import { apiRequest } from "./apiClient";

export const getFilteredData = async function (query) {
  try {
    const tourData = await apiRequest(
      "get",
      `http://localhost:4000/api/v1/tour${query ? `?${query}` : ""}`
    );
    return tourData?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
