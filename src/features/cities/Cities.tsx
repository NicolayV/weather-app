import { CityProps } from "types";
import { Card } from "../../components/card";
import { useCities } from "./use-cities";

export const Cities = () => {
  const { list, deleteHandler, updateCityNotationHandler } = useCities();

  return (
    <>
      {list.map((props: CityProps) => {
        return (
          <Card
            deleteHandler={deleteHandler}
            updateCityNotationHandler={updateCityNotationHandler}
            key={props.id}
            {...props}
          />
        );
      })}
    </>
  );
};
