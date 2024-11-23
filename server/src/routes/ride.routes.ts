import { Router } from "express";
import { RideController } from "../controllers/RideController";

const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", rideController.create.bind(RideController));
rideRoutes.patch("/confirm", rideController.update.bind(RideController));
rideRoutes.get("/:customer_id", rideController.show.bind(RideController));

export { rideRoutes };