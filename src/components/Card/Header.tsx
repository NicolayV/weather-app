import { WeatherCard } from "types";
import * as S from "./styled";

interface ICardHeader
  extends Pick<
    WeatherCard,
    | "id"
    | "name"
    | "country"
    | "dt"
    | "weather_icon"
    | "weather_description"
    | "deleteCardHandler"
  > {}

const CardHeader = ({
  id,
  name,
  country,
  dt,
  weather_icon,
  weather_description,
  deleteCardHandler,
}: ICardHeader) => {
  return (
    <S.Header>
      <S.CloseButton onClick={() => deleteCardHandler(id)}>
        <S.SvgClose />
      </S.CloseButton>

      <S.TitlePanel>
        <S.Title>
          {name || "N/A"}, {country || "N/A"}
        </S.Title>
        <S.SubTitle>{dt || "N/A"}</S.SubTitle>
      </S.TitlePanel>

      <S.WeatherIconBar>
        <S.WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
        />
        <S.WeatherType>{weather_description || "N/A"}</S.WeatherType>
      </S.WeatherIconBar>
    </S.Header>
  );
};

export default CardHeader;
