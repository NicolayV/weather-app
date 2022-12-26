import { CityProps, CoordProps } from "types";

export type Status = "idle" | "rejected" | "loading" | "received";

export interface UpdateCityNotationProps {
  temp_notation: "celsius" | "fahrenheit";
  id: number | null;
}

export interface loadCityProps {
  name: string;
  country: string;
  strLat: string;
  strLon: string;
}
export interface loadCityNamesProps {
  id: number | null;
  name: string;
  coord: CoordProps;
  country: string;
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

export interface LocalCitySliceProps extends CityProps {
  status: Status;
  current_location: string;
  error: string | null;
}
