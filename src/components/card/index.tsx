import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

export const mock = {
  cod: "200",
  message: 0,
  list: [
    {
      main: {
        temp: 284.13,
        feels_like: 283.53,
        pressure: 983,
        humidity: 86,
      },
      weather: [
        {
          main: "Rain",
          icon: "10d",
        },
      ],
      wind: {
        speed: 10.96,
      },
      dt_txt: "2022-12-23 21:00:00",
    },
    {},
  ],
  city: {
    id: 4930956,
    name: "Boston",
    country: "US",
    timezone: -18000,
    sunrise: 1671797465,
    sunset: 1671830129,
  },
};

export interface CardProps {
  data: any;
}

export const Card = (props: CardProps) => {
  const {
    data: { list, city },
  } = props;

  const { main, weather, wind, dt_txt } = list[0];
  const { name, country } = city;

  return (
    <CardEl>
      <CloseButton>
        <SvgClose />
      </CloseButton>
      <Header>
        <TitlePanel>
          <Title>
            {name}, {country}
          </Title>
          <SubTitle>{dt_txt}</SubTitle>
        </TitlePanel>

        <WeatherIconBar>
          <WeatherIcon>{weather[0].icon}</WeatherIcon>
          <WeatherType>{weather[0].main}</WeatherType>
        </WeatherIconBar>
      </Header>

      <Chart>Chart</Chart>

      <Footer>
        <TemperaturePanel>
          <TemperatureSection>
            <Temperature>{main.temp}</Temperature>

            <TemperatureSwitcher>
              <CelsiusTemperature>&deg;C</CelsiusTemperature>
              <Divider />
              <FahrenheitTemperature>&deg;F</FahrenheitTemperature>
            </TemperatureSwitcher>
          </TemperatureSection>
          <TemperatureIndicator>
            Feels like: <span>{main.feels_like} &deg;C</span>
          </TemperatureIndicator>
        </TemperaturePanel>

        <WeatherPanel>
          <WeatherIndicator>
            Wind: <span>{wind.speed} m/s</span>
          </WeatherIndicator>
          <WeatherIndicator>
            Humidity: <span>{main.humidity}%</span>
          </WeatherIndicator>
          <WeatherIndicator>
            Pressure: <span>{main.pressure}Pa</span>
          </WeatherIndicator>
        </WeatherPanel>
      </Footer>
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

  position: relative;

  /* border: 1px solid red; */
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

//
export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;

  position: absolute;
  right: 2px;
  top: 2px;
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
  /* border: 1px solid red; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  /* border: 1px solid green; */
`;

//
//
export const TitlePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: transparent;
  /* border: 1px solid blue; */
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
  gap: 20px;

  background-color: transparent;
  border: 0.5px solid blue;
`;
export const WeatherIcon = styled.div``;
export const WeatherType = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #d0d0d0;
  background-color: transparent;
`;
//
//
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  background-color: transparent;
  border: 0.5px solid blue;
`;
//
//
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;

  /* border: 1px solid violet; */
`;
export const TemperaturePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;

  /* border: 1px solid blue; */
`;
export const TemperatureSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  /* border: 1px solid blue; */
`;
export const Temperature = styled.span`
  padding-top: 15px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  background-color: transparent;
  /* border: 1px solid blue; */
`;
export const TemperatureSwitcher = styled.div`
  padding: 2px 0;
  align-self: flex-start;
  /* border: 1px solid blue; */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;
`;

export const Divider = styled.div`
  background-color: #808080;
  align-self: stretch;
  width: 1px;
`;

export const CelsiusTemperature = styled.span`
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
`;

export const FahrenheitTemperature = styled.span`
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  color: #d0d0d0;
  cursor: pointer;
`;

export const TemperatureIndicator = styled.span`
  font-size: 10px;
  font-weight: 800;
  color: #d0d0d0;
  display: flex;
  justify-content: center;
  background-color: transparent;
  display: flex;
  gap: 5px;

  & span {
    font-size: inherit;
    font-weight: inherit;
    color: #b4b4b4;
    background-color: transparent;
  }
`;
//
//
export const WeatherPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;

  background-color: transparent;
  /* border: 1px solid blue; */
`;

export const WeatherIndicator = styled.span`
  font-size: 10px;
  font-weight: 800;
  background-color: transparent;
  display: flex;
  gap: 5px;

  & span {
    font-size: inherit;
    font-weight: inherit;
    background-color: transparent;
    color: #3c99dc;
  }
`;
