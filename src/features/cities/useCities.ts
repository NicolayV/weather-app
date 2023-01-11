import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { deleteCity, selectCities, updateCity } from "./citiesSlice";
import { UseCities } from "./types";

const useCities = (): UseCities => {
  const dispatch = useAppDispatch();
  const { list } = useSelector(selectCities);

  const deleteCardHandler = useCallback(
    (id: string) => {
      dispatch(deleteCity(id));
    },
    [dispatch]
  );

  const toggleTempUnitHandler = useCallback(
    (id: string) => {
      dispatch(updateCity(id));
    },
    [dispatch]
  );

  return { listOfCities: list, deleteCardHandler, toggleTempUnitHandler };
};
export { useCities };
