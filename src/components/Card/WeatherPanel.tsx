import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { CardProps } from "types";

export const WeatherPanel = (props: CardProps) => {
  const { humidity, pressure, wind } = props;
  const { t } = useTranslation("translation");

  return (
    <Container>
      <Section main={props.temp ? Math.sign(props.temp) : -1}>
        {t("wind", { ns: "translation" })}: <span>{wind} m/s</span>
      </Section>
      <Section main={props.temp ? Math.sign(props.temp) : -1}>
        {t("humidity", { ns: "translation" })}: <span>{humidity}%</span>
      </Section>
      <Section main={props.temp ? Math.sign(props.temp) : -1}>
        {t("pressure", { ns: "translation" })}: <span>{pressure}Pa</span>
      </Section>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;

  background-color: transparent;
`;

export interface SectionProps {
  readonly main: number;
}

export const Section = styled.span<SectionProps>`
  font-size: 10px;
  font-weight: 800;
  background-color: transparent;
  display: flex;
  gap: 5px;

  & span {
    font-size: inherit;
    font-weight: inherit;
    background-color: transparent;
    color: ${(props) => (props.main >= 0 ? "#ffa437" : "#3c99dc")};
  }
`;
