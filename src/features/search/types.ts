import { City, LoadCityNames, Status } from "types";

export interface FetchAutoCompeteCityName {
  data: {
    id: number;
    name: string;
    region: string;
  }[];
}
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
    weather: [
      {
        icon: string;
      }
    ];
  }[];
}

export interface AutoCompeteCity {
  id: number;
  name: string;
  region: string;
}
export interface SearchSlice {
  status: Status;
  auto_comp_list: AutoCompeteCity[];
  list: LoadCityNames[];
  error: string | null;
}

export interface UseSearch {
  list: LoadCityNames[];
  isOpen: boolean;
  inputFieldValue: (city: string) => void;
  handleOnSearchClick: ({
    lat,
    lon,
    name,
    country,
  }: Pick<City, "name" | "country" | "lat" | "lon">) => void;
}
