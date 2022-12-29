import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "store";
import { selectLanguage, setLanguage } from "./langSlice";
import { UseLangProps } from "./types";
import { Languages } from "types";

const useLang = (): UseLangProps => {
  const dispatch = useAppDispatch();
  const { lang: value } = useSelector(selectLanguage);
  const { i18n } = useTranslation("translation");

  useEffect(() => {
    const onClickLanguageChange = (lang: string) => {
      i18n.changeLanguage(lang);
    };
    onClickLanguageChange(value.toLowerCase());
  }, [i18n, value]);

  const options: Languages[] = ["EN", "UA", "RU"];

  const changeHandler = (val: Languages) => {
    dispatch(setLanguage(val));
  };

  return { options, value, onChange: changeHandler };
};
export { useLang };
