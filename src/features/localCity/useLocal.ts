import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";

import {
  deleteLocalCity,
  loadLocalCityByCoord,
  loadLocalCityNameByCoord,
  loadLocalCityNameByIp,
  selectLocalCity,
  updateLocalCityNotation,
} from "./localCitySlice";
import { ShowPosition, UseLocalProps } from "./types";

const useLocal = (): UseLocalProps => {
  const dispatch = useAppDispatch();
  const localCity = useSelector(selectLocalCity);

  const showPosition = useCallback(
    (position: ShowPosition) => {
      dispatch(
        loadLocalCityNameByCoord({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      );
    },
    [dispatch]
  );

  const errorHandler = useCallback(() => {
    dispatch(loadLocalCityNameByIp());
  }, [dispatch]);

  const getLocation = useCallback(() => {
    console.log("getLocation render");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
    }
  }, [errorHandler, showPosition]);

  useEffect(() => {
    if (localCity.status === "idle") {
      getLocation();
    }
  }, [dispatch, getLocation, localCity.status]);

  useEffect(() => {
    if (
      localCity.status === "received-name-by-nav" ||
      localCity.status === "received-name-by-ip"
    ) {
      dispatch(
        loadLocalCityByCoord({ lat: localCity.lat, lon: localCity.lon })
      );
    }
  }, [dispatch, localCity.lat, localCity.lon, localCity.status]);

  const deleteHandler = () => {
    dispatch(deleteLocalCity());
  };

  const updateCityNotationHandler = (id: number | null) => {
    dispatch(updateLocalCityNotation(id));
  };

  return { localCity, updateCityNotationHandler, deleteHandler };
};
export { useLocal };
