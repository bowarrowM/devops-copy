'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { FaClock, FaDollarSign, FaShieldAlt, FaRocket, FaHeadset, FaAward } from 'react-icons/fa';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: FaClock,
      key: 'fastResult',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FaDollarSign,
      key: 'costOptimization',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: FaShieldAlt,
      key: 'security',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: FaRocket,
      key: 'fasterDeploy',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaHeadset,
      key: 'support',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: FaAward,
      key: 'provenSuccess',
      gradient: 'from-yellow-500 to-orange-600'
    },
  ] as const;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">{t.whyChooseUs.title}</h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const benefitData = t.whyChooseUs.benefits[benefit.key];
            return (
              <div
                key={benefit.key}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-8 border border-secondary-100 hover:border-primary-200 group overflow-hidden"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Background Gradient (subtle) */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                      {benefitData.stat}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {benefitData.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefitData.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-16 border-t border-secondary-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-primary-600 font-semibold mb-2">{t.whyChooseUs.trustBar.awsPartner.badge}</div>
              <p className="text-sm text-secondary-600">{t.whyChooseUs.trustBar.awsPartner.description}</p>
            </div>
            <div>
              <div className="text-primary-600 font-semibold mb-2">{t.whyChooseUs.trustBar.iso.badge}</div>
              <p className="text-sm text-secondary-600">{t.whyChooseUs.trustBar.iso.description}</p>
            </div>
            <div>
              <div className="text-primary-600 font-semibold mb-2">{t.whyChooseUs.trustBar.kvkk.badge}</div>
              <p className="text-sm text-secondary-600">{t.whyChooseUs.trustBar.kvkk.description}</p>
            </div>
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
