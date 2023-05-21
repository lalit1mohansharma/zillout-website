import axios from "axios";

const API = axios.create({
  baseURL: "https://zillout-backend.xyz/",
  headers: {
    "Content-Type": "application/json",
    "App-version": 42,
  },
  withCredentials: false,
});

export default API;
