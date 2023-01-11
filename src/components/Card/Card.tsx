import { memo } from "react";
import { WeatherCard } from "types";
import CardHeader from "./Header";
import CardFooter from "./Footer";
import CustomChart from "components/CustomChart";
import * as S from "./styled";

const Card = ({
  id,
  name,
  country,
  dt,
  temp,
  temp_unit,
  forecast,
  weather_icon,
  weather_description,
  feels_like,
  humidity,
  pressure,
  wind,
  deleteCardHandler,
  toggleTempUnitHandler,
}: WeatherCard) => {
  const toggler = Number(temp) > 0 ? true : false;
  return (
    <S.CardBase colorToggler={toggler}>
      <CardHeader
        country={country}
        id={id}
        name={name}
        dt={dt}
        weather_icon={weather_icon}
        weather_description={weather_description}
        deleteCardHandler={deleteCardHandler}
      />
      <S.Chart>
        <CustomChart temp={temp} forecast={forecast} />
      </S.Chart>
      <CardFooter
        id={id}
        temp={temp}
        temp_unit={temp_unit}
        feels_like={feels_like}
        toggleTempUnitHandler={toggleTempUnitHandler}
        humidity={humidity}
        pressure={pressure}
        wind={wind}
      />
    </S.CardBase>
  );
};

export default memo(Card);
