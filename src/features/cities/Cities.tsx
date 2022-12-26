import React from "react";

import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import {
  deleteCity,
  selectCoordCitiesSlice,
  updateCityNotation,
} from "./cities-slice";
import { Card, CardProps } from "../../components/card";

export const Cities = () => {
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
      updateCityNotation({
        temp_notation: notation,
        id,
      })
    );
  };

  return (
    <>
      {list.map(
        (
          props: Omit<CardProps, "deleteHandler" | "updateCityNotationHandler">
        ) => {
          return (
            <Card
              deleteHandler={deleteHandler}
              updateCityNotationHandler={updateCityNotationHandler}
              key={props.id}
              {...props}
            />
          );
        }
      )}
    </>
  );
};
