'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalculator, FaClipboardCheck, FaDollarSign, FaArrowRight } from 'react-icons/fa';

/**
 * Tools Hub Page
 *
 * Showcase of all free tools and resources
 */
export default function ToolsPage() {
  const tools = [
    {
      title: 'DevOps ROI Calculator',
      description: 'Calculate potential time and cost savings from DevOps automation. Get instant results with personalized recommendations.',
      icon: FaCalculator,
      gradient: 'from-primary-600 to-primary-500',
      link: '/tools/roi-calculator',
      available: true,
      highlights: [
        'Calculate annual savings',
        'See ROI and break-even',
        'Get detailed report',
      ],
    },
    {
      title: 'DevOps Maturity Assessment',
      description: 'Evaluate your organization across 8 DevOps dimensions. Receive a custom roadmap with prioritized improvements.',
      icon: FaClipboardCheck,
      gradient: 'from-purple-600 to-pink-500',
      link: '/tools/assessment',
      available: true,
      highlights: [
        'Assess maturity (0-10)',
        'Industry benchmarking',
        'Prioritized roadmap',
      ],
    },
    {
      title: 'Cloud Cost Analyzer',
      description: 'Identify waste and optimization opportunities in your cloud spending. Get actionable recommendations to reduce costs by 30-50%.',
      icon: FaDollarSign,
      gradient: 'from-yellow-600 to-orange-500',
      link: '/tools/cost-analyzer',
      available: false,
      highlights: [
        'Find cloud waste',
        'Optimization tips',
        'Savings projections',
      ],
    },
  ];

  return (
    <LanguageProvider locale="tr">
      <main className="min-h-screen">
        <NavbarModern />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-primary-900 to-primary-800 text-white section-padding-lg overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">Free DevOps Tools</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Interactive calculators and assessments to help you plan your DevOps transformation.
                No credit card required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    {tool.available ? (
                      <Link href={tool.link} className="block h-full">
                        <div className="card card-lg card-interactive h-full flex flex-col">
                          {/* Icon */}
                          <div className="mb-6">
                            <div
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="heading-4 mb-3 group-hover:text-primary-600 transition-colors">
                            {tool.title}
                          </h3>

                          {/* Description */}
                          <p className="text-neutral-600 mb-6 flex-1">
                            {tool.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2 mb-6">
                            {tool.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                                {highlight}
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-2 text-primary-600 font-medium">
                            Try Free Tool
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="card card-lg h-full flex flex-col opacity-75">
                        {/* Coming Soon Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="badge badge-warning">Coming Soon</span>
                        </div>

                        {/* Icon */}
                        <div className="mb-6">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="heading-4 mb-3">{tool.title}</h3>

                        {/* Description */}
                        <p className="text-neutral-600 mb-6 flex-1">
                          {tool.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {tool.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                              {highlight}
                            </div>
                          ))}
                        </div>

                        {/* Status */}
                        <div className="text-sm text-neutral-500">
                          Available Q2 2025
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-2 mb-6">Need More Than Tools?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Get expert guidance with a free DevOps consultation
              </p>
              <Link
                href="/#contact"
                className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 shadow-xl inline-flex items-center gap-2"
              >
                Schedule Free Consultation
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </LanguageProvider>
  );
}
