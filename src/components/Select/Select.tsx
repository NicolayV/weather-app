import { useState } from "react";
import { Languages } from "types";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-regular";
import { SelectList } from "./SelectList";

interface ISelect {
  value: Languages;
  options: Languages[];
  onChange: (value: Languages) => void;
}

export const Select = (props: ISelect) => {
  const { value, onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const selectItem = (option: Languages) => {
    onChange(option);
  };

  const isOptionSelected = (option: Languages) => option === value;

  return (
    <ModeSwitcher
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <DisplayValue>{value}</DisplayValue>
      <Divider />
      {isOpen ? <SvgChevronDown /> : <SvgChevronUp />}
      <SelectList
        show={isOpen}
        options={options}
        isOptionSelected={isOptionSelected}
        selectItem={selectItem}
        setIsOpen={setIsOpen}
      />
    </ModeSwitcher>
  );
};

const ModeSwitcher = styled.div`
  width: 50px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--grey300);
  border-radius: var(--radii);
  outline: none;
  cursor: pointer;
  position: relative;
  &:focus {
    border-color: var(--blue400);
  }
`;
const DisplayValue = styled.span`
  flex-grow: 1;
  color: var(--grey300);
  font-weight: var(--fw-normal);
  line-height: 1.5;
`;
const Divider = styled.div`
  background-color: var(--grey300);
  align-self: stretch;
  width: 1px;
`;
const SvgChevronUp = styled(ChevronUp)`
  fill: var(--grey300);
`;
const SvgChevronDown = styled(ChevronDown)`
  fill: var(--grey300);
`;
