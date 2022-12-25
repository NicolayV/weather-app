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

export const CardFooter = (props: any) => {
  const { id, temp, temp_notation, feels_like, humidity, pressure, wind } =
    props;

  return (
    <S.Footer>
      <TemperaturePanel
        id={id}
        temp={temp}
        temp_notation={temp_notation}
        feels_like={feels_like}
      />
      <WeatherPanel humidity={humidity} pressure={pressure} wind={wind} />
    </S.Footer>
  );
};
