import React from "react";
import { SearchField } from "components/SearchField";
import { useSearch } from "./useSearch";
import * as S from "./styled";

export const SearchBar = () => {
  const { isOpen, list, inputFieldValue, handleOnSearchClick } = useSearch();

  return (
    <S.Container>
      <S.Wrapper>
        <SearchField
          isOpen={isOpen}
          options={list}
          fieldValue={inputFieldValue}
          onSearchItemClick={handleOnSearchClick}
        />
      </S.Wrapper>
    </S.Container>
  );
};
