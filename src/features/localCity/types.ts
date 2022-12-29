import { City, Status } from "types";

export interface CitySlice extends City {
  status:
    | "idle"
    | "rejected"
    | "loading"
    | "received"
    | "received-name-by-ip"
    | "received-name-by-nav"
    | "canceled";
  error: string | null;
}

export interface FetchCityNameByIp {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface ShowPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface UseLocalProps {
  localCity: CitySlice;
  deleteHandler: () => void;
  updateCityNotationHandler: (id: number | null) => void;
}
