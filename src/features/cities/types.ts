import { City, CityCoord, Status } from "types";

export interface CitiesSlice {
  status: Status;
  list: City[];
  error: string | null;
}

export interface LoadCity extends CityCoord {
  name: string;
  country: string;
}
