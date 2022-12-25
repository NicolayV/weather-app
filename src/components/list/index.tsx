import { ReactNode } from "react";
import * as S from "./styled";

export interface ListProps {
  children: ReactNode;
}

export const List = ({ children }: ListProps) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};
