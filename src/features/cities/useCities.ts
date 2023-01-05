import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { deleteCity, selectCities, updateCity } from "./citiesSlice";
import { UseCities } from "./types";

const useCities = (): UseCities => {
  const dispatch = useAppDispatch();
  const { list } = useSelector(selectCities);

  const deleteCardHandler = (id: string) => {
    dispatch(deleteCity(id));
  };

  const toggleTempUnitHandler = (id: string) => {
    dispatch(updateCity(id));
  };

  return { listOfCities: list, deleteCardHandler, toggleTempUnitHandler };
};
export { useCities };
