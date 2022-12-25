import {
  selectActiveTempNotation,
  selectCityListWeather,
} from "features/weather/weather-selector";
import { updateCityNotation } from "features/weather/weather-slice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import * as S from "./styled";

export interface TemperaturePanelProps {
  main: {
    temp: number;
    feels_like: number;
  };
}

export const TemperaturePanel = (props: any) => {
  const { id, temp, temp_notation, feels_like } = props;
  const dispatch = useAppDispatch();

  const list = useSelector(selectCityListWeather);
  const activeTempNotation = useSelector((state: RootState) =>
    selectActiveTempNotation(state, { id })
  );
  console.log(activeTempNotation);

  const clickHandle = (notation: "celsius" | "fahrenheit") => {
    dispatch(
      updateCityNotation({
        temp_notation: notation,
        id,
      })
    );
  };

  return (
    <S.TemperaturePanel>
      <S.TemperatureSection>
        <S.Temperature>{temp}</S.Temperature>

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
