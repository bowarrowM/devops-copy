'use client';

import { FaClock, FaDollarSign, FaShieldAlt, FaRocket, FaHeadset, FaAward } from 'react-icons/fa';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: FaClock,
      title: 'Hızlı Sonuç',
      description: 'İlk 30 günde somut iyileştirmeler görün',
      stat: '2-4 Hafta',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FaDollarSign,
      title: 'Maliyet Optimizasyonu',
      description: 'Bulut maliyetlerinizi ortalama %40 azaltıyoruz',
      stat: '%30-50',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenlik & Compliance',
      description: 'KVKK, ISO 27001 uyumlu çözümler',
      stat: '100%',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: FaRocket,
      title: 'Daha Hızlı Deploy',
      description: 'Deploy sıklığını 10x artırın',
      stat: '10x',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaHeadset,
      title: '7/24 Destek',
      description: 'Türkçe teknik destek ve monitoring',
      stat: '24/7',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: FaAward,
      title: 'Kanıtlanmış Başarı',
      description: '50+ başarılı proje portföyü',
      stat: '%99',
      gradient: 'from-yellow-500 to-orange-600'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Neden DevOps?</h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Türkiye'nin en deneyimli DevOps ekibi ile dijital dönüşümünüzü hızlandırın
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
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
                      {benefit.stat}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-16 border-t border-secondary-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-primary-600 font-semibold mb-2">🏆 AWS Partner</div>
              <p className="text-sm text-secondary-600">Sertifikalı AWS çözüm ortağı</p>
            </div>
            <div>
              <div className="text-primary-600 font-semibold mb-2">🔒 ISO 27001</div>
              <p className="text-sm text-secondary-600">Uluslararası güvenlik standardı</p>
            </div>
            <div>
              <div className="text-primary-600 font-semibold mb-2">✓ KVKK Uyumlu</div>
              <p className="text-sm text-secondary-600">Veri koruma kanununa tam uyum</p>
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
