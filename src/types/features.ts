export type Status = "idle" | "rejected" | "loading" | "received";

export interface UpdateCityNotationProps {
  temp_notation: "celsius" | "fahrenheit";
  id: number | null;
}

export interface LoadCityProps {
  name: string;
  country: string;
  strLat: string;
  strLon: string;
}

export interface LoadCityNamesProps {
  id: number | null;
  name: string;
  coord: {
    lat: number | null;
    lon: number | null;
  };
  country: string;
}
