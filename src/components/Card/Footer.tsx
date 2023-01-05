import { WeatherCard } from "types";
import styled from "styled-components";
import { TempPanel } from "./TempPanel";
import { WeatherPanel } from "./WeatherPanel";

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

export const CardFooter = (props: ICardFooter) => {
  return (
    <Footer>
      <TempPanel {...props} />
      <WeatherPanel {...props} />
    </Footer>
  );
};

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;
