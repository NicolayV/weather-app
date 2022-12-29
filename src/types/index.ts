import { Axios } from "axios";
import * as API from "config";

export type Extra = {
  client: Axios;
  api: typeof API;
};

export type Languages = "EN" | "UA" | "RU";

export type Status = "idle" | "rejected" | "loading" | "received";

export type CityNotation = "celsius" | "fahrenheit";

export interface CityCoord {
  lat: number | null;
  lon: number | null;
}
export interface Forecast {
  dt: number;
  temp: number;
}

export interface City extends CityCoord {
  id: number | null;
  name: string;
  country: string;
  dt: number | null;
  weather_icon: string;
  weather_description: string;
  temp: number | null;
  temp_notation: CityNotation;
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
  forecast: Forecast[];
}

export interface LoadCityNames {
  id: number | null;
  name: string;
  country: string;
  coord: CityCoord;
}

export interface FetchCityNameByCoord {
  city: LoadCityNames;
}

export interface FetchCityByCoord {
  city: string;
  current: {
    dt: number;
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
    temp: number;
    feels_like: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
  };
  daily: {
    dt: number;
    temp: {
      day: number;
    };
  }[];
}

export interface CardProps extends City {
  deleteHandler: (id: number | null) => void;
  updateCityNotationHandler: (id: number | null) => void;
}
