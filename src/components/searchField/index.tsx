import { useState } from "react";
import { onChange, onSubmit, SearchFieldProps } from "../../types/search";
import * as S from "./styled";

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
