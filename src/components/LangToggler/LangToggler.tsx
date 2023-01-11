import { useState } from "react";
import { Languages } from "types";
import * as S from "./styled";

interface ISelect {
  value: Languages;
  options: Languages[];
  onChange: (value: Languages) => void;
}
const LangToggler = ({ value, onChange, options }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectItem = (option: Languages) => {
    onChange(option);
  };
  const isOptionSelected = (option: Languages) => option === value;
  return (
    <S.ModeSwitcher
      role="switch"
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <S.DisplayValue role="contentinfo">{value}</S.DisplayValue>
      <S.Divider />
      {isOpen ? <S.SvgChevronDown /> : <S.SvgChevronUp />}
      <S.List show={isOpen}>
        {options.map((listItem) => {
          return (
            <S.Item
              selected={isOptionSelected(listItem)}
              onClick={(e) => {
                e.stopPropagation();
                selectItem(listItem);
                setIsOpen(false);
              }}
              key={listItem}
            >
              {listItem}
            </S.Item>
          );
        })}
      </S.List>
    </S.ModeSwitcher>
  );
};

export default LangToggler;
