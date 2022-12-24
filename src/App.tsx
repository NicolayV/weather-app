import React from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/searchBar/SearchBar";
import { Card, mock } from "components/card";
import styled from "styled-components";

const App = () => {
  const dateInMs = 1642664853302;
  const date = new Date(dateInMs);
  console.log(date.toString());

  return (
    <>
      <LangSwitcher />
      <SearchBar />
      <Container>
        <Wrapper>
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
          <Card data={mock} />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  /* border: 1px solid yellow; */
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  /* border: 1px solid firebrick; */
`;
