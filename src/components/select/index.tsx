import { useState } from "react";
import { SelectOption, SelectProps } from "types";
import * as S from "./styled";

export const Select = (props: SelectProps) => {
  const { value, onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const selectOption = (option: SelectOption) => {
    onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option.label === value.label;
  };

  return (
    <S.Container
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <S.Value>{value.label}</S.Value>
      <S.Divider />
      {isOpen ? <S.SvgChevronDown /> : <S.SvgChevronUp />}
      <S.Options show={isOpen}>
        {options.map((option, index) => {
          return (
            <S.Option
              selected={isOptionSelected(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
              highlighted={highlightedIndex === index}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option.label}
            >
              {option.label}
            </S.Option>
          );
        })}
      </S.Options>
    </S.Container>
  );
};
