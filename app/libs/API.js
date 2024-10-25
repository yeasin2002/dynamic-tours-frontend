"use server";
import axios from "axios";
import { auth } from "@/auth";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

API.interceptors.request.use(
  async (config) => {
    const session = await auth();
    const token = session?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
