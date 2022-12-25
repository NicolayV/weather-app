import { AutocompleteCityProps } from "features/search/search-slice";
import { ChangeEventHandler, FormEventHandler } from "react";

export interface SearchFieldProps {
  fieldValue: (text: string) => void;
  currentCityHandler: (value: {
    lat: number | null;
    lon: number | null;
    name: string;
    country: string;
  }) => void;
  isOpen: boolean;
  options: AutocompleteCityProps[];
}
export type onChange = ChangeEventHandler<HTMLInputElement>;
export type onSubmit = FormEventHandler<HTMLFormElement>;
