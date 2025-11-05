'use client';

import React, { createContext, useContext } from 'react';
import { Locale, defaultLocale } from '../i18n/config';
import { getTranslations } from '../i18n/get-translations';
import { Translations } from '../i18n/types';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  locale = defaultLocale
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  const t = getTranslations(locale);

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
