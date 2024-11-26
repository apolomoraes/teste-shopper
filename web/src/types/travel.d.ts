export type Review = {
  rating: number;
  comment: string;
};

export type Option = {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: Review;
  value: number;
};

export type TravelData = {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  duration: string;
  options: Option[];
  routeResponse: object | null;
};