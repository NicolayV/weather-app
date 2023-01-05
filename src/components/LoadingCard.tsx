import { ReactNode } from "react";
import styled from "styled-components";
import { WeatherCard } from "types";

export interface ILoadingCard extends Pick<WeatherCard, "temp"> {
  children: ReactNode;
  isVisible: boolean;
}

export const LoadingCard = (props: ILoadingCard) => {
  const { temp, isVisible, children } = props;

  const toggler = (value: string): boolean =>
    Number(value) > 0 ? true : false;

  return (
    <CardBase isVisible={isVisible} colorToggler={toggler(temp)}>
      <Loading>{children}</Loading>
    </CardBase>
  );
};

export const CardBase = styled.div<{
  readonly colorToggler: boolean;
  readonly isVisible: boolean;
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
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
`;

export const Loading = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-light);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
`;
