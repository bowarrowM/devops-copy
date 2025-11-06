'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';

/**
 * Modern "Why Choose Us" Component
 *
 * Uses Before/After framework to highlight transformation
 * More conversion-focused than generic benefits list
 */
export default function WhyChooseUsModern() {
  const { t } = useLanguage();

  // Before/After comparisons
  const comparisons = [
    {
      before: 'Manual deployments taking hours',
      after: 'Automated CI/CD in minutes',
      icon: '🚀',
    },
    {
      before: 'Frequent downtime and incidents',
      after: '99.9% uptime guaranteed',
      icon: '⚡',
    },
    {
      before: 'No visibility into systems',
      after: 'Full observability with monitoring',
      icon: '📊',
    },
    {
      before: 'Security as an afterthought',
      after: 'DevSecOps built-in from day one',
      icon: '🔒',
    },
    {
      before: 'High cloud costs, no optimization',
      after: 'FinOps with cost tracking & reduction',
      icon: '💰',
    },
    {
      before: 'Manual infrastructure management',
      after: 'Infrastructure as Code with GitOps',
      icon: '⚙️',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="heading-2 mb-6">
            <span className="text-gradient">
              Transform Your DevOps
            </span>
          </h2>
          <p className="body-large">
            Stop fighting fires. Start shipping features.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Column Headers */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-error-50 border border-error-200">
                <FaTimes className="text-error-500" />
                <span className="font-bold text-error-700">Before DevOps</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-success-50 border border-success-200">
                <FaCheck className="text-success-500" />
                <span className="font-bold text-success-700">After DevOps</span>
              </div>
            </motion.div>
          </div>

          {/* Comparisons */}
          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center"
              >
                {/* Before */}
                <div className="card card-flat border-l-4 border-error-500 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-error-100 flex items-center justify-center">
                      <FaTimes className="text-error-500 text-xl" />
                    </div>
                    <p className="text-neutral-700 line-through opacity-75 flex-1">
                      {item.before}
                    </p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 items-center justify-center shadow-primary z-10">
                  <FaArrowRight className="text-white" />
                </div>

                {/* After */}
                <div className="card card-gradient border-l-4 border-success-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center shadow-success text-2xl">
                      {item.icon}
                    </div>
                    <p className="text-neutral-800 font-medium flex-1">
                      {item.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-neutral-700 mb-6">
              Ready to see these results in your organization?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary btn-lg shadow-primary"
            >
              Get Your Free Assessment
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
