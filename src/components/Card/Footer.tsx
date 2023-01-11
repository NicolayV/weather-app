import { WeatherCard } from "types";
import { useTranslation } from "react-i18next";
import * as S from "./styled";

interface ICardFooter
  extends Pick<
    WeatherCard,
    | "id"
    | "temp"
    | "temp_unit"
    | "feels_like"
    | "toggleTempUnitHandler"
    | "humidity"
    | "pressure"
    | "wind"
    | "temp"
  > {}

const CardFooter = ({
  id,
  temp,
  temp_unit,
  feels_like,
  humidity,
  pressure,
  wind,
  toggleTempUnitHandler,
}: ICardFooter) => {
  const { t } = useTranslation("translation");
  const tempTransmitter = ({
    temp,
    temp_unit,
  }: {
    temp: string;
    temp_unit: string;
  }): string => {
    const tmp = (temp: string): string =>
      Number(temp) > 0 ? "+" + temp : temp;

    if (temp_unit === "celsius") {
      return tmp(temp);
    }
    return tmp((Number(temp) + 32).toString());
  };
  const isColored = Number(temp) > 0 ? true : false;
  return (
    <S.Footer>
      <S.TmpPanel>
        <S.TmpSection>
          <S.Temp>{tempTransmitter({ temp, temp_unit }) || "N/A"}</S.Temp>
          <S.TempSwitcher>
            <S.TempOption
              isSelected={temp_unit === "celsius"}
              onClick={() => toggleTempUnitHandler(id)}
            >
              &deg;C
            </S.TempOption>
            <S.Divider />
            <S.TempOption
              isSelected={temp_unit === "fahrenheit"}
              onClick={() => toggleTempUnitHandler(id)}
            >
              &deg;F
            </S.TempOption>
          </S.TempSwitcher>
        </S.TmpSection>
        <S.TempIndicator>
          {t("feels_like", { ns: "translation" })}:
          <span>{feels_like || "N/A"} &deg;C</span>
        </S.TempIndicator>
      </S.TmpPanel>
      <S.Panel>
        <S.Section role="contentinfo">
          {t("wind", { ns: "translation" })}:
          <S.Indicator tempColor={isColored}>{wind || "N/A"} m/s</S.Indicator>
        </S.Section>
        <S.Section>
          {t("humidity", { ns: "translation" })}:
          <S.Indicator tempColor={isColored}>{humidity || "N/A"}%</S.Indicator>
        </S.Section>
        <S.Section>
          {t("pressure", { ns: "translation" })}:
          <S.Indicator tempColor={isColored}>{pressure || "N/A"}Pa</S.Indicator>
        </S.Section>
      </S.Panel>
    </S.Footer>
  );
};

export default CardFooter;
