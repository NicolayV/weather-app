import styled from "styled-components";

export interface SearchListProps {
  readonly show: boolean;
}

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: relative;
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

  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (min-width: 320px) {
    width: 170px;
  }
  @media (min-width: 425px) {
    width: 200px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: "submit",
}))`
  padding: 10px 15px;
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

  @media (min-width: 320px) {
    padding: 10px 20px;
  }
  @media (min-width: 425px) {
    padding: 10px 25px;
  }
  @media (min-width: 768px) {
    padding: 10px 35px;
  }
`;

export const SearchList = styled.ul<SearchListProps>`
  width: 130px;
  margin: 0;
  padding: 5px 0;
  list-style: none;
  border: none;
  border-radius: 5px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 100;

  display: ${(props) => (props.show ? "block" : "none")};

  position: absolute;
  top: 40px;
  left: 0px;

  @media (min-width: 320px) {
    width: 170px;
  }
  @media (min-width: 425px) {
    width: 200px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;
export const SearchItem = styled.li`
  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
`;
