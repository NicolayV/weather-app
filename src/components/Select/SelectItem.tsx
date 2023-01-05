import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface ISelectItem {
  children: ReactNode;
  selected: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
  key: string;
}

export const SelectItem = (props: ISelectItem) => {
  return <Item {...props}>{props.children}</Item>;
};

const Item = styled.li<{
  readonly selected: boolean;
}>`
  padding: 0.2rem 0.5rem;
  font-weight: var(--fw-normal);
  cursor: pointer;
  &:hover {
    background-color: var(--grey100);
  }
  background-color: ${({ selected }) => (selected ? "var(--grey200)" : "")};
`;
