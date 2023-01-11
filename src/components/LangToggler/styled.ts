import styled from "styled-components";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-regular";

export const ModeSwitcher = styled.div`
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
export const DisplayValue = styled.span`
  flex-grow: 1;
  color: var(--grey300);
  font-weight: var(--fw-normal);
  line-height: 1.5;
`;
export const Divider = styled.div`
  background-color: var(--grey300);
  align-self: stretch;
  width: 1px;
`;
export const SvgChevronUp = styled(ChevronUp)`
  fill: var(--grey300);
`;
export const SvgChevronDown = styled(ChevronDown)`
  fill: var(--grey300);
`;
export const List = styled.ul<{
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

export const Item = styled.li<{
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
