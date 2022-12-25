import React from "react";
import { SearchField } from "components/searchField";
import * as S from "./styled";
import { useAppDispatch } from "store";
import { loadAutocompleteCity, selectAutocompleteCities } from "./search-slice";
import { useSelector } from "react-redux";
import { loadCoordCity } from "features/cities/cities-slice";

export interface CurrentCityHandlerProps {
  lat: number | null;
  lon: number | null;
  name: string;
  country: string;
}

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { list, status } = useSelector(selectAutocompleteCities);

  const inputFieldValue = (city: string) => {
    dispatch(loadAutocompleteCity(city));
  };

  const currentCityHandler = ({
    lat,
    lon,
    name,
    country,
  }: CurrentCityHandlerProps) => {
    if (typeof lat === "number" && typeof lon === "number") {
      const strLat = lat.toString();
      const strLon = lon.toString();
      dispatch(loadCoordCity({ name, country, strLat, strLon }));
    }
    console.log("value");
  };
  const isOpenHandler = () => {
    if (status === "received") {
      return true;
    }

    return false;
  };

  return (
    <S.Container>
      <S.Wrapper>
        <SearchField
          isOpen={isOpenHandler()}
          options={list}
          fieldValue={inputFieldValue}
          currentCityHandler={currentCityHandler}
        />
      </S.Wrapper>
    </S.Container>
  );
};
