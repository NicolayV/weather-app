import { City, Status } from "types";

export interface LocalCitySlice extends City {
  status: Status | "canceled";
  error: string | null;
}

export interface CityCoord extends Pick<City, "lat" | "lon"> {}

export interface UseLocal {
  localCity: LocalCitySlice;
  deleteCardHandler: () => void;
  toggleTempUnitHandler: (id: string) => void;
}

export interface IShowPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}
