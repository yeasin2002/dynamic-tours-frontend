import axios from "axios";
import jwt from "jsonwebtoken";

export const credentialsLoginHandler = async function (
  emailOrUsername,
  password
) {
  let user;
  try {
    const res = await axios.post(`http://localhost:4000/api/v1/login`, {
      emailOrUsername,
      password,
    });
    user = res.data;
  } catch (err) {
    throw new Error("User not found from authticate");
  }
  return user;
};

export const getAuthenticatedUserData = async function (token) {
  let userData;
  console.log(token, "token");
  const decodedData = await jwt.decode(token);
  try {
    const res = await axios.get(
      `http://localhost:4000/api/v1/user/${decodedData?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    userData = res.data?.data?.user;
  } catch (err) {
    throw new Error("User not found from authticate");
  }

  return userData;
};

export const credentialsRegisterHandler = function () {};

export const logout = function () {};
