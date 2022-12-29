import { ReactNode } from "react";
import styled from "styled-components";
import { CardProps } from "types";

export interface CardLoadingProps extends Pick<CardProps, "temp"> {
  children: ReactNode;
  isVisible: boolean;
}

export const LoadingCard = (props: CardLoadingProps) => {
  return (
    <CardEl
      isVisible={props.isVisible}
      main={props.temp ? Math.sign(props.temp) : -1}
    >
      <Loading>{props.children}</Loading>
    </CardEl>
  );
};

export interface CardElProps {
  readonly main: number;
  readonly isVisible: boolean;
}

export const CardEl = styled.div<CardElProps>`
  padding: 5px;
  width: 300px;
  height: 280px;

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
  display: ${(props) => (props.isVisible ? "flex" : "none")};
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
