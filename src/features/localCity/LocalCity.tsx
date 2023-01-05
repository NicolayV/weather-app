import React from "react";

import { Card } from "components/Card/Card";
import { useLocal } from "./useLocal";
import { LoadingCard } from "components/LoadingCard";

export const LocalCity = () => {
  const { localCity, toggleTempUnitHandler, deleteCardHandler } = useLocal();
  return (
    <>
      {localCity.status === "received" ? (
        <Card
          toggleTempUnitHandler={toggleTempUnitHandler}
          deleteCardHandler={deleteCardHandler}
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
