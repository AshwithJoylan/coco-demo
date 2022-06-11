import en from './en';
import { I18nTextTranslations } from './types';

export type { I18nTextTranslations };

const Languages = {
  en,
};

export const LANG_CODES = Object.keys(Languages);

export default Languages;
