import React from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/searchBar/SearchBar";
import { Card } from "components/card";
import styled from "styled-components";

const mock = {
  cod: "200",
  message: 0,
  list: [
    {
      main: {
        temp: 284.13,
        feels_like: 283.53,
        pressure: 983,
        humidity: 86,
      },
      weather: [
        {
          main: "Rain",
          icon: "10d",
        },
      ],
      wind: {
        speed: 10.96,
      },
      dt_txt: "2022-12-23 21:00:00",
    },
    {},
  ],
  city: {
    id: 4930956,
    name: "Boston",
    country: "US",
    timezone: -18000,
    sunrise: 1671797465,
    sunset: 1671830129,
  },
};

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
