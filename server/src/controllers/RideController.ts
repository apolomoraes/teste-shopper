import { Request, Response } from "express";
import { fetchRouteInfo } from "../services/fetchRouteInfo";
import { prisma } from "../lib/prisma";

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

    if (!customer_id || !origin || !destination) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "All fields are required",
      });
    }

    if (origin === destination) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "Origin and destination must be different",
      });
    }

    const { legs } = await fetchRouteInfo(origin, destination);

    const distanceKm = parseInt((legs[0].distanceMeters / 1000).toFixed(0));
    const duration = legs[0].duration

    const drivers = await prisma.driver.findMany({
      where: {
        minimumKm: {
          lte: distanceKm,
        },
      },
      orderBy: {
        ratePerKm: 'asc',
      },
    });

    const driverOptions = drivers.map(driver => {
      const totalTripPrice = parseFloat(driver.ratePerKm.toString()) * distanceKm;
      return {
        id: driver.id,
        name: driver.name,
        description: driver.description,
        vehicle: driver.car,
        review: {
          rating: driver.rating,
          comment: driver.ratingDescription,
        },
        value: parseFloat(totalTripPrice.toFixed(2)),
      };
    })

    return res.status(200).json({
      origin: {
        latitude: legs[0].startLocation.latLng.latitude,
        longitude: legs[0].startLocation.latLng.longitude,
      },
      destination: {
        latitude: legs[0].endLocation.latLng.latitude,
        longitude: legs[0].endLocation.latLng.longitude,
      },
      distance: distanceKm,
      duration,
      options: driverOptions,
      routeResponse: { legs },
    });
  }

  async update(req: Request<{}, {}, UpdateRideBodyProps>, res: Response) {
    const { customer_id, origin, destination, distance, duration, driver, value } = req.body;

    if (!customer_id || !origin || !duration || !distance || !destination || !driver || !value) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "All fields are required",
      });
    }

    if (origin.trim().toLowerCase() === destination.trim().toLowerCase()) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "Origin and destination must be different",
      });
    }

    const seachForDrive = await prisma.driver.findFirst({
      where: {
        AND: [
          { id: driver.id },
          { name: driver.name },
        ],
      },
    });

    if (!seachForDrive) {
      return res.status(404).json({
        error_code: "DRIVER_NOT_FOUND",
        error_description: "Driver not found",
      });
    }

    if (distance < seachForDrive.minimumKm) {
      return res.status(406).json({
        error_code: "INVALID_DISTANCE",
        error_description: "The distance is invalid for the selected driver",
      });
    }

    const trip = await prisma.trip.create({
      data: {
        customerId: customer_id,
        origin: origin,
        destination: destination,
        distance: distance,
        duration: duration,
        driverId: driver.id,
        driverName: driver.name,
        value: value,
      }
    })

    return res.status(200).json({
      success: true
    })
  }

  async show(req: Request, res: Response) {
    const { customer_id } = req.params;
    const { driver_id } = req.query;

    if (driver_id) {
      const driverId = parseInt(driver_id as string, 10);

      const driverExists = await prisma.driver.findUnique({
        where: { id: driverId },
      });

      if (!driverExists) {
        return res.status(400).json({
          error_code: "INVALID_DRIVER",
          error_description: "Driver ID is invalid",
        });
      }
    }

    const whereClause: any = { customerId: customer_id };

    if (driver_id) {
      const driverId = parseInt(driver_id as string, 10);

      whereClause.driverId = driverId;
    }

    const trips = await prisma.trip.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    if (trips.length === 0) {
      return res.status(404).json({
        error_code: "NO_RIDES_FOUND",
        error_description: "No rides found for this user",
      });
    }

    const rides = trips.map((trip) => ({
      id: trip.id,
      date: trip.createdAt,
      origin: trip.origin,
      destination: trip.destination,
      distance: trip.distance,
      duration: trip.duration,
      driver: {
        id: trip.driverId,
        name: trip.driverName,
      },
      value: trip.value,
    }));


    return res.status(200).json({
      customer_id,
      rides,
    });
  }
}
export { RideController };