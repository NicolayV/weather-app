import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { setLanguage } from "./lang-slice";
import { selectLanguage } from "./lang-selector";
import { Languages } from "types";

interface UseLangProps {
  (): {
    value: Languages;
    onChange: (value: Languages) => void;
    options: Languages[];
  };
}

const useLang: UseLangProps = () => {
  const dispatch = useAppDispatch();
  const { lang: value } = useSelector(selectLanguage);

  const options: Languages[] = ["EN", "UA", "RU"];

  const changeHandler = (value: Languages) => {
    dispatch(setLanguage(value));
  };

  return { options, value, onChange: changeHandler };
};
export { useLang };
