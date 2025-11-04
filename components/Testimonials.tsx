'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      position: 'CTO',
      company: 'TechStartup A.Ş.',
      content: 'DevOps ekibi sayesinde deployment süremizi 2 saatten 15 dakikaya indirdik. Kubernetes migrasyonumuz sorunsuz tamamlandı ve artık günde 10+ deploy yapabiliyoruz.',
      rating: 5,
      result: '%87 Daha Hızlı Deploy'
    },
    {
      name: 'Ayşe Demir',
      position: 'Yazılım Müdürü',
      company: 'E-Ticaret Ltd.',
      content: 'CI/CD pipeline kurulumu ve AWS optimizasyonu ile hem maliyetlerimiz %40 düştü hem de sistem güvenilirliği arttı. Profesyonel yaklaşımları ve sürekli destekleri çok değerli.',
      rating: 5,
      result: '%40 Maliyet Tasarrufu'
    },
    {
      name: 'Can Öztürk',
      position: 'DevOps Lead',
      company: 'FinTech Şirketi',
      content: 'DevSecOps entegrasyonu konusunda uzman desteği aldık. KVKK uyumluluğu ve güvenlik taraması otomasyonları sayesinde hem compliant hem de hızlı bir development sürecine geçtik.',
      rating: 5,
      result: '100% Compliance'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Türkiye'nin önde gelen şirketleri DevOps dönüşümü için bizi tercih ediyor
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-secondary-100 hover:border-primary-200 group"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-6">
                <FaQuoteLeft className="text-4xl text-primary-200" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-secondary-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  ✓ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-secondary-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600">
                      {testimonial.position} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-secondary-700 mb-6">
            Siz de başarı hikayenizi yazmak ister misiniz?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-10 py-4"
          >
            Ücretsiz Danışmanlık Alın
          </button>
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
