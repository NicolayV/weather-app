import { CardProps } from "types";
import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

export const CardHeader = (props: CardProps) => {
  const {
    id,
    name,
    country,
    dt,
    weather_icon,
    weather_description,
    deleteHandler,
  } = props;

  const date = new Date(dt ? dt * 1000 : 0)
    .toUTCString()
    .slice(0, -7)
    .split(" ")
    .filter((word) => word !== "2022")
    .join(" ");

  return (
    <Header>
      <CloseButton onClick={() => deleteHandler(id)}>
        <SvgClose />
      </CloseButton>

      <TitlePanel>
        <Title>
          {name}, {country}
        </Title>
        <SubTitle>{date}</SubTitle>
      </TitlePanel>

      <WeatherIconBar>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
        />
        <WeatherType>{weather_description}</WeatherType>
      </WeatherIconBar>
    </Header>
  );
};

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
