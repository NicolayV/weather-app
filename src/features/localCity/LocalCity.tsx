import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import {
  deleteLocalCity,
  selectLocalCity,
  updateLocalCityNotation,
} from "./localCity-slice";
import { loadCurrentLocation, loadLocalCity } from "./localCity-slice";
import { Card, CardLoading } from "components/card";

export const LocalCity = () => {
  const dispatch = useAppDispatch();
  const localCity = useSelector(selectLocalCity);

  useEffect(() => {
    if (localCity.current_location === "") {
      dispatch(loadCurrentLocation(""));
    }
  }, [dispatch, localCity.current_location]);

  useEffect(() => {
    if (localCity.current_location && localCity.status === "idle") {
      dispatch(loadLocalCity(localCity.current_location));
    }
  }, [dispatch, localCity.current_location, localCity.status]);

  const deleteHandler = (id: number | null) => {
    console.log(id);
    dispatch(
      deleteLocalCity({
        id,
      })
    );
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
    console.log(id);
  };

  return (
    <>
      {localCity.status === "received" ? (
        <Card
          updateCityNotationHandler={updateCityNotationHandler}
          deleteHandler={deleteHandler}
          {...localCity}
        />
      ) : (
        <CardLoading {...localCity}>
          {localCity.status === "rejected"
            ? "Cannot load local weather"
            : "Loading local weather ..."}
        </CardLoading>
      )}
    </>
  );
};
