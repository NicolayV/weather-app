import { SearchListItem, Status } from "types";

export interface FetchSearchList {
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

export interface SearchSlice {
  status: Status;
  list: SearchListItem[];
  auto_comp_list: [];
  error: string | null;
}

export interface UseSearch {
  searchList: SearchListItem[];
  isOpen: boolean;
  inputFieldValue: (city: string) => void;
  handleOnSearchClick: (
    value: Pick<SearchListItem, "name" | "country" | "lat" | "lon">
  ) => void;
}

export interface IFetchAutoCompeteCityName {
  data: {
    id: number;
    name: string;
    region: string;
  }[];
}

export interface IAutoCompeteCity {
  id: number;
  name: string;
  region: string;
}
