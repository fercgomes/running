export type SportsEvent = {
  name: string;
  type: "running" | "cycling";
  confirmed_date: Date;
  surface_type: "road_race";
  city_name: string;
  state: string;
  country: string;
  distances: number[];
};
