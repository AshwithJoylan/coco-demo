import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageDetectorAsyncModule } from 'i18next';
import { findBestAvailableLanguage } from 'react-native-localize';
import { LANG_CODES } from './Translations';

const LANGUAGE_DETECTOR: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    try {
      const language = await AsyncStorage.getItem('user-language');
      console.log('language:', language)
      if (language) return callback(language);
      console.log('No language is set, choosing English as fallback');
    } catch (err) {
      console.log('Error fetching Languages from async storage ', err);
    } finally {
      const bestLanguages = findBestAvailableLanguage(LANG_CODES);
      callback(bestLanguages?.languageTag || 'en');
    }
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};


export default LANGUAGE_DETECTOR;