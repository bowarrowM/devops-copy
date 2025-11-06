'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: any;
  color: string;
  category: string;
  description?: string;
}

export default function TechStack() {
  const { t } = useLanguage();

  // Cloud platforms
  const cloudPlatforms: Technology[] = [
    {
      name: 'AWS',
      icon: SiAmazonaws,
      color: '#FF9900',
      category: 'cloud',
      description: t.techStack.cloudPlatforms.aws
    },
    {
      name: 'Microsoft Azure',
      icon: SiMicrosoftazure,
      color: '#0089D6',
      category: 'cloud',
      description: t.techStack.cloudPlatforms.azure
    },
    {
      name: 'Google Cloud',
      icon: SiGooglecloud,
      color: '#4285F4',
      category: 'cloud',
      description: t.techStack.cloudPlatforms.gcp
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.techStack.title}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        {/* Cloud Platforms - Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {t.techStack.cloudPlatforms.title}
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.techStack.cloudPlatforms.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudPlatforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                      style={{ backgroundColor: `${platform.color}15` }}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col items-center text-center">
                      {/* Large icon */}
                      <motion.div
                        className="w-28 h-28 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg group-hover:shadow-xl transition-shadow"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          className="w-16 h-16"
                          style={{ color: platform.color }}
                        />
                      </motion.div>

                      {/* Platform name */}
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">
                        {platform.name}
                      </h4>

                      {/* Services */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: platform.color }}
                    />
                    <div
                      className="absolute bottom-4 left-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: platform.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            t.techStack.badges.cloudNative,
            t.techStack.badges.multiCloud,
            t.techStack.badges.production,
            t.techStack.badges.enterprise,
          ].map((badge, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 text-blue-700 font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
