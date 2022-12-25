import React, { useState } from "react";
import { onChange, onSubmit, SearchFieldProps } from "../../types/search";
import * as S from "./styled";

export const SearchField = (props: SearchFieldProps) => {
  const { fieldValue } = props;
  const [value, setValue] = useState("");

  const onSubmit: onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      fieldValue(value);
      setValue("");
    }
  };
  const onChangeHandler: onChange = (e) => {
    setValue(e.target.value);
  };

  const options = ["Boston, US", "Toronto, CA", "Kiev, UA"];
  const isOpen = true;

  return (
    <S.Form onSubmit={onSubmit}>
      <S.SearchInput onChange={onChangeHandler} value={value} />
      <S.Button>Add</S.Button>

      <S.SearchList show={isOpen}>
        {options.map((option) => {
          return (
            <S.SearchItem
              // selected={isOptionSelected(option)}
              onClick={(e) => {
                e.stopPropagation();
                // selectOption(option);
                // setIsOpen(false);
              }}
              key={option}
            >
              {option}
            </S.SearchItem>
          );
        })}
      </S.SearchList>
    </S.Form>
  );
};
