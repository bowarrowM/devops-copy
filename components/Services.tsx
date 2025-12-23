'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuSearch, LuGitBranch, LuCloud, LuBrainCircuit,
  LuTerminal, LuContainer, LuShieldCheck, LuActivity,
  LuCoins, LuChevronRight, LuHeadphones
} from "react-icons/lu";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();
  const [selectedTier, setSelectedTier] = useState<'foundation' | 'transformation' | 'advanced'>('foundation');

  const tiers = [
    { id: 'foundation' as const, label: t.services.tiers.foundation.title },
    { id: 'transformation' as const, label: t.services.tiers.transformation.title },
    { id: 'advanced' as const, label: t.services.tiers.advanced.title },
  ];

  const services = [
    { key: 'assessment', tier: 'foundation', icon: LuSearch },
    { key: 'gitops', tier: 'foundation', icon: LuGitBranch },
    { key: 'cloudMigration', tier: 'foundation', icon: LuCloud },
    { key: 'llmops', tier: 'transformation', icon: LuBrainCircuit },
    { key: 'platform', tier: 'transformation', icon: LuTerminal },
    { key: 'kubernetes', tier: 'transformation', icon: LuContainer },
    { key: 'devsecops', tier: 'advanced', icon: LuShieldCheck },
    { key: 'aiops', tier: 'advanced', icon: LuActivity },
    { key: 'finops', tier: 'advanced', icon: LuCoins, hasDashboard: true },
  ];

  const filteredServices = services.filter(s => s.tier === selectedTier);

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Top Border Indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-slate-200 to-transparent" />

      <div className="container-custom">
        {/* --- Header: Clean & Bold --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a79c82]">Capabilities</span>
              <div className="h-px w-12 bg-[#a79c82]" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none">
              {t.services.title.split(' ')[0]} <br />
              <span className="text-[#a79c82] italic font-light tracking-normal">{t.services.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xl text-slate-500 font-light leading-relaxed border-l border-slate-100 pl-8">
              {t.services.subtitle}
            </p>
          </div>
        </div>

        {/* --- Minimalist Navigator --- */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-20 border-b border-slate-100 pb-8">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className="group relative flex items-center gap-3 outline-none"
            >
              <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 ${selectedTier === tier.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-500'
                }`}>
                {tier.label}
              </span>
              {selectedTier === tier.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute -bottom-8 left-0 right-0 h-1 bg-[#a79c82]"
                />
              )}
            </button>
          ))}
        </div>

        {/* --- Content Grid --- */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100"
            >
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                const serviceData = t.services.items[service.key as keyof typeof t.services.items];

                return (
                  <div
                    key={service.key}
                    className="group relative bg-white p-8 hover:bg-neutral-50 transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-12">
                        <div className="text-slate-300 group-hover:text-[#a79c82] group-hover:scale-110 transition-all duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-mono text-slate-200 group-hover:text-[#a79c82]">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                        {serviceData.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed mb-12 font-light line-clamp-4">
                        {serviceData.description}
                      </p>

                      <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                        {service.hasDashboard ? (
                          <Link href="/services/finops" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#a79c82] hover:gap-3 transition-all">
                            Live Preview <FaExternalLinkAlt size={8} />
                          </Link>
                        ) : (
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-[#a79c82] transition-colors">
                            Expertise Focus
                          </span>
                        )}
                        <LuChevronRight className="text-slate-200 group-hover:text-[#a79c82] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}