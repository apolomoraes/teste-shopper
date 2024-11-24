import dotenv from "dotenv";
import { api } from "./api";

dotenv.config();

const key = process.env.GOOGLE_API_KEY;

export const fetchRouteInfo = async (origin: string, destination: string) => {
  if (!key) {
    return
  }

  try {
    const response = await api.post(`?key=${key}`, {
      origin:
        { address: origin },
      destination:
        { address: destination },
      travelMode: "DRIVE",
    });

    const legs = response.data.routes[0].legs

    return { legs };
  } catch (error: any) {
    console.error(error.response?.data);
  }
};