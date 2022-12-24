import { ChangeEventHandler, FormEventHandler } from "react";

export interface SearchFieldProps {
  fieldValue: (text: string) => void;
}
export type onChange = ChangeEventHandler<HTMLInputElement>;
export type onSubmit = FormEventHandler<HTMLFormElement>;
