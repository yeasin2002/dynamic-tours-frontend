import { apiRequest } from "./apiClient";

export const getAuthenticatedUserData = async function (token) {
  let userData;
  try {
    const res = await apiRequest(
      "get",
      "/api/v1/getMe",
      {},
      { Authorization: `Bearer ${token}` }
    );
    userData = res?.data?.user;
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
    const res = await apiRequest("post", "/api/v1/login", {
      emailOrUsername,
      password,
    });

    const token = res?.data?.token;
    const resUser = await getAuthenticatedUserData(token);
    user = resUser;
    user.accessToken = token;
  } catch (error) {
    throw error.response.data;
  }
  // it will return the loggedIn userData
  return user;
};

export const credentialsRegisterHandler = async function (inputData) {
  let resData;
  const formData = new FormData();
  formData.set("fullName", inputData.fullname);
  formData.set("email", inputData.email);
  formData.set("userName", inputData.username);
  formData.set("password", inputData.password);
  formData.set("confirmPassword", inputData.confirmPassword);

  try {
    const res = await apiRequest("post", "/api/v1/signup", formData);
    resData = res.data;
  } catch (error) {
    throw error.response?.data;
  }
  return resData;
};

export const googleSignInHandler = async function (userInfo) {
  let user;
  try {
    const res = await apiRequest("post", `/api/v1/sign-in-with-google`, {
      ...userInfo,
    });

    const token = res?.data?.token;
    // if it's create new user we will return the user info
    if (res?.data?.user) {
      user = res.data?.user;
      user.accessToken = token;
    } else {
      // else we will get the user by sending the access token then return the user
      const authUser = await getAuthenticatedUserData(token);
      console.log(authUser, "user");
      user = authUser;
      user.accessToken = token;
    }
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
  // returning user with the accessToken to add it to the session
  return user;
};
