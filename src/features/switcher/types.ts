import { Languages } from "types";

export interface UseLangProps {
  value: Languages;
  onChange: (value: Languages) => void;
  options: Languages[];
}
