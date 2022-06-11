import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LANGUAGE_DETECTOR from './languageDetector';
import Languages from './Translations';
import type { I18nTextTranslations } from './Translations';

export type { I18nTextTranslations };

i18n
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: Languages,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
