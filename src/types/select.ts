export interface OptionsProps {
  readonly show: boolean;
}

export interface OptionProps {
  readonly highlighted: boolean;
  readonly selected: boolean;
}

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
};
