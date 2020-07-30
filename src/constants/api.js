import axios from "axios";

const baseURL = "https://bartokyo.yode.pro";

const API = axios.create({
  baseURL,
  timeout: 20000,
  // withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

API.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

export { API };

export const Endpoints = {
  TEMP: "/api_front",
};
