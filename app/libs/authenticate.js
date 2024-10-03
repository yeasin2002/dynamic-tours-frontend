import axios from "axios";

export const loginHandler = async function (emailOrUsername, password) {
  console.log(password, email);
  try {
    const res = await axios.post(`http://localhost:4000/api/v1/login`, {
      emailOrUsername,
      password,
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const register = function () {};

export const logout = function () {};
