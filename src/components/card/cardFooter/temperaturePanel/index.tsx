import { useTranslation } from "react-i18next";
import * as S from "./styled";

export interface TemperaturePanelProps {
  id: number | null;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  updateCityNotationHandler: (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => void;
}

export const TemperaturePanel = (props: TemperaturePanelProps) => {
  const { id, temp, temp_notation, feels_like, updateCityNotationHandler } =
    props;

  const temperature = (temp: number | null) => {
    if (temp !== null) {
      const currentTemp = Math.round(temp);

      if (currentTemp > 0) {
        return `+ ${currentTemp}`;
      } else {
        return currentTemp;
      }
    }
    return temp;
  };

  const { t } = useTranslation("translation");

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
