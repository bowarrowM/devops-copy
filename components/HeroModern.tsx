'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Button from './atoms/Button';

const CALENDLY_URL = 'https://calendly.com/devops-info/30min';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `
      linear-gradient(to right, rgb(59, 130, 246, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(59, 130, 246, 0.1) 1px, transparent 1px)
    `,
        backgroundSize: '80px 80px'
      }} />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
      }} />

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-20">

          {/* Left Column - Main Message */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
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
                className="bg-[#BDB193]/75 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-[#DDD3B5]/70 hover:border-white/30"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Column - Quick Links/Features */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Neden DevOps?
            </h2>
            <div className="space-y-4">
              {['Hızlı deployment döngüleri', 'Otomatik CI/CD pipeline\'ları', 'Cloud-native altyapı', 'Sürekli izleme ve optimizasyon'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#BDB193' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
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
