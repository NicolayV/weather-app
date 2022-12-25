import * as S from "./styled";
import { TemperaturePanel } from "./temperaturePanel";
import { WeatherPanel } from "./weatherPanel";

export interface CardFooterProps {
  id: number | null;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
}

export const CardFooter = (props: CardFooterProps) => {
  return (
    <S.Footer>
      <TemperaturePanel {...props} />
      <WeatherPanel {...props} />
    </S.Footer>
  );
};
