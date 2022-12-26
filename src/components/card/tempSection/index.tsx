import { useTranslation } from "react-i18next";
import { CardProps } from "types";
import * as S from "./styled";

export const TemperaturePanel = (props: CardProps) => {
  const { id, temp, temp_notation, feels_like, updateCityNotationHandler } =
    props;
  const { t } = useTranslation("translation");

  const temperature = (temp: number | null) => {
    if (temp !== null) {
      const currentTemp = Math.round(temp);
      return currentTemp > 0 ? `+ ${currentTemp}` : currentTemp;
    }
    return temp;
  };

  return (
    <S.TemperaturePanel>
      <S.TemperatureSection>
        <S.Temperature>
          {temp !== null
            ? temperature(temp_notation === "celsius" ? temp : temp + 32)
            : "null"}
        </S.Temperature>
        <S.TemperatureSwitcher>
          <S.TemperatureOption
            tempSelected={temp_notation === "celsius" ? true : false}
            onClick={() => updateCityNotationHandler("celsius", id)}
          >
            &deg;C
          </S.TemperatureOption>
          <S.Divider />
          <S.TemperatureOption
            tempSelected={temp_notation === "fahrenheit" ? true : false}
            onClick={() => updateCityNotationHandler("fahrenheit", id)}
          >
            &deg;F
          </S.TemperatureOption>
        </S.TemperatureSwitcher>
      </S.TemperatureSection>
      <S.TemperatureIndicator>
        {t("feels_like", { ns: "translation" })}:{" "}
        <span>{feels_like} &deg;C</span>
      </S.TemperatureIndicator>
    </S.TemperaturePanel>
  );
};
