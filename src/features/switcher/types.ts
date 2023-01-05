import { Languages } from "types";

export interface UseLang {
  value: Languages;
  onChange: (value: Languages) => void;
  options: Languages[];
}
