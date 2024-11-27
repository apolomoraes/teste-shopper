export type Driver = {
  id: number;
  name: string;
}

export type Ride = {
  id: number;
  date: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  driver: Driver;
  value: number;
}

export type ListTrips = {
  customer_id: string;
  rides: Ride[];
}
