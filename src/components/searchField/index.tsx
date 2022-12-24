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

  return (
    <S.Form onSubmit={onSubmit}>
      <S.SearchInput onChange={onChangeHandler} value={value} />
      <S.Button>Add</S.Button>
    </S.Form>
  );
};
