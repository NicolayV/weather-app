import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import {
  deleteLocalCity,
  loadCityByNav,
  selectLocalCity,
  updateLocalCity,
} from "./localCitySlice";
import { IShowPosition, UseLocal } from "./types";

const useLocal = (): UseLocal => {
  const dispatch = useAppDispatch();
  const localCity = useSelector(selectLocalCity);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }: IShowPosition) => {
          dispatch(
            loadCityByNav({
              lat: latitude.toString(),
              lon: longitude.toString(),
            })
          );
        },
        () => console.log("Geolocation is not supported by this browser.")
      );
    }
  };

  const deleteCardHandler = () => {
    dispatch(deleteLocalCity());
  };

  const toggleTempUnitHandler = (id: string) => {
    dispatch(updateLocalCity(id));
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { localCity, toggleTempUnitHandler, deleteCardHandler };
};
export { useLocal };
