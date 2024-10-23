import axios from "axios";
import API from "./API";

export const getAuthenticatedUserData = async function (token) {
  let userData;
  try {
    const res = await axios.get(`http://localhost:4000/api/v1/getMe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    userData = res.data?.data?.user;
    return userData;
  } catch (error) {
    throw error.response;
  }
};

export const credentialsLoginHandler = async function (
  emailOrUsername,
  password
) {
  let user;
  try {
    const res = await API.post(`api/v1/login`, {
      emailOrUsername,
      password,
    });

    const resUser = await getAuthenticatedUserData(res.data.data.token);
    user = resUser;
    user.accessToken = res.data.data.token;
  } catch (error) {
    throw error.response.data;
  }
  // it will return the loggedIn userData
  return user;
};

export const credentialsRegisterHandler = async function () {
  const res = await API.post(`api/v1/`);
};

export const googleSignInHandler = async function (userInfo) {
  let user;
  try {
    const res = await API.post(`api/v1/sign-in-with-google`, {
      ...userInfo,
    });

    console.log(res.data);
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }

  // returning user with the accessToken to add it to the session
  return user;
};
