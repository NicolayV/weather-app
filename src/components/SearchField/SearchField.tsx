import { useState, FormEventHandler } from "react";
import styled from "styled-components";

import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import { SearchList } from "./SearchList";
import { SearchListItem } from "types";

interface ISearchField {
  fieldValue: (text: string) => void;
  selectedItemHandler: (
    value: Omit<SearchListItem, "id" | "weather_icon">
  ) => void;
  isOpen: boolean;
  options: SearchListItem[];
}
export type onSubmit = FormEventHandler<HTMLFormElement>;

export const SearchField = (props: ISearchField) => {
  const { fieldValue, isOpen, options, selectedItemHandler } = props;
  const [value, setValue] = useState("");

  const onSubmit: onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      fieldValue(value);
      setValue("");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <SearchInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <SearchButton>Add</SearchButton>
      <SearchList
        show={isOpen}
        options={options}
        selectedItemHandler={selectedItemHandler}
      />
    </Form>
  );
};

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const WeatherIcon = styled.img.attrs({
  alt: "weather icon",
})`
  width: 24px;
  background-color: transparent;
`;
