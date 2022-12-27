import { loadCity } from "features/cities/citiesSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { LoadCityNamesProps } from "types";
import { loadCityNames, selectCitiesNames, setStatus } from "./searchSlice";

export interface CurrentCityHandlerProps {
  lat: number | null;
  lon: number | null;
  name: string;
  country: string;
}

interface UseSearchProps {
  list: LoadCityNamesProps[];
  isOpen: boolean;
  inputFieldValue: (city: string) => void;
  currentCityHandler: ({
    lat,
    lon,
    name,
    country,
  }: CurrentCityHandlerProps) => void;
}

const useSearch = (): UseSearchProps => {
  const dispatch = useAppDispatch();
  const { list, status } = useSelector(selectCitiesNames);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(status === "received" ? true : false);
  }, [status]);

  const inputFieldValue = (city: string) => {
    dispatch(loadCityNames(city));
  };

  const currentCityHandler = ({
    lat,
    lon,
    name,
    country,
  }: CurrentCityHandlerProps) => {
    if (typeof lat === "number" && typeof lon === "number") {
      const strLat = lat.toString();
      const strLon = lon.toString();
      dispatch(loadCity({ name, country, strLat, strLon }));
      dispatch(setStatus("idle"));
    }
  };

  return { list, isOpen, inputFieldValue, currentCityHandler };
};
export { useSearch };
