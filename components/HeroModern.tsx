'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaClock, FaDollarSign } from 'react-icons/fa';
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

  // Key benefits displayed as feature cards
  const benefits = [
    {
      icon: FaRocket,
      title: '10x Faster',
      description: 'Deploy in minutes, not hours',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: FaShieldAlt,
      title: '99.9% Uptime',
      description: 'Production-ready infrastructure',
      gradient: 'from-success-500 to-success-600',
    },
    {
      icon: FaClock,
      title: '2-Week Setup',
      description: 'From assessment to production',
      gradient: 'from-warning-500 to-warning-600',
    },
    {
      icon: FaDollarSign,
      title: 'ROI in Year 1',
      description: 'Transparent, fixed pricing',
      gradient: 'from-primary-600 to-primary-700',
    },
  ];

  // Client logos (placeholder - replace with real logos)
  const clients = [
    'AWS Partner',
    'ISO 27001',
    'KVKK Compliant',
    'Kubernetes Certified',
    'DevSecOps Ready',
  ];

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
              <span>Trusted by 50+ Companies</span>
            </motion.div>

            {/* Headline - Clear Value Proposition */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="text-gradient-hero">
                Deploy Faster. Scale Smarter.
              </span>
            </motion.h1>

            {/* Subheadline - Benefit-driven */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your infrastructure with DevOps automation that cuts deployment time by 90% and eliminates manual errors.
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
                Get Free Assessment
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              >
                View Services
              </Button>
            </motion.div>

            {/* Trust Bar - Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary-200/60 text-sm"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-success-500 rounded-full" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Benefit Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative glass p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`} />

                    {/* Icon */}
                    <div className="relative mb-4 inline-flex">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="relative text-sm text-primary-200/80">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
