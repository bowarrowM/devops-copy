'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tiers = [
    { id: 'foundation' as const, gradient: 'from-blue-500 to-cyan-600', glow: 'rgba(59, 130, 246, 0.3)' },
    { id: 'transformation' as const, gradient: 'from-purple-500 to-pink-600', glow: 'rgba(139, 92, 246, 0.3)' },
    { id: 'advanced' as const, gradient: 'from-orange-500 to-red-600', glow: 'rgba(249, 115, 22, 0.3)' },
    { id: 'managed' as const, gradient: 'from-green-500 to-emerald-600', glow: 'rgba(16, 185, 129, 0.3)' },
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
  const selectedTierData = tiers.find(t => t.id === selectedTier);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service Tier Tabs with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tiers.map((tier) => (
            <motion.button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative px-8 py-5 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                selectedTier === tier.id
                  ? 'text-white shadow-2xl scale-105'
                  : 'bg-white text-slate-700 hover:shadow-lg border-2 border-slate-200 hover:border-slate-300'
              }`}
              whileHover={{ scale: selectedTier === tier.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedTier === tier.id && (
                <>
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${tier.gradient}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-50 blur-xl"
                    style={{ background: tier.glow }}
                  />
                </>
              )}
              <div className="relative z-10 text-center">
                <div className="text-base mb-1">{t.services.tiers[tier.id].title}</div>
                <div className={`text-xs ${selectedTier === tier.id ? 'text-white/80' : 'text-slate-500'}`}>
                  {t.services.tiers[tier.id].description}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Service Cards with advanced animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredServices.map((service, index) => {
              const Icon = serviceIcons[services.findIndex(s => s.key === service.key)];
              const serviceData = t.services.items[service.key as keyof typeof t.services.items];
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-100 overflow-hidden transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${selectedTierData?.gradient} opacity-0 transition-opacity duration-300`}
                      animate={{ opacity: isHovered ? 0.05 : 0 }}
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 blur-2xl transition-opacity duration-300"
                      style={{ background: selectedTierData?.glow }}
                      animate={{ opacity: isHovered ? 0.3 : 0 }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with 3D effect */}
                      <motion.div
                        className="mb-6"
                        animate={{
                          rotateY: isHovered ? 180 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedTierData?.gradient} flex items-center justify-center text-white shadow-lg`}>
                          <Icon className="w-10 h-10" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                        {serviceData.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {serviceData.description}
                      </p>

                      {/* Learn More Link with animation */}
                      <motion.div
                        className="pt-6 border-t border-slate-100"
                        whileHover={{ x: 5 }}
                      >
                        <button className={`bg-gradient-to-r ${selectedTierData?.gradient} bg-clip-text text-transparent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all`}>
                          Detayları Gör
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            animate={{ x: isHovered ? 5 : 0 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </button>
                      </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${selectedTierData?.gradient} opacity-0 blur-2xl transition-opacity`}
                      animate={{ opacity: isHovered ? 0.2 : 0 }}
                    />
                    <motion.div
                      className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${selectedTierData?.gradient} opacity-0 blur-2xl transition-opacity`}
                      animate={{ opacity: isHovered ? 0.2 : 0 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section with advanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.2),transparent_50%)]" />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t.servicesCta.title}
              </motion.h3>
              <motion.p
                className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t.servicesCta.description}
              </motion.p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative group bg-white text-slate-900 font-bold py-5 px-12 rounded-2xl overflow-hidden shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative z-10">{t.servicesCta.button}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
