import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import {
  deleteLocalCity,
  loadCityByNav,
  loadCityByIp,
  selectLocalCity,
  updateLocalCity,
} from "./localCitySlice";
import { IShowPosition, UseLocal } from "./types";

const useLocal = (): UseLocal => {
  const dispatch = useAppDispatch();
  const localCity = useSelector(selectLocalCity);

  const showPosition = useCallback(
    ({ coords: { latitude, longitude } }: IShowPosition) => {
      dispatch(
        loadCityByNav({
          lat: latitude.toString(),
          lon: longitude.toString(),
        })
      );
    },
    [dispatch]
  );

  const errorHandler = useCallback(() => {
    dispatch(loadCityByIp());
  }, [dispatch]);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
    }
  }, [errorHandler, showPosition]);

  const deleteCardHandler = () => {
    dispatch(deleteLocalCity());
  };

  const toggleTempUnitHandler = (id: string) => {
    dispatch(updateLocalCity(id));
  };

  useEffect(() => {
    if (localCity.status === "idle") {
      getLocation();
    }
  }, [getLocation, localCity.status]);

  return { localCity, toggleTempUnitHandler, deleteCardHandler };
};
export { useLocal };
