export type SportsEvent = {
  name: string;
  type: "running" | "cycling";
  confirmed_date: string;
  surface_type: "road_race";
  city_name: string;
  state: string;
  country: string;
  distances: number[];
  search_lat: number;
  search_long: number;
  distance?: number;
  event_url: string;
};

export type Pace = {
  system: "metric";
  minutes: number;
  seconds: number;
};

export type Speed = {
  unit: "km/h";
  value: number;
};
