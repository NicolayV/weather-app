import styled from "styled-components";

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
