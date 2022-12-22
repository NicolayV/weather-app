import styled from "styled-components";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-regular";

import { OptionProps, OptionsProps } from "types";

export const Container = styled.div`
  width: 50px;
  padding: 5px;

  display: flex;
  align-items: center;
  gap: 5px;

  border: 1px solid #ececec;
  border-radius: 5px;
  outline: none;

  position: relative;

  &:focus {
    border-color: #d0d0d0;
  }
`;
export const Value = styled.span`
  flex-grow: 1;
  color: #d0d0d0;
  font-weight: 600;
`;
export const Divider = styled.div`
  background-color: #ececec;
  align-self: stretch;
  width: 1px;
`;
export const SvgChevronUp = styled(ChevronUp)`
  fill: #d0d0d0;
`;
export const SvgChevronDown = styled(ChevronDown)`
  fill: #d0d0d0;
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
  background-color: ${(props) => (props.highlighted ? "#ececec" : "")};
  background-color: ${(props) => (props.selected ? "#d0d0d0" : "")};
`;
