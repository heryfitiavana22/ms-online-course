import axios from "axios";
// import { getCookie, setCookie } from 'cookies-next';
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get("ms_oc_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
export * from "./courses.repository";
export * from "./users.repository";
export * from "./student.repository";
