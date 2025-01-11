import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('i18nextLng') || 'kh';

i18n
  .use(HttpBackend) // use the HttpBackend
  .use(initReactI18next) // pass the i18n instance to react-i18next module
  .init({
      backend: {
          // Correcting the path to ensure it points to the public directory
          loadPath: '/locales/{{lng}}/{{ns}}.json', // Assuming public/locales/ structure
      },
      lng: savedLanguage,
      fallbackLng: 'kh',
      ns: ['translation'], // namespaces
      defaultNS: 'translation',
      interpolation: {
          escapeValue: false // not needed for React as it escapes by default
      },
  });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng); // save the new language preference
});

// Error handling for loading translation files
i18n.on('failedLoading', (lng, ns, msg) => {
    console.error(`Failed loading: ${ns} for language: ${lng}, Message: ${msg}`);
    // Optionally, implement additional logic such as notifications to users, retries, or fallbacks.
});

export default i18n;
