'use client';

import { FaGlobe, FaRocket, FaMicrochip, FaUserGraduate, FaCheckCircle, FaCloudscale, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

export default function About() {
  // Mock translation object - replace with your actual useLanguage hook
  const t = {
    about: {
      title: "Hakkımızda",
      subtitle: "DevOps dönüşümünüzde stratejik ortağınız. Modern practices, proven frameworks, hands-on expertise",
      story: {
        title: "Hikayemiz",
        content: "Türkiye ve global pazarlarda faaliyet gösteren teknoloji şirketlerine DevOps dönüşümü konusunda danışmanlık veriyoruz. Ekibimiz, Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede deneyime sahip uzmanlardan oluşuyor."
      },
      mission: {
        title: "Misyonumuz",
        content: "Yazılım geliştirme süreçlerinizi hızlandırırken, güvenlik ve kaliteyi asla ödün vermeden iyileştirmek. Her müşterimizin benzersiz ihtiyaçlarına özel, sürdürülebilir çözümler sunmak."
      },
      stats: [
        { number: "50+", label: "Başarılı Proje" },
        { number: "15+", label: "Yıllık Deneyim" },
        { number: "98%", label: "Müşteri Memnuniyeti" }
      ],
      advantages: {
        bilingual: {
          title: "İki Dilli Hizmet",
          description: "Türkçe ve İngilizce dokümantasyon, eğitim ve destek ile global standartlarda hizmet"
        },
        startup: {
          title: "Startup DNA",
          description: "Hızlı, çevik ve maliyet-efektif çözümler. Büyük şirket deneyimi, startup çevikliği"
        },
        modern: {
          title: "Modern Teknolojiler",
          description: "En güncel DevOps araçları ve best practices ile geleceğe hazır altyapı"
        },
        expertise: {
          title: "Derin Uzmanlık",
          description: "Sertifikalı uzmanlar, kanıtlanmış metodolojiler ve gerçek dünya deneyimi"
        },
        compliance: {
          title: "Güvenlik & Uyumluluk",
          description: "SOC2, ISO27001, GDPR ve sektörel standartlara uygun güvenli çözümler"
        },
        multiCloud: {
          title: "Multi-Cloud Expertise",
          description: "AWS, Azure, GCP platformlarında certified uzmanlarla vendor lock-in olmadan çözümler"
        }
      }
    }
  };

  const advantages = [
    { key: 'bilingual', icon: FaGlobe },
    { key: 'startup', icon: FaRocket },
    { key: 'modern', icon: FaMicrochip },
    { key: 'expertise', icon: FaUserGraduate },
    { key: 'compliance', icon: FaCheckCircle },
    { key: 'multiCloud', icon: FaCloudscale },
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-white to-gray-50">

      {/* Hero Section with Story */}
      <div className="pt-20  text-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center ">
            <div className="text-4xl lg:text-5xl font-bold mb-10 heading-1">
              {t.about.title}
            </div>
            <p className="text-xl text-primary-900 leading-relaxed heading-3">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}


      {/* Story & Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Story */}
            <div className="space-y-6">

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t.about.story.title}
              </h2>
              <p className="text-lg text-primary-900 leading-relaxed">
                {t.about.story.content}
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t.about.mission.title}
              </h2>
              <p className="text-lg text-primary-900 leading-relaxed">
                {t.about.mission.content}
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className=" p-1 rounded-lg bg-gradient-to-br from-[#a79c82] to-primary-700 ">

          </div>
          <div className="text-center mb-12 mt-16 py-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Avantajlarımız
            </h2>
            <p className="text-lg text-primary-900 max-w-2xl mx-auto">
              Sizi rakiplerinizden öne çıkaran, kanıtlanmış hizmetlerimiz/yaklaşımlarımız
            </p>
          </div>

          {/* Advantages Grid */}
          <div >
            <div>

            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const advantageData = t.about.advantages[advantage.key as keyof typeof t.about.advantages];

              return (
                <div
                  key={advantage.key}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ backgroundColor: '#a79c82' }}>

                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="absolute inset-0 w-14 h-14 rounded-xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-300" style={{ backgroundColor: '#a79c82' }}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {advantageData.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {advantageData.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-10 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-50  mb-6">
            DevOps Dönüşümünüze Başlamaya Hazır mısınız?
          </h2>

        </div>
      </div>
    </section>
  );
}