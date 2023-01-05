import { ReactNode } from "react";
import styled from "styled-components";
import { SearchListItem } from "types";

interface ISearchItem {
  children: ReactNode;
  onClick?: () => void;
  selectedItemHandler?: (
    value: Omit<SearchListItem, "id" | "weather_icon">
  ) => void;
  key?: number | null;
}

const SearchItem = (props: ISearchItem) => {
  return <Li {...props}>{props.children}</Li>;
};

const Li = styled.li`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  & * {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  &:hover {
    background-color: var(--grey100);
  }

  & :first-child {
    flex-grow: 1;
  }
  & :nth-child(2) {
    color: var(--blue200);
  }
`;

export { SearchItem };
