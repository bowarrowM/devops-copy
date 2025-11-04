'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useState } from 'react';
import {
  FaSearch, FaCodeBranch, FaCloud, FaDocker, FaCode, FaShieldAlt,
  FaCubes, FaChartLine, FaDollarSign, FaHeadset
} from 'react-icons/fa';

const serviceIcons = [
  FaSearch, FaCodeBranch, FaCloud, FaDocker, FaCode,
  FaShieldAlt, FaCubes, FaChartLine, FaDollarSign, FaHeadset
];

export default function Services() {
  const { t } = useLanguage();
  const [selectedTier, setSelectedTier] = useState<'foundation' | 'transformation' | 'advanced' | 'managed'>('foundation');

  const tiers = [
    { id: 'foundation' as const, gradient: 'from-blue-500 to-cyan-600' },
    { id: 'transformation' as const, gradient: 'from-purple-500 to-pink-600' },
    { id: 'advanced' as const, gradient: 'from-orange-500 to-red-600' },
    { id: 'managed' as const, gradient: 'from-green-500 to-emerald-600' },
  ];

  const services = [
    { key: 'assessment', tier: 'foundation' },
    { key: 'cicd', tier: 'foundation' },
    { key: 'cloudMigration', tier: 'foundation' },
    { key: 'kubernetes', tier: 'transformation' },
    { key: 'iac', tier: 'transformation' },
    { key: 'devsecops', tier: 'transformation' },
    { key: 'platform', tier: 'advanced' },
    { key: 'aiops', tier: 'advanced' },
    { key: 'finops', tier: 'advanced' },
    { key: 'managed', tier: 'managed' },
  ];

  const filteredServices = services.filter(s => s.tier === selectedTier);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">{t.services.title}</h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service Tier Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                selectedTier === tier.id
                  ? `bg-gradient-to-r ${tier.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-secondary-700 hover:shadow-md border-2 border-secondary-200 hover:border-secondary-300'
              }`}
            >
              <div className="text-center">
                <div className="text-base mb-1">{t.services.tiers[tier.id].title}</div>
                <div className={`text-xs ${selectedTier === tier.id ? 'text-white/80' : 'text-secondary-500'}`}>
                  {t.services.tiers[tier.id].description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => {
            const Icon = serviceIcons[services.findIndex(s => s.key === service.key)];
            const serviceData = t.services.items[service.key as keyof typeof t.services.items];

            return (
              <div
                key={service.key}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-secondary-100 hover:border-primary-200 hover:-translate-y-1 group"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary-900 mb-4 leading-tight">
                  {serviceData.title}
                </h3>

                {/* Description */}
                <p className="text-secondary-600 leading-relaxed">
                  {serviceData.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 pt-6 border-t border-secondary-100">
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Detayları Gör
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Projeniz için özel bir çözüm mü arıyorsunuz?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz, işletmenizin benzersiz ihtiyaçlarına özel DevOps stratejileri geliştirmek için hazır.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 font-bold py-4 px-10 rounded-xl hover:bg-primary-50 transition-all transform hover:-translate-y-1 shadow-lg text-lg"
            >
              Ücretsiz Danışın
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
