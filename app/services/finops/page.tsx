'use client';

import React, { useState } from 'react';
import {
  LuTrendingDown, LuCpu, LuShieldCheck, LuZap,
  LuChevronRight, LuActivity, LuBrainCircuit, LuSearch,
  LuDollarSign, LuSettings2, LuLayoutDashboard,
  LuChevronLeft
} from "react-icons/lu";
import { FiDatabase, FiTarget } from "react-icons/fi";
import { motion } from 'framer-motion';
import Link from 'next/link';

const ChicFinOpsDashboard = () => {
  const [isAutoFix, setIsAutoFix] = useState(true);

  return (

    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 p-6 md:p-12 font-sans">
      {/* --- PERSISTENT NAVIGATION OVERLAY --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Demo Mode</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs font-medium text-slate-200">FinOps Framework v2.4</span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/services/finops">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-all border border-white/5">
                <LuChevronLeft /> Back to Service
              </button>
            </Link>

            <Link href="/#services">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                Exit Demo
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* --- HEADER --- */}
      <header className="max-w-7xl mx-auto mt-20 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <LuLayoutDashboard /> Internal Framework v2.4
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Autonomous FinOps <span className="text-slate-700">|</span> <span className="text-slate-400 font-light text-3xl">Cloud Control</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full flex items-center gap-2 text-xs">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-slate-400">Elastic Cluster: </span> <span className="text-emerald-400 font-mono">Active</span>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <LuSearch size={18} /> Deep Audit
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* --- STAT CARDS --- */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Monthly Savings', val: '$14,120.00', sub: '18% decrease vs last month', icon: <LuDollarSign />, color: 'text-emerald-400' },
            { label: 'Cluster Health', val: '99.99%', sub: 'All 42 nodes operational', icon: <FiDatabase />, color: 'text-blue-400' },
            { label: 'Latency', val: '132.4ms', sub: '18% decrease vs last month', icon: <LuZap />, color: 'text-orange-400' }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111114] border border-white/5 p-8 rounded-[2rem] relative group overflow-hidden"
            >
              <div className="relative z-10">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{card.label}</p>
                <h3 className={`text-4xl font-black mb-2 ${card.color}`}>{card.val}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {card.sub}
                </p>
              </div>
              <div className="absolute top-6 right-8 text-slate-800 group-hover:text-slate-700 transition-colors">
                {React.cloneElement(card.icon as React.ReactElement, { size: 40 })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LEFT: AGENTIC ACTIONS --- */}
        <section className="lg:col-span-8 bg-[#111114] border border-white/5 rounded-[2.5rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl"><LuActivity /></span>
              Autonomous Actions
            </h3>
            <LuSearch className="text-slate-600 cursor-pointer hover:text-white transition" />
          </div>

          <div className="p-4 space-y-3">
            {[
              { time: '09:45 AM', agent: 'FinOps Agent', msg: 'Scaled down unused staging cluster in US-East-2.', save: '$210/mo', type: 'Optimize' },
              { time: '09:30 AM', agent: 'Monitor Agent', msg: 'Scaled down unlisted staging cluster search on logs-prod-2.', save: '$210/mo', type: 'Scaling' },
              { time: '08:30 AM', agent: 'Monitor Agent', msg: 'Re-indexed cluster for 22% faster Response Time', save: 'Security', type: 'Elastic' },
              { time: '08:00 AM', agent: 'Security Agent', msg: 'Auto-patched critical CVE on API gateway.', save: 'Security', type: 'Security' }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition group">
                <div className="flex items-start gap-6">
                  <span className="text-[10px] font-mono text-slate-600 mt-1">{log.time}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{log.agent}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-md">{log.msg}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {log.save}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- RIGHT: CONTROL PANEL --- */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#111114] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-white/[0.02] rotate-12">
              <LuBrainCircuit size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><LuShieldCheck /></span>
                  <span className="text-sm font-bold text-white">Auto-Fix enabled</span>
                </div>
                <button
                  onClick={() => setIsAutoFix(!isAutoFix)}
                  className={`w-12 h-6 rounded-full transition-all relative ${isAutoFix ? 'bg-emerald-500' : 'bg-slate-800'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${isAutoFix ? 'left-7' : 'left-1'}`} />
                </button>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <LuSettings2 size={14} /> Activity Settings
                </h4>
                <div className="space-y-4">
                  {['Cluster Metrics', 'Platform Metrics', 'Traces', 'Audit Logs'].map((item) => (
                    <div key={item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{item}</span>
                      <LuChevronRight className="text-slate-700" size={14} />
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-xs font-bold text-white transition-all uppercase tracking-widest">
                Re-scan Infrastructure
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/5 rounded-[2.5rem] p-8">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <FiTarget className="text-indigo-400" /> Strategic Target
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Consultant Note: Your Elasticsearch shard allocation is uneven. The agent is waiting for 02:00 AM UTC to re-balance.
            </p>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-indigo-500 rounded-full" />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ChicFinOpsDashboard;