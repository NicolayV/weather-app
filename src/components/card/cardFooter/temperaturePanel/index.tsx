import * as S from "./styled";

export interface TemperaturePanelProps {
  main: {
    temp: number;
    feels_like: number;
  };
}

export const TemperaturePanel = (props: TemperaturePanelProps) => {
  const {
    main: { temp, feels_like },
  } = props;

  return (
    <S.TemperaturePanel>
      <S.TemperatureSection>
        <S.Temperature>{temp}</S.Temperature>

        <S.TemperatureSwitcher>
          <S.CelsiusTemperature>&deg;C</S.CelsiusTemperature>
          <S.Divider />
          <S.FahrenheitTemperature>&deg;F</S.FahrenheitTemperature>
        </S.TemperatureSwitcher>
      </S.TemperatureSection>

      <S.TemperatureIndicator>
        Feels like: <span>{feels_like} &deg;C</span>
      </S.TemperatureIndicator>
    </S.TemperaturePanel>
  );
};
