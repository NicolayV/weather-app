import { useState } from "react";
import { Languages } from "types";
import * as S from "./styled";

export type SelectProps = {
  value: Languages;
  options: Languages[];
  onChange: (value: Languages) => void;
};

export const Select = (props: SelectProps) => {
  const { value, onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: Languages) => {
    onChange(option);
  };

  const isOptionSelected = (option: Languages) => {
    return option === value;
  };

  return (
    <S.ModeSwitcher
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <S.Value>{value}</S.Value>
      <S.Divider />
      {isOpen ? <S.SvgChevronDown /> : <S.SvgChevronUp />}
      <S.Options show={isOpen}>
        {options.map((option) => {
          return (
            <S.Option
              selected={isOptionSelected(option)}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option}
            >
              {option}
            </S.Option>
          );
        })}
      </S.Options>
    </S.ModeSwitcher>
  );
};
