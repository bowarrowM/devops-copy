'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { locales, localeNames, localeFlags, Locale } from '@/lib/i18n/config';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocalePath = (targetLocale: Locale) => {
    // Get current path without locale prefix
    let currentPath = pathname || '/';

    // Remove current locale prefix if exists
    if (currentPath.startsWith('/en')) {
      currentPath = currentPath.substring(3) || '/';
    } else if (currentPath.startsWith('/de')) {
      currentPath = currentPath.substring(3) || '/';
    }

    // Build new path with target locale
    if (targetLocale === 'tr') {
      // Turkish is default, no prefix
      return currentPath;
    } else {
      // Other languages use prefix
      return `/${targetLocale}${currentPath === '/' ? '' : currentPath}`;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isScrolled
            ? 'hover:bg-neutral-100 text-neutral-700'
            : 'hover:bg-white/10 text-white/90'
        }`}
        aria-label="Change language"
      >
        <span className="text-xl">{localeFlags[locale]}</span>
        <span className="text-sm font-medium">{locale.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-neutral-200 py-1 z-50">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={getLocalePath(loc)}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[#DDD3B5]/10 hover:text-primary-600 transition-colors ${
                locale === loc ? 'bg-[#DDD3B5]/20 text-primary-800' : 'text-neutral-700'
              }`}
            >
              <span className="text-xl">{localeFlags[loc]}</span>
              <span className="text-sm font-medium">{localeNames[loc]}</span>
              {locale === loc && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
