import axios from "axios";

export const api = axios.create({
  baseURL: "https://routes.googleapis.com/directions/v2:computeRoutes",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-FieldMask": "routes.legs",
  },
});