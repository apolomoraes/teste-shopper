import { Request, Response } from "express";

type CreateRideBodyProps = {
  customer_id: string;
  origin: string;
  destination: string;
};

type UpdateRideBodyProps = {
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  driver: {
    id: number;
    name: string;
  };
  value: number;
};

class RideController {
  async create(req: Request<{}, {}, CreateRideBodyProps>, res: Response) {
    const { customer_id, origin, destination } = req.body;
  }

  async update(req: Request<{}, {}, UpdateRideBodyProps>, res: Response) {
    const { customer_id, origin, destination, distance, duration, driver, value } = req.body;
  }

  async show(req: Request, res: Response) {
    const { customer_id, driver_id } = req.query;
  }
}

export { RideController };