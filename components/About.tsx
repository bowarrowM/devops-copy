'use client';

import { motion } from 'framer-motion';
import {
  FaGlobe, FaRocket, FaMicrochip, FaUserGraduate,
  FaCheckCircle, FaCloudscale, FaChevronRight, FaChartLine,
  FaCloud
} from 'react-icons/fa';
import { LuShieldCheck, LuOrbit, LuLanguages, LuGlobe, LuLayoutPanelTop, LuLayoutTemplate, LuCloudFog } from "react-icons/lu";

export default function About() {
  const t = {
    about: {
      title: "About Us",
      subtitle: "Your strategic partner in Agentic Ops & DevOps transformation. We bridge the gap between complex engineering and business efficiency.",
      story: {
        title: "Our Story",
        content: "Serving technology leaders across global markets, we specialize in high-stakes DevOps evolution. From Fortune 500 infrastructure to rapid-growth startups, our team brings a 'Golden Path' methodology to every engagement."
      },
      mission: {
        title: "Our Mission",
        content: "To accelerate software delivery without compromising on security or cost. We build autonomous systems that allow your engineers to focus on product, not plumbing."
      },
      advantages: {
        bilingual: {
          title: "Global-Ready Standards", // Changed from "Bilingual" to sound more like a business capability
          description: "Enterprise-grade consultancy with full documentation, architectural reviews, and high-touch support in both Turkish and English."
        },
        startup: {
          title: "High-Velocity Delivery", // "Startup DNA" is good, but "Velocity" is the buzzword for 2025
          description: "Tier-1 engineering expertise delivered with the lean agility and rapid deployment cycles of a high-growth startup."
        },
        modern: {
          title: "Agentic Ops & Autonomy",
          description: "Moving beyond static pipelines to autonomous, AI-driven agents that manage self-healing infrastructure and proactive cost-governance."
        },
        expertise: {
          title: "Platform Engineering", // SRE is moving toward "Platform Engineering"
          description: "Deep-tier specialists in Elasticsearch and Kubernetes, focused on building the 'Golden Path' for your internal developer teams."
        },
        compliance: {
          title: "Governance & Security", // "Regulated" can sound scary; "Governance" sounds professional
          description: "Security-first architecture compliant with SOC2, GDPR, and ISO standards, integrated directly into the CI/CD lifecycle."
        },
        multiCloud: {
          title: "Strategic Multi-Cloud",
          description: "Architecture-first expertise across AWS, Azure, and GCP, ensuring portability and eliminating proprietary vendor lock-in."
        }
      }
    }
  };

  const advantageKeys = [
    { key: 'bilingual', icon: <LuGlobe /> },
    { key: 'startup', icon: <LuOrbit /> },
    { key: 'modern', icon: <FaMicrochip /> },
    { key: 'expertise', icon: <LuLayoutTemplate /> },
    { key: 'compliance', icon: <LuShieldCheck /> },
    { key: 'multiCloud', icon: <LuCloudFog /> },
  ];

  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-[#a79c82]" />
              <span className="text-xs mb-5 font-bold tracking-[0.3em] uppercase text-[#a79c82]">Strategy & Expertise</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              {t.about.title}
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-light italic">
            "{t.about.subtitle}"
          </p>
        </div>

        {/* --- STORY & MISSION  --- */}
        <div className="grid lg:grid-cols-2 gap-px bg-slate-100 border border-slate-100 mt-36 mb-16 rounded-[2rem] overflow-hidden shadow-sm">
          <div className="bg-white p-5 md:p-5">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#a79c82] mb-6">{t.about.story.title}</h3>
            <p className="text-2xl text-slate-800 font-medium leading-snug tracking-tight">
              {t.about.story.content}
            </p>
          </div>
          <div className="bg-[#c8ba9a] p-12 md:p-16">
            <h3 className="text-sm font-black uppercase tracking-widest text-neutral-100 mb-6">{t.about.mission.title}  </h3>
            <p className="text-lg text-neutral-800 leading-relaxed">
              {t.about.mission.content}
            </p>
            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-100">Years</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-100">Projects</div>
              </div>
              <FaChartLine className="w-5 h-5 inline-block mt-6 ml-1 text-neutral-200" />
            </div>
          </div>
        </div>

        {/* --- ADVANTAGES (The Modern Bento Grid) --- */}




        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100 border-x border-slate-100">
          {advantageKeys.map((item, index) => {
            const data = t.about.advantages[item.key as keyof typeof t.about.advantages];
            return (
              <motion.div
                key={item.key}
                className="group relative bg-white p-10 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* --- 1. THE SIGNIFIER (The "Plus" Icon) --- */}
                <div className="absolute top-10 right-10">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    {/* Horizontal Line */}
                    <div className="absolute w-4 h-[2px] bg-slate-200 group-hover:bg-[#a79c82] transition-colors" />
                    {/* Vertical Line (Rotates to 0 to hide) */}
                    <motion.div
                      className="absolute h-4 w-[2px] bg-slate-200 group-hover:bg-[#a79c82] transition-all"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }} // Visual hint it's interactive
                      style={{ transform: "rotate(90deg)" }} // Start as a '+'
                      variants={{
                        hover: { rotate: 0 }
                      }}
                    />
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    {/* --- 2. THE VISUAL DEPTH (Subtle Border around icon) --- */}
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#a79c82] group-hover:border-[#a79c82]/30 group-hover:shadow-lg group-hover:shadow-[#a79c82]/10 transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#a79c82] transition-colors">
                        {data.title}
                      </h4>
                      {/* --- 3. THE TEXT HINT --- */}
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Explore Details
                      </span>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      {data.description}
                    </p>

                    {/* --- 4. THE EXPANDED CONTENT --- */}
                    <motion.div
                      initial={false}
                      className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500"
                    >
                      <div className="pt-6 mt-6 border-t border-slate-50">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                            <span className="w-1 h-1 rounded-full bg-[#a79c82]" />
                            Industry-standard "Golden Path" implementation
                          </li>
                          <li className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                            <span className="w-1 h-1 rounded-full bg-[#a79c82]" />
                            Full documentation in TR/EN formats
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* The "Lift" Background (Appears on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>








        {/* --- FOOTER CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 py-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-16"
        >
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Ready to evolve your engineering culture?
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Discover how our services can transform your infrastructure and accelerate your delivery pipeline.
            </p>
          </div>

          {/* Artistic Animated Indicator */}
          <div className="flex items-center gap-10 flex-shrink-0">
            <div className="flex flex-col items-end gap-2">
              <span className="text-base font-bold tracking-[0.3em] uppercase text-slate-400">
                Next
              </span>
              <span className="text-sm tracking-wider text-slate-300">
                Our Services
              </span>
            </div>

            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-[4px] border-slate-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-[4px] border-[#a79c82]/30 border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#a79c82] to-slate-400 flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaChevronRight className="rotate-90 text-white text-3xl md:text-4xl" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbital dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#a79c82] shadow-xl"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px',
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 90,
                      Math.cos(((angle + 360) * Math.PI) / 180) * 90,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 90,
                      Math.sin(((angle + 360) * Math.PI) / 180) * 90,
                    ],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>




      </div>
    </section>
  );
}