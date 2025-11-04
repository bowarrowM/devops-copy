'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface Stat {
  value: number;
  target: number;
  suffix: string;
  label: string;
}

export default function StatsDisplay() {
  const { t } = useLanguage();

  const [stats, setStats] = useState<Stat[]>([
    { value: 0, target: 5, suffix: '+', label: t.stats.experience },
    { value: 0, target: 50, suffix: '+', label: t.stats.projects },
    { value: 0, target: 30, suffix: '+', label: t.stats.clients },
    { value: 0, target: 99, suffix: '%', label: t.stats.success },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.value < stat.target) {
            const increment = stat.target / steps;
            const newValue = Math.min(stat.value + increment, stat.target);
            return { ...stat, value: newValue };
          }
          return stat;
        })
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-lg transition-all duration-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-10 transition-opacity"
              style={{
                clipPath: `circle(${(stat.value / stat.target) * 100}% at 50% 50%)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {Math.round(stat.value)}
              {stat.suffix}
            </div>
            <div className="text-sm md:text-base text-secondary-600 font-medium">
              {stat.label}
            </div>

            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - stat.value / stat.target)}`}
                transform="rotate(-90 50 50)"
                className="transition-all duration-1000"
              />
            </svg>
          </div>

          {/* Sparkle effect */}
          {stat.value >= stat.target && (
            <div className="absolute top-2 right-2">
              <svg className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
