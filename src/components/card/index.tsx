import React, { ReactNode } from "react";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";
import { ChartLine } from "./chart";

import * as S from "./styled";

export interface CardProps {
  id: number | null;
  name: string;
  country: string;
  dt_txt: string;
  dt: number | null;
  weather_icon: string | null;
  weather_description: string;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
  deleteHandler: (id: number | null) => void;
  updateCityNotationHandler: (
    notation: "celsius" | "fahrenheit",
    id: number | null
  ) => void;
  forecast: any[];
}
//   forecast: {
//     dt: number;
//     temp: number;
//     dt_tx: string;
//   }[];
// }

export interface CardLoadingProps
  extends Omit<CardProps, "deleteHandler" | "updateCityNotationHandler"> {
  children: ReactNode;
}

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
