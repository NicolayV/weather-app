import React from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/searchBar/SearchBar";
import { WeatherList } from "features/weather/WeatherList";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <LangSwitcher />
      <button
        onClick={() => {
          console.log("first");
          return changeLanguage("en");
        }}
      >
        EN
      </button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <div>{t("text")}</div>
      <SearchBar />
      <WeatherList />
    </>
  );
};

export default App;
