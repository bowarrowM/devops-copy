'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
            >
              <span>DevOps</span>
              <span className="text-xs align-super">®</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t.nav.contact}
            </button>
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-secondary-200 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full text-center"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
