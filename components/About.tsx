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
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {advantageData.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {advantageData.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies Section */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            {t.about.technologies}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitLab', 'GitHub Actions',
              'ArgoCD', 'Flux CD', 'Helm', 'Ansible', 'Prometheus', 'Grafana', 'Datadog', 'ELK Stack',
              'Elasticsearch', 'Kibana', 'Logstash', 'Jenkins', 'HashiCorp Vault', 'Istio', 'Consul', 'Redis'].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all transform hover:-translate-y-1"
              >
                <span className="text-white font-semibold text-sm text-center">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
