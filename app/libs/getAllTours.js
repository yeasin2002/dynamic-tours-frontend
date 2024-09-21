import axios from "axios";

export const getAllTours = async function () {
  try {
    const tourData = await axios.get(`http://localhost:4000/api/v1/tour`);
    return tourData.data?.data;
  } catch (error) {
    console.log(error);
  }
};
