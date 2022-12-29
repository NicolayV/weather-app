import styled from "styled-components";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-regular";

interface OptionsProps {
  readonly show: boolean;
}
interface OptionProps {
  readonly selected: boolean;
}

export const ModeSwitcher = styled.div`
  width: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  position: relative;
  &:focus {
    border-color: #3c99dc;
  }
`;
export const Value = styled.span`
  flex-grow: 1;
  color: #b4b4b4;
  font-weight: 600;
  line-height: 1.5;
`;
export const Divider = styled.div`
  background-color: #b4b4b4;
  align-self: stretch;
  width: 1px;
`;
export const SvgChevronUp = styled(ChevronUp)`
  fill: #b4b4b4;
`;
export const SvgChevronDown = styled(ChevronDown)`
  fill: #b4b4b4;
`;
export const Options = styled.ul<OptionsProps>`
  width: 100%;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  border: none;
  border-radius: 5px;
  background-color: "#ececeec";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 100;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
`;
export const Option = styled.li<OptionProps>`
  padding: 2px 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
  background-color: ${(props) => (props.selected ? "#d0d0d0" : "")};
`;
