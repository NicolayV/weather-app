import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { City } from "types";
import { deleteCity, selectCoordCitiesSlice, updateCity } from "./citiesSlice";

interface UseCitiesProps {
  list: City[];
  deleteHandler: (id: number | null) => void;
  updateCityNotationHandler: (id: number | null) => void;
}

const useCities = (): UseCitiesProps => {
  const dispatch = useAppDispatch();
  const { list } = useSelector(selectCoordCitiesSlice);

  const deleteHandler = (id: number | null) => {
    dispatch(deleteCity(id));
  };

  const updateCityNotationHandler = (id: number | null) => {
    dispatch(updateCity(id));
  };

  return { list, deleteHandler, updateCityNotationHandler };
};
export { useCities };
