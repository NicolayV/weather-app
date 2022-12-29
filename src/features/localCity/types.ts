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

export interface LocalCityProps {
  city: {
    id: number;
    name: string;
    country: string;
  };
  list: {
    dt: number;
    main: {
      feels_like: number;
      temp: number;
      humidity: number;
      pressure: number;
    };
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
    wind: {
      speed: number;
    };
  }[];
}

export interface LocalCitySliceProps extends City {
  status: Status;
  current_location: string;
  error: string | null;
}

export interface UseLocalProps {
  localCity: CitySlice;
  deleteHandler: () => void;
  updateCityNotationHandler: (id: number | null) => void;
}
