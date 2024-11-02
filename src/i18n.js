import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import khTranslation from "./locales/kh/translation.json";

const savedLanguage = localStorage.getItem('i18nextLng') || 'kh';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            kh: {
                translation: khTranslation,
            },
        },
        lng: savedLanguage,
        fallbackLng: 'kh',
        interpolation: {
            escapeValue: false
        },
    });

    i18n.on('languageChanged',(lng)=>{
        localStorage.setItem('i18nextLng',lng);
    });

export default i18n;