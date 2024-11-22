import { Router } from "express";
import { RideController } from "../controllers/RideController";

const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", rideController.create);
rideRoutes.patch("/confirm", rideController.update);

export { rideRoutes };