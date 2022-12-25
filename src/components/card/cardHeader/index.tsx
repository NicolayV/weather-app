import { deleteCity } from "features/weather/weather-slice";
import { useAppDispatch } from "store";

import * as S from "./styled";

export interface CardHeaderProps {
  id: number | null;
  name: string;
  country: string;
  dt_txt: string;
  weather_icon: string | null;
  weather_description: string;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { id, name, country, dt_txt, weather_icon, weather_description } =
    props;

  const dispatch = useAppDispatch();
  const deleteHandler = () => {
    dispatch(deleteCity(id));
  };

  const date = new Date(dt_txt)
    .toUTCString()
    .slice(0, -7)
    .split(" ")
    .filter((word) => word !== "2022")
    .join(" ");

  return (
    <S.Header>
      <S.CloseButton onClick={deleteHandler}>
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
