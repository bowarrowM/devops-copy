'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Button from './atoms/Button';

/**
 * Modern Hero Component - 2025 Redesign
 *
 * Conversion-optimized hero section with:
 * - Clear value proposition
 * - Benefit-driven messaging
 * - Strategic CTAs
 * - Social proof
 * - Minimal, purposeful animations
 *
 * Design Philosophy: Stripe × Vercel × Linear
 */
export default function HeroModern() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Removed fake metrics and client badges per user request for professional corporate presentation

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-900 to-primary-800"
    >
      {/* Simplified background - CSS grid pattern only */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Single gradient orb - static, subtle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom section-padding-lg relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-16">
            {/* Badge - Simple, focused */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 text-white/90 text-sm font-medium shadow-xl"
            >
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Headline - Clear Value Proposition */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="text-gradient-hero">
                {t.hero.title}
              </span>
            </motion.h1>

            {/* Subheadline - Benefit-driven */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs - Strategic placement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={<FaRocket />}
                iconPosition="right"
                className="shadow-2xl"
              >
                {t.hero.cta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              >
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-wider">
          {t.hero.badge || 'Explore'}
        </span>
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.button>
    </section>
  );
}
