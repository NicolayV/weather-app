import { ChangeEventHandler, FormEventHandler } from "react";
import { loadCityNamesProps } from "types";

export interface SearchFieldProps {
  fieldValue: (text: string) => void;
  currentCityHandler: (value: {
    lat: number | null;
    lon: number | null;
    name: string;
    country: string;
  }) => void;
  isOpen: boolean;
  options: loadCityNamesProps[];
}
export type onChange = ChangeEventHandler<HTMLInputElement>;
export type onSubmit = FormEventHandler<HTMLFormElement>;
