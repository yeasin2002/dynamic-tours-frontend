import { apiRequest } from "./apiClient";

export const getTour = async function (tourId) {
  try {
    // const tourData = await API.get(`api/v1/tour/${tourId}`);
    const tourData = await apiRequest("get", `api/v1/tour/${tourId}`);

    return tourData?.data;
  } catch (error) {
    console.log(error);
  }
};
