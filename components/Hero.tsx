'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaRocket, FaCloud, FaServer, FaChartLine, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: FaCloud, label: 'Cloud Native', color: 'from-blue-500 to-cyan-500', delay: 0 },
    { icon: FaCogs, label: 'CI/CD', color: 'from-purple-500 to-pink-500', delay: 0.1 },
    { icon: FaServer, label: 'Kubernetes', color: 'from-green-500 to-emerald-500', delay: 0.2 },
    { icon: FaShieldAlt, label: 'DevSecOps', color: 'from-orange-500 to-red-500', delay: 0.3 },
    { icon: FaChartLine, label: 'Monitoring', color: 'from-indigo-500 to-purple-500', delay: 0.4 },
    { icon: FaRocket, label: 'Automation', color: 'from-pink-500 to-rose-500', delay: 0.5 },
  ];

  const floatingElements = [
    { size: 'w-64 h-64', top: '10%', left: '5%', delay: 0, color: 'bg-blue-500/5' },
    { size: 'w-48 h-48', top: '60%', left: '80%', delay: 0.5, color: 'bg-purple-500/5' },
    { size: 'w-32 h-32', top: '30%', left: '85%', delay: 1, color: 'bg-pink-500/5' },
    { size: 'w-56 h-56', top: '70%', left: '10%', delay: 1.5, color: 'bg-cyan-500/5' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Animated gradient orbs */}
      {floatingElements.map((el, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${el.size} ${el.color} rounded-full blur-3xl`}
          style={{ top: el.top, left: el.left }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* 3D Floating geometric shapes */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          perspective: '1000px',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-white/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              rotateX: mousePosition.y * 0.5,
              rotateY: mousePosition.x * 0.5,
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            {/* Badge with animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full mb-8 font-medium text-sm shadow-2xl"
            >
              <motion.svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </motion.svg>
              <span>{t.hero.badge}</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </motion.h1>

            {/* Subtitle with glass effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons with advanced hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative group px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <span className="relative z-10">{t.hero.cta}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('services')}
                className="relative group px-8 py-4 text-lg font-semibold text-white rounded-xl border-2 border-white/20 backdrop-blur-xl overflow-hidden hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t.hero.ctaSecondary}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </motion.button>
            </motion.div>
          </div>

          {/* Feature Cards with 3D effect */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + feature.delay }}
                  whileHover={{
                    y: -10,
                    rotateY: 10,
                    rotateX: 10,
                  }}
                  className="relative group perspective-1000"
                >
                  <div className="relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                    {/* Icon */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>

                    {/* Label */}
                    <span className="relative text-sm font-semibold text-white text-center">
                      {feature.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Keşfet</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
