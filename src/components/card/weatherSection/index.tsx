import { useTranslation } from "react-i18next";
import { CardProps } from "types";
import * as S from "./styled";

export const WeatherPanel = (props: CardProps) => {
  const { humidity, pressure, wind } = props;
  const { t } = useTranslation("translation");

  return (
    <S.WeatherPanel>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        {t("wind", { ns: "translation" })}: <span>{wind} m/s</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        {t("humidity", { ns: "translation" })}: <span>{humidity}%</span>
      </S.WeatherIndicator>
      <S.WeatherIndicator main={props.temp ? Math.sign(props.temp) : -1}>
        {t("pressure", { ns: "translation" })}: <span>{pressure}Pa</span>
      </S.WeatherIndicator>
    </S.WeatherPanel>
  );
};
