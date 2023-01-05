import { useTranslation } from "react-i18next";
import { WeatherCard } from "types";
import styled from "styled-components";

interface ITempPanel
  extends Pick<
    WeatherCard,
    "id" | "temp" | "temp_unit" | "feels_like" | "toggleTempUnitHandler"
  > {}

export const TempPanel = (props: ITempPanel) => {
  const { id, temp, temp_unit, feels_like, toggleTempUnitHandler } = props;
  const { t } = useTranslation("translation");

  const tempTransmitter = (temp: string): string => {
    const tmp = Number(temp);
    if (tmp) {
      return tmp > 0 ? "+" + temp : temp;
    }
    return "N/A";
  };

  return (
    <Panel>
      <Section>
        <Temp>
          {temp
            ? tempTransmitter(
                temp_unit === "celsius" ? temp : (Number(temp) + 32).toString()
              )
            : "null"}
        </Temp>
        <TempSwitcher>
          <TempOption
            isSelected={temp_unit === "celsius" ? true : false}
            onClick={() => toggleTempUnitHandler(id)}
          >
            &deg;C
          </TempOption>
          <Divider />
          <TempOption
            isSelected={temp_unit === "fahrenheit" ? true : false}
            onClick={() => toggleTempUnitHandler(id)}
          >
            &deg;F
          </TempOption>
        </TempSwitcher>
      </Section>
      <TempIndicator>
        {t("feels_like", { ns: "translation" })}:
        <span>{feels_like} &deg;C</span>
      </TempIndicator>
    </Panel>
  );
};

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
  font-size: var(--fs-18);
  font-weight: var(--fw-normal);
  display: flex;
  background-color: transparent;
`;
export const TempSwitcher = styled.div`
  padding: 0.2rem 0;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
`;
export const TempOption = styled.span<{
  readonly isSelected: boolean;
}>`
  font-size: var(--fs-14);
  font-weight: var(--fw-normal);
  background-color: transparent;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#111517" : "var(--grey200)")};
  &:hover {
    color: var(--blue400);
  }
`;
export const Divider = styled.div`
  background-color: var(--grey600);
  align-self: stretch;
  width: 1px;
`;
export const TempIndicator = styled.span`
  font-size: var(--fs-10);
  font-weight: var(--fw-bold);
  color: var(--grey200);
  display: flex;
  justify-content: center;
  background-color: transparent;
  display: flex;
  gap: 0.5rem;
  & span {
    font-size: inherit;
    font-weight: inherit;
    color: var(--grey300);
    background-color: transparent;
  }
`;
