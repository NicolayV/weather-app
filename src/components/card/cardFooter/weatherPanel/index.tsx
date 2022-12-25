import * as S from "./styled";

export interface WeatherPanelProps {
  main: {
    humidity: number;
    pressure: number;
  };
  wind: { speed: number };
}

export const WeatherPanel = (props: any) => {
  const { humidity, pressure, wind } = props;

  return (
    <S.WeatherPanel>
      <S.WeatherIndicator>
        Wind: <span>{wind} m/s</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator>
        Humidity: <span>{humidity}%</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator>
        Pressure: <span>{pressure}Pa</span>
      </S.WeatherIndicator>
    </S.WeatherPanel>
  );
};
