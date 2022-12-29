import { City } from "types";
import { Card } from "../../components/Card/Card";
import { useCities } from "./useCities";

export const Cities = () => {
  const { list, deleteHandler, updateCityNotationHandler } = useCities();

  return (
    <>
      {list.map((props: City) => {
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
