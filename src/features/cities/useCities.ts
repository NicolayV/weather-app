import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { CityProps } from "types";
import { deleteCity, selectCoordCitiesSlice, updateCity } from "./citiesSlice";

interface UseCitiesProps {
  list: CityProps[];
  deleteHandler: (id: number | null) => void;
  updateCityNotationHandler: (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => void;
}

const useCities = (): UseCitiesProps => {
  const dispatch = useAppDispatch();
  const { list } = useSelector(selectCoordCitiesSlice);

  const deleteHandler = (id: number | null) => {
    dispatch(deleteCity(id));
  };

  const updateCityNotationHandler = (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => {
    dispatch(
      updateCity({
        temp_notation: notation,
        id,
      })
    );
  };

  return { list, deleteHandler, updateCityNotationHandler };
};
export { useCities };
