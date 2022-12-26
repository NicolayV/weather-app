import { CardLoadingProps, CardProps } from "types";
import { CardFooter } from "./footer";
import { CardHeader } from "./header";
import { ChartLine } from "./chart";

import * as S from "./styled";

export const CardLoading = (props: CardLoadingProps) => {
  return (
    <S.CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <S.Loading>{props.children}</S.Loading>
    </S.CardEl>
  );
};

export const Card = (props: CardProps) => {
  return (
    <S.CardEl main={props.temp ? Math.sign(props.temp) : -1}>
      <CardHeader {...props} />
      <S.Chart>
        <ChartLine {...props} />
      </S.Chart>
      <CardFooter {...props} />
    </S.CardEl>
  );
};
