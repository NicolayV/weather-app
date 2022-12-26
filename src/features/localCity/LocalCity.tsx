import React from "react";

import { Card, CardLoading } from "components/card";
import { useLocal } from "./use-local";

export const LocalCity = () => {
  const { localCity, updateCityNotationHandler, deleteHandler } = useLocal();

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
