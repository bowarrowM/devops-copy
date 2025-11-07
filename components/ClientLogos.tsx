'use client';

import { motion } from 'framer-motion';
import { FaAward, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

/**
 * Client Logos & Trust Indicators Component
 *
 * Showcases client companies, certifications, and trust badges
 */
export default function ClientLogos() {
  // Client companies (anonymized with industry indicators)
  const clients = [
    { name: 'MegaShop', industry: 'E-Commerce', size: '500+' },
    { name: 'PayFlow', industry: 'FinTech', size: '200+' },
    { name: 'CloudCRM', industry: 'SaaS', size: '150+' },
    { name: 'HealthConnect', industry: 'Healthcare', size: '300+' },
    { name: 'TechStartup', industry: 'Technology', size: '100+' },
    { name: 'DataFlow', industry: 'Analytics', size: '250+' },
    { name: 'SecureBank', industry: 'Banking', size: '1000+' },
    { name: 'RetailPro', industry: 'Retail', size: '400+' },
  ];

  const certifications = [
    {
      icon: FaAward,
      title: 'AWS Advanced Partner',
      description: 'Certified AWS consulting partner with advanced tier status',
      color: 'from-orange-600 to-yellow-500',
    },
    {
      icon: FaShieldAlt,
      title: 'ISO 27001 Certified',
      description: 'Information security management system certified',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: FaCheckCircle,
      title: 'KVKK Compliant',
      description: 'Full compliance with Turkish data protection law',
      color: 'from-green-600 to-emerald-500',
    },
    {
      icon: FaAward,
      title: 'Microsoft Partner',
      description: 'Gold certified Azure cloud solution partner',
      color: 'from-blue-700 to-blue-500',
    },
  ];

  const trustIndicators = [
    { metric: '50+', label: 'Enterprise Clients' },
    { metric: '200+', label: 'Projects Delivered' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '5+', label: 'Years Experience' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-7xl">
        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Trusted by Leading Companies
          </span>
          <h2 className="heading-2 mb-4">Our Clients</h2>
          <p className="text-xl text-neutral-600">
            From startups to enterprises, we've helped companies across industries transform their DevOps practices
          </p>
        </motion.div>

        {/* Client Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card p-6 hover:shadow-lg transition-all group"
            >
              <div className="text-center">
                {/* Client Initial/Logo */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {client.name.charAt(0)}
                </div>
                {/* Client Info */}
                <div className="font-bold text-neutral-900 mb-1">{client.name}</div>
                <div className="text-xs text-neutral-600">{client.industry}</div>
                <div className="text-xs text-neutral-500">{client.size} employees</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">
                {indicator.metric}
              </div>
              <div className="text-neutral-600">{indicator.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            Certifications & Partnerships
          </h3>
          <p className="text-lg text-neutral-600 mb-12">
            Recognized by industry leaders for excellence and compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-neutral-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-neutral-600">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Compliance Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 card card-lg bg-gradient-to-br from-neutral-900 to-neutral-800 text-white text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-success-600 to-success-500 mb-6 shadow-xl">
            <FaShieldAlt className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Enterprise-Grade Security
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            Our infrastructure is audited regularly and follows industry best practices.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              SOC 2 Type II Ready
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              GDPR Compliant
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              KVKK Certified
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              ISO 27001
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
