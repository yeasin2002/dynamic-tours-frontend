import axios from "axios";

export const getFilteredData = async function (query) {
  console.log(query);

  try {
    const tourData = await axios.get(
      `http://localhost:4000/api/v1/tour${query ? `?${query}` : ""}`
    );
    return tourData.data?.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
