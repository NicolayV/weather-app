import { SearchListItem } from "types";
import { FetchSearchList } from "./types";

export function stateAdapter(fetchData: FetchSearchList): SearchListItem[] {
  const list = fetchData.list.map((item) => {
    const { id, name, sys, coord, weather } = item;
    return {
      id: id.toString(),
      name: name,
      country: sys.country,
      lat: coord.lat.toString(),
      lon: coord.lon.toString(),
      weather_icon: weather[0].icon,
    };
  });

  return list;
}
