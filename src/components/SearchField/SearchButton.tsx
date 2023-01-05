import styled from "styled-components";

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
