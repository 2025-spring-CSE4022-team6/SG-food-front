import axios from "axios";

export const instance = axios.create({
  //baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
  baseURL: "https://13.124.170.215:8081",
  timeout : 5000,
});
