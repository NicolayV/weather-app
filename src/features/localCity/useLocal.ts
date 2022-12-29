import { useEffect } from "react";
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
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
      }
    }

    function showPosition(position: ShowPosition) {
      dispatch(
        loadLocalCityNameByCoord({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      );
    }

    function errorHandler() {
      dispatch(loadLocalCityNameByIp());
    }

    if (localCity.status === "idle") {
      getLocation();
    }
  }, [dispatch, localCity.status]);

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

  console.log(localCity);
  return { localCity, updateCityNotationHandler, deleteHandler };
};
export { useLocal };
