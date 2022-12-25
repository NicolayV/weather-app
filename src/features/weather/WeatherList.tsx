import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useAppDispatch } from "store";

import { Card, CardLoading, CardProps } from "components/card";
import { selectCitiesWeather } from "./weather-selector";
import { clearCity, addCity } from "./weather-slice";
import {
  loadCurrentLocation,
  loadLocalCity,
} from "features/localCity/localCity-slice";
import { selectLocalCity } from "features/localCity/localCity-selector";

export const WeatherList = () => {
  const dispatch = useAppDispatch();

  const localCity = useSelector(selectLocalCity);

  const { list, status } = useSelector(selectCitiesWeather);

  useEffect(() => {
    if (status === "received") {
      dispatch(addCity());
      dispatch(clearCity());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (localCity.current_location === "") {
      dispatch(loadCurrentLocation(""));
    }
  }, [dispatch, localCity.current_location]);

  useEffect(() => {
    if (localCity.current_location && localCity.status === "idle") {
      dispatch(loadLocalCity(localCity.current_location));
    }
  }, [dispatch, localCity.current_location, localCity.status]);

  return (
    <>
      <Container>
        <Wrapper>
          {localCity.status === "received" ? (
            <Card {...localCity} />
          ) : (
            <CardLoading {...localCity}>
              {localCity.status === "rejected"
                ? "Cannot load local weather"
                : "Loading local weather ..."}
            </CardLoading>
          )}

          {list.map((card: CardProps) => (
            <Card key={card.id} {...card} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;
