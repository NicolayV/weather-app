import { deleteCity } from "features/weather/weather-slice";
import { useAppDispatch } from "store";

import * as S from "./styled";

export interface CardHeaderProps {
  list: [
    {
      weather: [{ icon: string; main: string }];
      dt_txt: string;
    }
  ];
  city: {
    name: string;
    country: string;
  };
}

export const CardHeader = (props: any) => {
  const { id, name, country, dt_txt, weather_icon, weather_description } =
    props;
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(deleteCity(id));
  };

  return (
    <S.Header>
      <S.CloseButton onClick={deleteHandler}>
        <S.SvgClose />
      </S.CloseButton>

      <S.TitlePanel>
        <S.Title>
          {name}, {country}
        </S.Title>
        <S.SubTitle>{dt_txt}</S.SubTitle>
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
