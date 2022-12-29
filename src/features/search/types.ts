import { City, LoadCityNames, Status } from "types";

export interface FetchCitiesNames {
  list: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    sys: {
      country: string;
    };
  }[];
}

export interface SearchSlice {
  status: Status;
  list: LoadCityNames[];
  error: string | null;
}

export interface UseSearch {
  list: LoadCityNames[];
  isOpen: boolean;
  inputFieldValue: (city: string) => void;
  currentCityHandler: ({
    lat,
    lon,
    name,
    country,
  }: Pick<City, "name" | "country" | "lat" | "lon">) => void;
}
