import { Router } from "express";
import { rideRoutes } from "./ride.routes";

const routes = Router();

routes.use("/ride", rideRoutes);

export { routes };