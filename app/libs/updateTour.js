"use server";

import axios from "axios";
import API from "./API";
export default async function updateTour(tourId, updateData) {
  console.log(tourId);
  try {
    const tourData = await API.patch(
      `http://localhost:4000/api/v1/tour/${tourId}`,
      updateData
    );
    return tourData.data?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
}
