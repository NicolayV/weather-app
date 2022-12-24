import * as S from "./styled";
import { TemperaturePanel } from "./temperaturePanel";
import { WeatherPanel } from "./weatherPanel";

export interface CardFooterProps {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: { speed: number };
}

export const CardFooter = (props: CardFooterProps) => {
  const { main, wind } = props;

  return (
    <S.Footer>
      <TemperaturePanel main={main} />
      <WeatherPanel main={main} wind={wind} />
    </S.Footer>
  );
};
