import dotenv from "dotenv";
import { AppError } from "../utils/AppError";
import { api } from "./api";

dotenv.config();

const key = process.env.GOOGLE_MAPS_API_KEY;

export const getTravelDuration = async (origin: string, destination: string) => {
  if (!key) {
    throw new AppError("API Key not found");
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
    throw new AppError("Unable to obtain information");
  }
};