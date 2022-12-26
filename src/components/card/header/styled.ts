import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: transparent;
`;
export const TitlePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  background-color: transparent;
`;
export const WeatherIconBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  background-color: transparent;
`;
export const WeatherIcon = styled.img.attrs({
  alt: "weather icon",
})`
  width: 42px;
  background-color: transparent;
`;
export const WeatherType = styled.span`
  padding-right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #d0d0d0;
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
  fill: #d0d0d0;
  width: 16px;
  background-color: transparent;
`;
