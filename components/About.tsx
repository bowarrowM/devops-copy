'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { FaGlobe, FaRocket, FaMicrochip, FaUserGraduate, FaCheckCircle, FaCloudscale } from 'react-icons/fa';

export default function About() {
  const { t } = useLanguage();

  const advantages = [
    { key: 'bilingual', icon: FaGlobe, gradient: 'from-blue-500 to-cyan-500' },
    { key: 'startup', icon: FaRocket, gradient: 'from-purple-500 to-pink-500' },
    { key: 'modern', icon: FaMicrochip, gradient: 'from-orange-500 to-red-500' },
    { key: 'expertise', icon: FaUserGraduate, gradient: 'from-green-500 to-emerald-500' },
    { key: 'compliance', icon: FaCheckCircle, gradient: 'from-indigo-500 to-blue-500' },
    { key: 'multiCloud', icon: FaCloudscale, gradient: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t.about.title}</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const advantageData = t.about.advantages[advantage.key as keyof typeof t.about.advantages];

            return (
              <div
                key={advantage.key}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card h-full">
                  {/* Gradient Icon Background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {advantageData.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {advantageData.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
