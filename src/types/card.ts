import { ReactNode } from "react";

export interface CurrentCityHandlerProps {
  lat: number | null;
  lon: number | null;
  name: string;
  country: string;
}

export interface CoordProps {
  lat: number | null;
  lon: number | null;
}

export interface CityProps {
  id: number | null;
  name: string;
  country: string;
  dt: number | null;
  weather_icon: string | null;
  weather_description: string;

  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
  forecast: {
    dt: number;
    temp: number;
  }[];
}

export interface CardProps extends CityProps {
  deleteHandler: (id: number | null) => void;
  updateCityNotationHandler: (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => void;
}

export interface ChartLineProps {
  temp: number | null;
  forecast: {
    dt: number;
    temp: number;
  }[];
}

export interface CardLoadingProps extends Pick<CardProps, "temp"> {
  children: ReactNode;
}
