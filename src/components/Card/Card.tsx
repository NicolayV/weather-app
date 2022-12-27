import styled from "styled-components";
import { CardLoadingProps, CardProps } from "types";
import { CardFooter } from "./Footer";
import { CardHeader } from "./Header";
import { ChartLine } from "./Chart";

export const Card = (props: CardProps) => {
  return (
    <CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <CardHeader {...props} />
      <Chart>
        <ChartLine {...props} />
      </Chart>
      <CardFooter {...props} />
    </CardEl>
  );
};

export const CardLoading = (props: CardLoadingProps) => {
  return (
    <CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <Loading>{props.children}</Loading>
    </CardEl>
  );
};

export interface CardElProps {
  readonly main: number;
}
export const CardEl = styled.div<CardElProps>`
  padding: 5px;
  width: 300px;
  background-color: ${(props) => (props.main >= 0 ? "#fef2e2" : "#ebeafe")};
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
`;
export const Loading = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
`;
