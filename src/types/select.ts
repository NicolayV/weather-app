import { Languages } from "types";

export type SelectProps = {
  value: Languages;
  options: Languages[];
  onChange: (value: Languages) => void;
};
