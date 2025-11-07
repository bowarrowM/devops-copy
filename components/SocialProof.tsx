'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

/**
 * Social Proof Section
 *
 * Displays immediate trust signals:
 * - Key statistics
 * - Featured testimonial
 * - Trust badges
 */
export default function SocialProof() {
  const { t } = useLanguage();

  // Stats to display
  const stats = [
    {
      value: '50+',
      label: 'Projects Delivered',
      icon: '🚀',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: '⭐',
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: '💬',
    },
    {
      value: '2 Weeks',
      label: 'Average Setup Time',
      icon: '⚡',
    },
  ];

  // Trust badges
  const badges = [
    { name: 'AWS Partner', icon: '☁️' },
    { name: 'ISO 27001', icon: '🔒' },
    { name: 'KVKK Compliant', icon: '✓' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-neutral-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card-lg card-gradient border border-neutral-200 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-primary-500/10 text-8xl leading-none">
              "
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning-500 w-5 h-5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-neutral-800 mb-6 leading-relaxed">
                "DevOps transformed our infrastructure in just 6 weeks. We went from manual deployments to fully automated CI/CD with 99.9% uptime. Game changer for our team."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  AS
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Ahmet Şahin</div>
                  <div className="text-neutral-600">CTO, TechCorp</div>
                  <div className="text-sm text-neutral-500">Series B SaaS • 50 employees</div>
                </div>
              </div>

              {/* Results badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="badge badge-success gap-2">
                  <FaCheckCircle />
                  87% faster deployments
                </div>
                <div className="badge badge-success gap-2">
                  <FaCheckCircle />
                  $240K saved/year
                </div>
                <div className="badge badge-success gap-2">
                  <FaCheckCircle />
                  99.9% uptime
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="text-sm text-neutral-600 mb-6 font-medium">
            Security & Compliance You Can Trust
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-semibold text-neutral-700">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
