import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { WeatherCard } from "types";

interface IWeatherPanel
  extends Pick<WeatherCard, "humidity" | "pressure" | "wind" | "temp"> {}

export const WeatherPanel = (props: IWeatherPanel) => {
  const { humidity, pressure, wind, temp } = props;
  const { t } = useTranslation("translation");

  const isColored = (value: string): boolean =>
    Number(value) > 0 ? true : false;
  const hasIndicator = (value: string) => (value ? value : "N/A");

  return (
    <Panel>
      <Section tempColor={isColored(temp)}>
        {t("wind", { ns: "translation" })}:<span>{hasIndicator(wind)} m/s</span>
      </Section>
      <Section tempColor={isColored(temp)}>
        {t("humidity", { ns: "translation" })}:
        <span>{hasIndicator(humidity)}%</span>
      </Section>
      <Section tempColor={isColored(temp)}>
        {t("pressure", { ns: "translation" })}:
        <span>{hasIndicator(pressure)}Pa</span>
      </Section>
    </Panel>
  );
};

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.5rem;

  background-color: transparent;
`;

export const Section = styled.span<{
  readonly tempColor: boolean;
}>`
  font-size: var(--fs-10);
  font-weight: var(--fw-bold);
  background-color: transparent;
  display: flex;
  gap: 0.5rem;

  & span {
    font-size: inherit;
    font-weight: inherit;
    background-color: transparent;
    color: ${({ tempColor }) =>
      tempColor ? "var(--orange300)" : "var(--blue400)"};
  }
`;
