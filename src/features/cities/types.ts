import { City, Status } from "types";

export interface CitiesSlice {
  status: Status;
  list: City[];
  error: string | null;
}

export interface LoadCity
  extends Pick<City, "name" | "country" | "lat" | "lon"> {}

export interface UseCities {
  listOfCities: City[];
  deleteCardHandler: (id: string) => void;
  toggleTempUnitHandler: (id: string) => void;
}
