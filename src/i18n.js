import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('i18nextLng') || 'kh';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
      backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',  // Note: no './src' or './public'
      },
      lng: savedLanguage,
      fallbackLng: 'kh',
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
          escapeValue: false
      },
  });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

i18n.on('failedLoading', (lng, ns, msg) => {
    console.error(`Failed loading: ${ns} for language: ${lng}, Message: ${msg}`);
});

export default i18n;
