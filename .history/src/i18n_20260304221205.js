import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    lng: localStorage.getItem('language') || 'ar',
    fallbackLng: 'ar',
    interpolation: { 
      escapeValue: false 
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;