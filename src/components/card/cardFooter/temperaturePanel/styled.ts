import styled from "styled-components";

export interface TemperatureOptionProps {
  readonly tempSelected: boolean;
}

export const TemperaturePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;

  /* border: 1px solid blue; */
`;
export const TemperatureSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  /* border: 1px solid blue; */
`;
export const Temperature = styled.span`
  padding-top: 15px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  background-color: transparent;
  /* border: 1px solid blue; */
`;
export const TemperatureSwitcher = styled.div`
  padding: 2px 0;
  align-self: flex-start;
  /* border: 1px solid blue; */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;
`;
export const TemperatureOption = styled.span<TemperatureOptionProps>`
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.tempSelected ? "#111517" : "#d0d0d0")};

  &:hover {
    color: #3c99dc;
  }
`;
export const Divider = styled.div`
  background-color: #808080;
  align-self: stretch;
  width: 1px;
`;
export const TemperatureIndicator = styled.span`
  font-size: 10px;
  font-weight: 800;
  color: #d0d0d0;
  display: flex;
  justify-content: center;
  background-color: transparent;
  display: flex;
  gap: 5px;

  & span {
    font-size: inherit;
    font-weight: inherit;
    color: #b4b4b4;
    background-color: transparent;
  }
`;
