import { ReactNode } from "react";
import styled from "styled-components";
import { WeatherCard } from "types";

export interface ILoadingCard extends Pick<WeatherCard, "temp"> {
  children: ReactNode;
  isVisible: boolean;
}

const LoadingCard = ({ temp, isVisible, children }: ILoadingCard) => {
  const toggler = Number(temp) > 0 ? true : false;

  return (
    <CardBase isVisible={isVisible} colorToggler={toggler}>
      <Loading>{children}</Loading>
    </CardBase>
  );
};

export const CardBase = styled.div<{
  readonly colorToggler: boolean;
  readonly isVisible: boolean;
}>`
  padding: 0.5rem;
  width: 350px;
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

export default LoadingCard;

export const Loading = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-light);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
`;
