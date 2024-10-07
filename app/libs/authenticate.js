import axios from "axios";

export const loginHandler = async function (emailOrUsername, password) {
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

export const register = function () {};

export const logout = function () {};
