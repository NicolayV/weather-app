import styled from "styled-components";
import { WeatherCard } from "types";
import { CardFooter } from "./Footer";
import { CardHeader } from "./Header";
import { ChartLine } from "./Chart";

export const Card = (props: WeatherCard) => {
  const toggler = (value: string): boolean =>
    Number(value) > 0 ? true : false;

  return (
    <CardBase colorToggler={toggler(props.temp)}>
      <CardHeader {...props} />
      <Chart>
        <ChartLine {...props} />
      </Chart>
      <CardFooter {...props} />
    </CardBase>
  );
};

export const CardBase = styled.div<{
  readonly colorToggler: boolean;
}>`
  padding: 0.5rem;
  width: 300px;
  height: 280px;
  background-color: ${({ colorToggler }) =>
    colorToggler ? "var(--orange100)" : "var(--blue100)"};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: var(--radii);
  box-shadow: var(--base-shadow);
  &:hover {
    box-shadow: var(--base-shadow-hover);
  }
`;
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
`;
