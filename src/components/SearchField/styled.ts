import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
`;
export const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Enter city here...",
}))`
  border: none;
  outline: none;
  color: #111517;
  background-color: var(--white100);
  line-height: 1.5;
  padding: 1rem;
  border-radius: var(--radii);
  box-shadow: var(--element-shadow);
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
export const SearchButton = styled.button.attrs((props) => ({
  type: "submit",
}))`
  padding: 10px 15px;
  color: var(--grey100);
  background-color: var(--blue200);
  font-size: var(--fs-10);
  text-decoration: none;
  line-height: 1.5;
  border: none;
  border-radius: var(--radii);
  box-shadow: var(--element-shadow);
  cursor: pointer;
  &:hover {
    background-color: var(--blue400);
  }
  &:active {
    box-shadow: none;
  }
  @media (min-width: 320px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 425px) {
    padding: 1rem 2.5rem;
  }
  @media (min-width: 768px) {
    padding: 1rem, 3.5rem;
  }
`;
export const List = styled.ul<{
  readonly show: boolean;
}>`
  width: 130px;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  border: none;
  border-radius: var(--radii);
  background-color: var(--white100);
  box-shadow: var(--base-shadow);
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

export const WeatherIcon = styled.img.attrs({
  alt: "weather icon",
})`
  width: 24px;
  background-color: transparent;
`;
export const Li = styled.li`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  & * {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  &:hover {
    background-color: var(--grey100);
  }

  & :first-child {
    flex-grow: 1;
  }
  & :nth-child(2) {
    color: var(--blue200);
  }
`;
