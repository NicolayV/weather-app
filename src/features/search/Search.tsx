import React from "react";
import { useSearch } from "./useSearch";
import styled from "styled-components";
import SearchField from "components/SearchField/SearchField";

export const SearchBar = () => {
  const { isOpen, searchList, submitFieldValue, selectedListItem } =
    useSearch();

  return (
    <Container>
      <Wrapper>
        <SearchField
          isOpen={isOpen}
          options={searchList}
          submitFieldValue={submitFieldValue}
          selectedItemHandler={selectedListItem}
        />
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
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
