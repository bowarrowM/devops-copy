import { Locale } from './config';
import { tr } from './translations/tr';
import { en } from './translations/en';
import { de } from './translations/de';

const translations = {
  tr,
  en,
  de,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.tr;
}
