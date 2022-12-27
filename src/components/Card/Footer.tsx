import { CardProps } from "types";
import styled from "styled-components";
import { TempPanel } from "./TempPanel";
import { WeatherPanel } from "./WeatherPanel";

export const CardFooter = (props: CardProps) => {
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
