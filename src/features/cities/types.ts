import { City, CityCoord, Status } from "types";

export interface CitiesSlice {
  status: Status;
  list: City[];
  error: string | null;
}

export interface CityDataProps {
  current: {
    id: number;
    dt: number;

    humidity: number;
    pressure: number;
    feels_like: number;
    temp: number;
    wind_speed: number;
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
  };
  daily: {
    dt: number;
    temp: {
      day: number;
    };
  }[];

  name: string;
  country: string;

  forecast: {
    dt: number;
    temp: number;
  }[];
}

export interface LoadCity extends CityCoord {
  name: string;
  country: string;
}
