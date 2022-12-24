import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Enter city here...",
}))`
  border: none;
  outline: none;
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 100%);
  line-height: 1.5;

  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 300px;
`;

export const Button = styled.button.attrs((props) => ({
  type: "submit",
}))`
  padding: 10px 35px;
  color: hsl(0, 0%, 100%);
  background-color: #66d3fa;

  font-size: 10px;
  text-decoration: none;
  line-height: 1.5;

  border: none;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  cursor: pointer;

  &:hover {
    background-color: #3c99dc;
  }

  &:active {
    box-shadow: none;
  }
`;
