import { CardProps } from "types";
import * as S from "./styled";

export const CardHeader = (props: CardProps) => {
  const {
    id,
    name,
    country,
    dt,
    weather_icon,
    weather_description,
    deleteHandler,
  } = props;

  const date = new Date(dt ? dt * 1000 : 0)
    .toUTCString()
    .slice(0, -7)
    .split(" ")
    .filter((word) => word !== "2022")
    .join(" ");

  return (
    <S.Header>
      <S.CloseButton onClick={() => deleteHandler(id)}>
        <S.SvgClose />
      </S.CloseButton>

      <S.TitlePanel>
        <S.Title>
          {name}, {country}
        </S.Title>
        <S.SubTitle>{date}</S.SubTitle>
      </S.TitlePanel>

      <S.WeatherIconBar>
        <S.WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
        />
        <S.WeatherType>{weather_description}</S.WeatherType>
      </S.WeatherIconBar>
    </S.Header>
  );
};