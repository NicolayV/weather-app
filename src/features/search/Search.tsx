import React, { useEffect, useState } from "react";
import { SearchField } from "components/searchField";
import * as S from "./styled";
import { useAppDispatch } from "store";
import {
  loadAutocompleteCity,
  selectAutocompleteCities,
  setStatus,
} from "./search-slice";
import { useSelector } from "react-redux";
import { loadCoordCity } from "features/cities/cities-slice";
import { selectCoordCitiesSlice } from "../cities/cities-slice";

export interface CurrentCityHandlerProps {
  lat: number | null;
  lon: number | null;
  name: string;
  country: string;
}

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { list, status } = useSelector(selectAutocompleteCities);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (status === "received") {
      setIsOpen(true);
    }
    if (status !== "received") {
      setIsOpen(false);
    }
  }, [status]);

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
      dispatch(setStatus("idle"));
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <SearchField
          isOpen={isOpen}
          options={list}
          fieldValue={inputFieldValue}
          currentCityHandler={currentCityHandler}
        />
      </S.Wrapper>
    </S.Container>
  );
};
