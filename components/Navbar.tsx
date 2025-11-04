'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
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

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-colors flex items-center gap-1 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              <span>DevOps</span>
              <span className="text-xs align-super">®</span>
              <motion.div
                className="ml-2 w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 font-medium transition-colors rounded-xl ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{
                    textShadow: isScrolled ? '0 0 8px rgba(59, 130, 246, 0.5)' : '0 0 8px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className={`absolute inset-0 rounded-xl ${
                    isScrolled ? 'bg-blue-50' : 'bg-white/10'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-4"
            >
              <LanguageSwitcher />
            </motion.div>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative group ml-2 px-6 py-3 font-semibold text-white rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative z-10">{t.nav.getStarted}</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`mt-4 pb-4 pt-4 rounded-2xl ${
                isScrolled ? 'bg-slate-50/50 backdrop-blur-xl' : 'bg-white/10 backdrop-blur-xl'
              }`}>
                <div className="flex flex-col gap-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                        isScrolled
                          ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="relative group mt-2 px-4 py-3 font-semibold text-white rounded-xl overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
                    <span className="relative z-10 text-center block">{t.nav.getStarted}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
