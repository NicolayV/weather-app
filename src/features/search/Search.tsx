import React from "react";
import { useSearch } from "./useSearch";
import * as S from "./styled";
import { SearchField } from "components/searchField";

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
