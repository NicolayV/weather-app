import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

// Card
export const CardBase = styled.div<{
  readonly colorToggler: boolean;
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
`;
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
`;

//Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: transparent;
`;
export const TitlePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: transparent;
`;
export const Title = styled.span`
  font-size: var(--fs-18);
  font-weight: var(--fw-normal);
  background-color: transparent;
`;
export const SubTitle = styled.span`
  font-size: var(--fs-16);
  font-weight: var(--fw-light);
  background-color: transparent;
`;
export const WeatherIconBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
`;
export const WeatherIcon = styled.img.attrs({
  alt: "weather icon",
})`
  width: 42px;
  background-color: transparent;
`;
export const WeatherType = styled.span`
  padding-right: 1rem;
  font-size: var(--fs-12);
  font-weight: var(--fw-normal);
  color: var(--grey200);
  background-color: transparent;
`;
export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  position: absolute;
  right: -2px;
  top: -2px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    & svg {
      fill: #999999;
    }
  }
`;
export const SvgClose = styled(Close)`
  fill: var(--grey200);
  width: 16px;
  background-color: transparent;
`;

// Footer
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

// TempPanel
export const TmpPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
`;
export const TmpSection = styled(TmpPanel)`
  flex-grow: 1;
  align-items: center;
`;
export const Temp = styled.span`
  font-size: var(--fs-18);
  font-weight: var(--fw-normal);
  display: flex;
  background-color: transparent;
`;
export const TempSwitcher = styled.div`
  padding: 0.2rem 0;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
`;
export const TempOption = styled.span<{
  readonly isSelected: boolean;
}>`
  font-size: var(--fs-14);
  font-weight: var(--fw-normal);
  background-color: transparent;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#111517" : "var(--grey200)")};
  &:hover {
    color: var(--blue400);
  }
`;
export const Divider = styled.div`
  background-color: var(--grey600);
  align-self: stretch;
  width: 1px;
`;
export const TempIndicator = styled.span`
  font-size: var(--fs-10);
  font-weight: var(--fw-bold);
  color: var(--grey200);
  display: flex;
  justify-content: center;
  background-color: transparent;
  display: flex;
  gap: 0.5rem;
  & span {
    font-size: inherit;
    font-weight: inherit;
    color: var(--grey300);
    background-color: transparent;
  }
`;

//WeatherPanel
export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.5rem;

  background-color: transparent;
`;

export const Section = styled.span`
  font-size: var(--fs-10);
  font-weight: var(--fw-bold);
  background-color: transparent;
  display: flex;
  gap: 0.5rem;
`;
export const Indicator = styled.span<{
  readonly tempColor: boolean;
}>`
  font-size: inherit;
  font-weight: inherit;
  background-color: transparent;
  color: ${({ tempColor }) =>
    tempColor ? "var(--orange300)" : "var(--blue400)"};
`;
