import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import enCommon from '../../locales/en/common.json';
import deCommon from '../../locales/de/common.json';
import frCommon from '../../locales/fr/common.json';


const isServer = typeof window === 'undefined';

export const defaultNS = 'common';
export const resources = {
  en: { common: enCommon },
  de: { common: deCommon },
  fr: { common: frCommon },
};

if (!i18n.isInitialized) {
  if (isServer) {
    // Server-side rendering: load translations inline so we don't need to
    // make HTTP requests. Node's fetch can't resolve relative URLs.
    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'fr'],
        nonExplicitSupportedLngs: false,
        load: 'currentOnly',
        ns: [defaultNS],
        defaultNS,
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
      });
  } else {
    // Client-side: use the HTTP backend to fetch translations at runtime
    // (so adding a new language doesn't require a redeploy) and the
    // language detector to remember the user's choice.
    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'fr'],
        nonExplicitSupportedLngs: false,
        load: 'currentOnly',
        ns: [defaultNS],
        defaultNS,
        interpolation: { escapeValue: false },
        debug: process.env.NODE_ENV === 'development',
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
          order: ['localStorage', 'navigator', 'htmlTag'],
          caches: ['localStorage'],
        },
        react: { useSuspense: false },
      });
  }
}

export default i18n;
