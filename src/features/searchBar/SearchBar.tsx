import React from "react";
import { SearchField } from "components/searchField";
import * as S from "./styled";

export const SearchBar = () => {
  const inputFieldValue = (value: string) => {
    console.log(value);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <SearchField fieldValue={inputFieldValue} />
      </S.Wrapper>
    </S.Container>
  );
};
