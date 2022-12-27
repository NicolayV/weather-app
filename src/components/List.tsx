import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

interface ListProps {
  children: ReactNode;
}

export const List = ({ children }: ListProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;
