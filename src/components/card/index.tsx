import React from "react";
import styled from "styled-components";
// import { Close } from "@styled-icons/ionicons-solid";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";

export interface CardProps {
  data: any;
}

export const Card = (props: CardProps) => {
  const {
    data: { list, city },
  } = props;

  const { main, wind } = list[0];

  return (
    <CardEl>
      <CardHeader list={list} city={city} />
      <Chart>Chart</Chart>
      <CardFooter main={main} wind={wind} />
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
  border: 0.5px solid blue;
`;
