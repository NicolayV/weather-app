import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { LocalCitySliceProps } from "types";
import {
  deleteLocalCity,
  loadLocalCity,
  loadLocalCityName,
  selectLocalCity,
  updateLocalCityNotation,
} from "./localCity-slice";

interface LocalProps {
  (): {
    localCity: LocalCitySliceProps;
    deleteHandler: () => void;
    updateCityNotationHandler: (
      notation: "celsius" | "fahrenheit",
      id: number | null
    ) => void;
  };
}

const useLocal: LocalProps = () => {
  const dispatch = useAppDispatch();
  const localCity = useSelector(selectLocalCity);

  useEffect(() => {
    if (!localCity.current_location) {
      dispatch(loadLocalCityName());
    }
  }, [dispatch, localCity.current_location]);

  useEffect(() => {
    if (localCity.current_location && localCity.status === "idle") {
      dispatch(loadLocalCity(localCity.current_location));
    }
  }, [dispatch, localCity.current_location, localCity.status]);

  const deleteHandler = () => {
    dispatch(deleteLocalCity());
  };

  const updateCityNotationHandler = (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => {
    dispatch(
      updateLocalCityNotation({
        temp_notation: notation,
        id,
      })
    );
  };

  return { localCity, updateCityNotationHandler, deleteHandler };
};
export { useLocal };
