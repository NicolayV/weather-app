import { useEffect } from "react";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { Languages } from "types";
import { useTranslation } from "react-i18next";
import { selectLanguage, setLanguage } from "./lang-slice";

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
  const { i18n } = useTranslation("translation");

  useEffect(() => {
    const onClickLanguageChange = (language: string) => {
      i18n.changeLanguage(language);
    };
    onClickLanguageChange(value.toLowerCase());
  }, [i18n, value]);

  const options: Languages[] = ["EN", "UA", "RU"];

  const changeHandler = (value: Languages) => {
    dispatch(setLanguage(value));
  };

  return { options, value, onChange: changeHandler };
};
export { useLang };
