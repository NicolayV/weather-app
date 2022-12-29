import { useState } from "react";
import * as S from "./styled";

import { ChangeEventHandler, FormEventHandler } from "react";
import { LoadCityNames } from "types";

export interface SearchFieldProps {
  fieldValue: (text: string) => void;
  currentCityHandler: (value: {
    lat: number | null;
    lon: number | null;
    name: string;
    country: string;
  }) => void;
  isOpen: boolean;
  options: LoadCityNames[];
}
export type onChange = ChangeEventHandler<HTMLInputElement>;
export type onSubmit = FormEventHandler<HTMLFormElement>;

export const SearchField = (props: SearchFieldProps) => {
  const { fieldValue, isOpen, options, currentCityHandler } = props;
  const [value, setValue] = useState("");

  const onSubmit: onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      fieldValue(value);
      setValue("");
    }
  };

  const onChangeHandler: onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.SearchInput onChange={onChangeHandler} value={value} />
      <S.Button>Add</S.Button>
      <S.SearchList show={isOpen}>
        {options.length ? (
          options.map(({ id, name, country, coord: { lat, lon } }) => {
            return (
              <S.SearchItem
                onClick={() => currentCityHandler({ lat, lon, name, country })}
                key={id}
              >
                {`${name}, ${country}`}
              </S.SearchItem>
            );
          })
        ) : (
          <S.SearchItem>
            Not found. To make search more precise put the city's name
          </S.SearchItem>
        )}
      </S.SearchList>
    </S.Form>
  );
};
