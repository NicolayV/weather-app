import * as S from "./styled";

export interface WeatherPanelProps {
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
  temp: number | null;
}

export const WeatherPanel = (props: WeatherPanelProps) => {
  const { humidity, pressure, wind } = props;

  return (
    <S.WeatherPanel>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        Wind: <span>{wind} m/s</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        Humidity: <span>{humidity}%</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        Pressure: <span>{pressure}Pa</span>
      </S.WeatherIndicator>
    </S.WeatherPanel>
  );
};
