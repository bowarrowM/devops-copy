import { tr } from './translations/tr';
import { en } from './translations/en';
import { de } from './translations/de';
import type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  tr,
  en,
  de,
};

export const defaultLanguage: Language = 'tr';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations[defaultLanguage];
}
