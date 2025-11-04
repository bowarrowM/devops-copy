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
    { id: 'foundation' as const, color: 'primary', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'transformation' as const, color: 'purple', gradient: 'from-purple-500 to-pink-500' },
    { id: 'advanced' as const, color: 'orange', gradient: 'from-orange-500 to-red-500' },
    { id: 'managed' as const, color: 'green', gradient: 'from-green-500 to-emerald-500' },
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
    <section id="services" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t.services.title}</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service Tier Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedTier === tier.id
                  ? `bg-gradient-to-r ${tier.gradient} text-white shadow-lg transform scale-105`
                  : 'bg-white text-secondary-700 hover:shadow-md border-2 border-secondary-200'
              }`}
            >
              <div className="text-left">
                <div className="text-lg">{t.services.tiers[tier.id].title}</div>
                <div className={`text-xs ${selectedTier === tier.id ? 'text-white/90' : 'text-secondary-500'}`}>
                  {t.services.tiers[tier.id].description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = serviceIcons[services.findIndex(s => s.key === service.key)];
            const serviceData = t.services.items[service.key as keyof typeof t.services.items];

            return (
              <div
                key={service.key}
                className="card group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                      {selectedTier}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {serviceData.title}
                </h3>

                {/* Description */}
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {serviceData.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Özel ihtiyaçlarınız mı var?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl">
              Her proje benzersizdir. Size özel çözümler için bizimle iletişime geçin.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-secondary-50 transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Ücretsiz Danışın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
