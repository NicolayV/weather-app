import React from "react";

import { Card } from "components/Card/Card";
import { useLocal } from "./useLocal";
import { LoadingCard } from "components/LoadingCard";

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
        <LoadingCard
          isVisible={localCity.status === "canceled" ? false : true}
          {...localCity}
        >
          {localCity.status === "rejected"
            ? "Cannot load local weather"
            : "Loading local weather ..."}
        </LoadingCard>
      )}
    </>
  );
};
