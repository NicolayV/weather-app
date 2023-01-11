import * as API from "api";
export type Api = typeof API;

export type Extra = {
  client: <T>(props: string) => Promise<T>;
  api: typeof API;
};
export type Languages = "EN" | "UA" | "RU";
export type Status = "idle" | "rejected" | "loading" | "received";

export interface City {
  id: string;
  name: string;
  country: string;
  lat: string;
  lon: string;

  dt: string;
  weather_icon: string;
  weather_description: string;

  temp: string;
  temp_unit: "celsius" | "fahrenheit";
  feels_like: string;

  wind: string;
  humidity: string;
  pressure: string;

  forecast: {
    dt: string;
    temp: string;
  }[];
}

// components
export interface WeatherCard extends City {
  deleteCardHandler: (id: string) => void;
  toggleTempUnitHandler: (id: string) => void;
}
export interface SearchListItem
  extends Pick<
    City,
    "id" | "name" | "country" | "lat" | "lon" | "weather_icon"
  > {}

// features
export interface FetchCity {
  city: string;
  country: string;
  latitude: number;
  longitude: number;

  daily: {
    dt: number;
    temp: {
      day: number;
    };
  }[];

  current: {
    dt: number;
    weather: {
      icon: string;
      main: string;
    }[];
    temp: number;
    feels_like: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
  };
}
