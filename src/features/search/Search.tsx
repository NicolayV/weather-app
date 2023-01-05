import React from "react";
import { useSearch } from "./useSearch";
import styled from "styled-components";
import { SearchField } from "components/SearchField/SearchField";

export const SearchBar = () => {
  const { isOpen, searchList, inputFieldValue, handleOnSearchClick } =
    useSearch();

  return (
    <Container>
      <Wrapper>
        <SearchField
          isOpen={isOpen}
          options={searchList}
          fieldValue={inputFieldValue}
          selectedItemHandler={handleOnSearchClick}
        />
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-bottom: 10rem;
  gap: 0.5rem;
`;
