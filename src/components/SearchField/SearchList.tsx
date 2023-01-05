import styled from "styled-components";
import { SearchListItem } from "types";
import { SearchItem } from "./SearchItem";

interface ISearchList {
  show: boolean;
  options: SearchListItem[];
  selectedItemHandler: (
    value: Omit<SearchListItem, "id" | "weather_icon">
  ) => void;
}

export const SearchList = (props: ISearchList) => {
  const { show, options, selectedItemHandler } = props;

  return (
    <List show={show}>
      {options.length ? (
        options.map(({ id, name, country, lat, lon, weather_icon }) => {
          return (
            <SearchItem
              onClick={() => {
                selectedItemHandler({ lat, lon, name, country });
              }}
              key={Number(id)}
            >
              <span>
                {name}, {country}
              </span>
              <span>
                lat: {lat} lat: {lon}
              </span>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
              />
            </SearchItem>
          );
        })
      ) : (
        <SearchItem>
          Not found. To make search more precise put the city's name
        </SearchItem>
      )}
    </List>
  );
};

const List = styled.ul<{
  readonly show: boolean;
}>`
  width: 130px;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  border: none;
  border-radius: var(--radii);
  background-color: var(--white100);
  box-shadow: var(--base-shadow);
  z-index: 100;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 40px;
  left: 0px;

  @media (min-width: 320px) {
    width: 170px;
  }
  @media (min-width: 425px) {
    width: 200px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const WeatherIcon = styled.img.attrs({
  alt: "weather icon",
})`
  width: 24px;
  background-color: transparent;
`;
