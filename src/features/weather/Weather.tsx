import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";

import { Card, CardProps } from "components/card";
import { selectCitiesWeather } from "./weather-slice";
import {
  clearCity,
  addCity,
  deleteCity,
  updateCityNotation,
} from "./weather-slice";

export const Weather = () => {
  const dispatch = useAppDispatch();

  const { list, status } = useSelector(selectCitiesWeather);

  const deleteHandler = (id: number | null) => {
    dispatch(deleteCity(id));
  };

  const updateCityNotationHandler = (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => {
    dispatch(
      updateCityNotation({
        temp_notation: notation,
        id,
      })
    );
  };

  useEffect(() => {
    if (status === "received") {
      dispatch(addCity());
      dispatch(clearCity());
    }
  }, [dispatch, status]);

  return (
    <>
      {list.map(
        (
          props: Omit<CardProps, "deleteHandler" | "updateCityNotationHandler">
        ) => {
          const { id } = props;
          return (
            <Card
              deleteHandler={deleteHandler}
              updateCityNotationHandler={updateCityNotationHandler}
              key={id}
              {...props}
            />
          );
        }
      )}
    </>
  );
};
