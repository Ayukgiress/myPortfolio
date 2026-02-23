import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const isServer = typeof window === 'undefined';

const initI18n = () => {
  const chain = i18n
    .use(Backend)
    .use(initReactI18next);

  if (!isServer) {
    chain.use(LanguageDetector);
  }

  chain.init({
    fallbackLng: 'en',
    lng: isServer ? 'en' : undefined,
    debug: process.env.NODE_ENV === 'development',

    // Only load these specific languages
    supportedLngs: ['en', 'de', 'fr'],
    
    // Don't load non-explicit supported languages
    nonExplicitSupportedLngs: false,
    
    // Load only current language (not all languages)
    load: 'currentOnly',

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    ...((!isServer) && {
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      }
    }),

    ns: ['common'],
    defaultNS: 'common',
  });
};

initI18n();

export default i18n;
