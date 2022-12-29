import { loadCity } from "features/cities/citiesSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { City } from "types";
import { loadCitiesNames, selectCitiesNames, setStatus } from "./searchSlice";
import { UseSearch } from "./types";

// export interface CurrentCityHandlerProps {
//   lat: number | null;
//   lon: number | null;
//   name: string;
//   country: string;
// }

const useSearch = (): UseSearch => {
  const dispatch = useAppDispatch();
  const { list, status } = useSelector(selectCitiesNames);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(status === "received" ? true : false);
  }, [status]);

  const inputFieldValue = (city: string) => {
    dispatch(loadCitiesNames(city));
  };

  const currentCityHandler = ({
    lat,
    lon,
    name,
    country,
  }: Pick<City, "name" | "country" | "lat" | "lon">) => {
    dispatch(loadCity({ name, country, lat, lon }));
    dispatch(setStatus("idle"));
  };

  return { list, isOpen, inputFieldValue, currentCityHandler };
};

export { useSearch };
