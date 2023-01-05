import { City } from "types";
import { Card } from "../../components/Card/Card";
import { useCities } from "./useCities";

export const Cities = () => {
  const { listOfCities, deleteCardHandler, toggleTempUnitHandler } =
    useCities();

  return (
    <>
      {listOfCities.map((props: City) => {
        return (
          <Card
            deleteCardHandler={deleteCardHandler}
            toggleTempUnitHandler={toggleTempUnitHandler}
            key={props.id}
            {...props}
          />
        );
      })}
    </>
  );
};
