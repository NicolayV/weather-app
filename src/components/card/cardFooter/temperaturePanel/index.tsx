import { updateCityNotation } from "features/weather/weather-slice";
import { useAppDispatch } from "store";
import * as S from "./styled";

export interface TemperaturePanelProps {
  id: number | null;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
}

export const TemperaturePanel = (props: TemperaturePanelProps) => {
  const { id, temp, temp_notation, feels_like } = props;

  const dispatch = useAppDispatch();

  const clickHandle = (notation: "celsius" | "fahrenheit") => {
    dispatch(
      updateCityNotation({
        temp_notation: notation,
        id,
      })
    );
  };

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
            onClick={() => clickHandle("celsius")}
          >
            &deg;C
          </S.TemperatureOption>

          <S.Divider />

          <S.TemperatureOption
            tempSelected={temp_notation === "fahrenheit" ? true : false}
            onClick={() => clickHandle("fahrenheit")}
          >
            &deg;F
          </S.TemperatureOption>
        </S.TemperatureSwitcher>
      </S.TemperatureSection>

      <S.TemperatureIndicator>
        Feels like: <span>{feels_like} &deg;C</span>
      </S.TemperatureIndicator>
    </S.TemperaturePanel>
  );
};
