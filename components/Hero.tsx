'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { FaRocket, FaCloud, FaCogs, FaChartLine } from 'react-icons/fa';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-8 animate-slide-down">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 mb-6 animate-fade-in">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <FaCloud className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-secondary-700">Cloud Migration</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <FaCogs className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-secondary-700">CI/CD Automation</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <FaRocket className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-secondary-700">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <FaChartLine className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-secondary-700">AIOps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('services')}
          className="text-primary-600 hover:text-primary-700 transition-colors"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
