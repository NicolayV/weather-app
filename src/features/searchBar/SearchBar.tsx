import React from "react";
import { SearchField } from "components/searchField";
import * as S from "./styled";
import { useAppDispatch } from "store";
import { loadCityByName } from "../weather/weather-slice";

export const SearchBar = () => {
  const dispatch = useAppDispatch();

  const inputFieldValue = (city: string) => {
    dispatch(loadCityByName(city));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <SearchField fieldValue={inputFieldValue} />
      </S.Wrapper>
    </S.Container>
  );
};
