import React, { ReactNode } from "react";
import styled from "styled-components";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";

export interface CardProps {
  id: number | null;
  name: string;
  country: string;
  dt_txt: string;
  dt: number | null;
  weather_icon: string | null;
  weather_description: string;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
}

export interface CardLoadingProps extends CardProps {
  children: ReactNode;
}

export const CardLoading = (props: CardLoadingProps) => {
  return (
    <CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <Loading>{props.children}</Loading>
    </CardEl>
  );
};

export const Card = (props: CardProps) => {
  return (
    <CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <CardHeader {...props} />
      <Chart>Chart</Chart>
      <CardFooter {...props} />
    </CardEl>
  );
};

export interface CardElProps {
  readonly main: number;
}

export const CardEl = styled.div<CardElProps>`
  padding: 5px;
  width: 300px;
  height: 250px;
  background-color: ${(props) => (props.main >= 0 ? "#fef2e2" : "#ebeafe")};

  display: flex;
  flex-direction: column;
  gap: 5px;

  /* border: 1px solid red; */
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
  border: 0.5px dashed blue;
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
