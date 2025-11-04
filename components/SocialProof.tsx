'use client';

export default function SocialProof() {
  const clients = [
    'Trendyol', 'Getir', 'Hepsiburada', 'N11', 'GittiGidiyor',
    'BiTaksi', 'Yemeksepeti', 'Sahibinden'
  ];

  const stats = [
    { value: '50+', label: 'Başarılı Proje' },
    { value: '30+', label: 'Mutlu Müşteri' },
    { value: '%99', label: 'Başarı Oranı' },
    { value: '5+', label: 'Yıllık Deneyim' },
  ];

  return (
    <section className="py-16 bg-white border-y border-secondary-100">
      <div className="container-custom">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-secondary-500 uppercase tracking-wide">
            Güvenilir Markalar Bize Güveniyor
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-all border border-secondary-100 hover:border-primary-200"
            >
              <span className="text-secondary-600 font-semibold text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
