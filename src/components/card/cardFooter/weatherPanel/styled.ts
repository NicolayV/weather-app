import styled from "styled-components";

export const WeatherPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;

  background-color: transparent;
  /* border: 1px solid blue; */
`;

export const WeatherIndicator = styled.span`
  font-size: 10px;
  font-weight: 800;
  background-color: transparent;
  display: flex;
  gap: 5px;

  & span {
    font-size: inherit;
    font-weight: inherit;
    background-color: transparent;
    color: #3c99dc;
  }
`;
