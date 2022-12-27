import { useTranslation } from "react-i18next";
import { CardProps } from "types";
import styled from "styled-components";

export const TempPanel = (props: CardProps) => {
  const { id, temp, temp_notation, feels_like, updateCityNotationHandler } =
    props;
  const { t } = useTranslation("translation");

  const temperature = (temp: number | null) => {
    if (temp !== null) {
      const currentTemp = Math.round(temp);
      return currentTemp > 0 ? `+ ${currentTemp}` : currentTemp;
    }
    return temp;
  };

  return (
    <Panel>
      <Section>
        <Temp>
          {temp !== null
            ? temperature(temp_notation === "celsius" ? temp : temp + 32)
            : "null"}
        </Temp>
        <TempSwitcher>
          <TempOption
            tempSelected={temp_notation === "celsius" ? true : false}
            onClick={() => updateCityNotationHandler("celsius", id)}
          >
            &deg;C
          </TempOption>
          <Divider />
          <TempOption
            tempSelected={temp_notation === "fahrenheit" ? true : false}
            onClick={() => updateCityNotationHandler("fahrenheit", id)}
          >
            &deg;F
          </TempOption>
        </TempSwitcher>
      </Section>
      <TempIndicator>
        {t("feels_like", { ns: "translation" })}:{" "}
        <span>{feels_like} &deg;C</span>
      </TempIndicator>
    </Panel>
  );
};

export interface TempOptionProps {
  readonly tempSelected: boolean;
}

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
`;
export const Section = styled(Panel)`
  flex-grow: 1;
  align-items: center;
`;
export const Temp = styled.span`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  background-color: transparent;
`;
export const TempSwitcher = styled.div`
  padding: 2px 0;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;
`;
export const TempOption = styled.span<TempOptionProps>`
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
export const TempIndicator = styled.span`
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
