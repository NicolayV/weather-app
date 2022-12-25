import React, { useState } from "react";
import styled from "styled-components";
// import { Close } from "@styled-icons/ionicons-solid";
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

export const Card = (props: CardProps) => {
  type WeatherKind = "cold" | "warmly";
  const [weatherKind, setWeatherKind] = useState<WeatherKind>("cold");

  return (
    <CardEl>
      <CardHeader {...props} />
      <Chart>Chart</Chart>
      <CardFooter {...props} />
    </CardEl>
  );
};

export const CardEl = styled.div`
  padding: 5px;
  width: 300px;
  height: 250px;
  background-color: #ebeafe;

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
