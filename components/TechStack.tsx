'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  SiGithub, SiGitlab, SiSnyk, SiArgo, SiKubernetes,
  SiTerraform, SiHashicorp, SiPrometheus, SiElasticsearch,
  SiCheckio, SiSonarqube, SiBitbucket, SiTrivy,
} from 'react-icons/si';
import { HiShieldCheck } from "react-icons/hi2";
import { LuActivity, LuTerminal } from "react-icons/lu";

export default function TechStack() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const technologies = [
    // --- Git & Delivery ---
    { name: 'GitHub Enterprise', icon: SiGithub, color: '#181717', category: 'git', level: 'Core' },
    { name: 'GitLab Ultimate', icon: SiGitlab, color: '#FC6D26', category: 'git', level: 'Advanced' },
    { name: 'ArgoCD', icon: SiArgo, color: '#EF7B4D', category: 'delivery', level: 'GitOps' },

    // --- Security & Policy (DevSecOps Focus) ---
    { name: 'Snyk', icon: SiSnyk, color: '#4C4A73', category: 'security', level: 'Shift-Left' },
    { name: 'HashiCorp Vault', icon: SiHashicorp, color: '#000000', category: 'security', level: 'Secrets' },
    { name: 'OPA / Kyverno', icon: HiShieldCheck, color: '#00A86B', category: 'security', level: 'Policy-as-Code' },
    { name: 'Trivy', icon: SiTrivy, color: '#2496ED', category: 'security', level: 'Scanning' },
    { name: 'Checkov', icon: SiCheckio, color: '#2496ED', category: 'security', level: 'IaC Security' },

    // --- SRE & Platform ---
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'platform', level: 'Orchestration' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'platform', level: 'Provisioning' },
    { name: 'OpenTelemetry', icon: LuActivity, color: '#000000', category: 'sre', level: 'Observability' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', category: 'sre', level: 'Metrics' },
  ];

  const categories = [
    { id: 'all', label: t.techStack.allTools || 'Tüm Ekosistem' },
    { id: 'git', label: t.techStack.categories.gitops || 'Git & Source' },
    { id: 'security', label: t.techStack.categories.security || 'Security & Policy' },
    { id: 'platform', label: t.techStack.categories.container || 'Platform Eng.' },
    { id: 'sre', label: t.techStack.categories.monitoring || 'SRE & Obs.' },
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container-custom">

        {/* --- SECTION HEADER --- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#a79c82]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a79c82] mb-4 ">
              Technical Foundation
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                {t.techStack.title.split(' ')[0]} <br />
                <span className="text-[#a79c82] italic font-light tracking-normal">
                  {t.techStack.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-4 pb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-500 font-light border-l border-slate-100 pl-6 leading-relaxed">
                {t.techStack.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">

          {/* --- LEFT: ARCHITECTURAL NAVIGATION --- */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-10">
                <LuTerminal size={14} className="text-[#a79c82]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Filter_Stack</span>
              </div>

              <nav className="flex flex-col gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group flex items-center justify-between text-left outline-none py-1"
                  >
                    <span className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.id ? 'text-slate-900 translate-x-2' : 'text-slate-300 group-hover:text-slate-500'
                      }`}>
                      {cat.label}
                    </span>
                    {activeCategory === cat.id && (
                      <motion.div
                        layoutId="activePointer"
                        className="w-1 h-1 rounded-full bg-[#a79c82]"
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-20 pt-10 border-t border-slate-50">
                <div className="text-[9px] text-slate-300 uppercase tracking-[0.2em] mb-4">Integrity Status</div>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest leading-loose">
                  Focusing on <span className="text-slate-900">Production-Grade</span> <br />
                  DevSecOps Tooling.
                </p>
              </div>
            </div>
          </aside>

          {/* --- RIGHT: TECHNICAL GRID --- */}
          <main className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              <AnimatePresence mode="popLayout">
                {(activeCategory === 'all' ? technologies : technologies.filter(t => t.category === activeCategory)).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group bg-white p-10 hover:bg-slate-50/80 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div className="grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">
                        <tech.icon size={34} style={{ color: tech.color }} />
                      </div>
                      <span className="text-[9px] font-mono text-slate-200 group-hover:text-[#a79c82] transition-colors">
                        MTX-0{index + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-1 tracking-tight italic">
                      {tech.name}
                    </h4>

                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#a79c82]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#a79c82]">
                        {tech.level}
                      </span>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">
                        Systems Ready // Verified 2025
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </main>

        </div>
      </div>
    </section>
  );
}