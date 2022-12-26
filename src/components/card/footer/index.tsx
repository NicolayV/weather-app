import { CardProps } from "types";
import { TemperaturePanel } from "../tempSection";
import { WeatherPanel } from "../weatherSection";
import * as S from "./styled";

export const CardFooter = (props: CardProps) => {
  return (
    <S.Footer>
      <TemperaturePanel {...props} />
      <WeatherPanel {...props} />
    </S.Footer>
  );
};
