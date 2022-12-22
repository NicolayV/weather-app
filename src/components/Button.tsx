// import styled from "styled-components";

import styled from "styled-components";

export const Button = styled.button`
  padding: 1.2rem 4.5rem;
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  color: var(--white100);
  font-size: 14px;
  text-decoration: none;
  line-height: 1.5;

  border: none;
  border-radius: var(--radii);
  box-shadow: var(--button-shadow);

  cursor: pointer;

  &:hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }

  &:active {
    box-shadow: none;
  }
`;
