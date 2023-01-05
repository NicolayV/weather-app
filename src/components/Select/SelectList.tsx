import { MouseEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { Languages } from "types";
import { SelectItem } from "./SelectItem";

interface ISelectList {
  onClick?: MouseEventHandler<HTMLLIElement>;
  selectItem: (option: Languages) => void;
  setIsOpen: (value: SetStateAction<boolean>) => void;
  isOptionSelected: (option: Languages) => boolean;

  show: boolean;
  options: Languages[];
}

export const SelectList = (props: ISelectList) => {
  const { show, options, isOptionSelected, setIsOpen, selectItem } = props;

  return (
    <List show={show}>
      {options.map((listItem) => {
        return (
          <SelectItem
            selected={isOptionSelected(listItem)}
            onClick={(e) => {
              e.stopPropagation();
              selectItem(listItem);
              setIsOpen(false);
            }}
            key={listItem}
          >
            {listItem}
          </SelectItem>
        );
      })}
    </List>
  );
};

const List = styled.ul<{
  readonly show: boolean;
}>`
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  border: none;
  border-radius: var(--radii);
  background-color: var(--white100);
  box-shadow: var(--base-shadow);
  z-index: 100;
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
`;
