import { WeatherCard } from "types";
import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

interface ICardHeader
  extends Pick<
    WeatherCard,
    | "id"
    | "name"
    | "country"
    | "dt"
    | "weather_icon"
    | "weather_description"
    | "deleteCardHandler"
  > {}

export const CardHeader = (props: ICardHeader) => {
  const {
    id,
    name,
    country,
    dt,
    weather_icon,
    weather_description,
    deleteCardHandler,
  } = props;

  const date = new Date(dt ? Number(dt) : 0)
    .toUTCString()
    .slice(0, -7)
    .split(" ")
    .filter((word) => word !== "2023")
    .join(" ");

  return (
    <Header>
      <CloseButton onClick={() => deleteCardHandler(id)}>
        <SvgClose />
      </CloseButton>

      <TitlePanel>
        <Title>
          {name ? name : "N/A"}, {country ? country : "N/A"}
        </Title>
        <SubTitle>{date ? date : "N/A"}</SubTitle>
      </TitlePanel>

      <WeatherIconBar>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
        />
        <WeatherType>
          {weather_description ? weather_description : "N/A"}
        </WeatherType>
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
  gap: 1rem;
  background-color: transparent;
`;

export const Title = styled.div`
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
