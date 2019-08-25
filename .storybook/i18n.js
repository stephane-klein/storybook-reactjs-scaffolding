import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../src/translations/en/translation.json';
import translationFR from '../src/translations/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        whitelist: ['en', 'fr'],
        // lng: "en",
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        useSuspense: false
    });

export default i18n;