import { useState, FormEventHandler } from "react";
import * as S from "./styled";
import { SearchListItem } from "types";

interface ISearchField {
  submitFieldValue: (text: string) => void;
  selectedItemHandler: (
    value: Omit<SearchListItem, "id" | "weather_icon">
  ) => void;
  isOpen: boolean;
  options: SearchListItem[];
}
export type onSubmit = FormEventHandler<HTMLFormElement>;

const SearchField = ({
  submitFieldValue,
  isOpen,
  options,
  selectedItemHandler,
}: ISearchField) => {
  const [value, setValue] = useState("");

  const onSubmit: onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      submitFieldValue(value);
      setValue("");
    }
  };

  return (
    <S.Form role="form" onSubmit={onSubmit}>
      <S.SearchInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <S.SearchButton>Add</S.SearchButton>

      <S.List show={isOpen}>
        {options.length ? (
          options.map(({ id, name, country, lat, lon, weather_icon }) => {
            return (
              <S.Li
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
                <S.WeatherIcon
                  src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
                />
              </S.Li>
            );
          })
        ) : (
          <S.Li>
            Not found. To make search more precise put the city's name
          </S.Li>
        )}
      </S.List>
    </S.Form>
  );
};

export default SearchField;
