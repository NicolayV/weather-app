import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./translation/english/translation.json";
import translationUkrainian from "./translation/ukrainian/translation.json";
import translationRussian from "./translation/russian/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ua: {
    translation: translationUkrainian,
  },
  ru: {
    translation: translationRussian,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18next;
