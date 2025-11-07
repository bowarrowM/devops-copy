'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import Footer from '@/components/Footer';
import CloudCostAnalyzer from '@/components/tools/CloudCostAnalyzer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaDollarSign,
  FaChartLine,
  FaServer,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaAward,
} from 'react-icons/fa';

/**
 * Cloud Cost Analyzer Page
 *
 * Tool to analyze cloud spending and identify optimization opportunities
 */
export default function CostAnalyzerPage() {
  return (
    <LanguageProvider locale="tr">
      <main className="min-h-screen">
        <NavbarModern />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-yellow-900 to-orange-800 text-white section-padding-lg overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-600 to-orange-500 mb-6 shadow-xl">
                <FaDollarSign className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">Cloud Cost Analyzer</span>
              </h1>

              <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
                Identify waste and optimization opportunities in your cloud spending.
                Get actionable recommendations to reduce costs by 30-50%.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-yellow-200">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>Find Hidden Waste</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>30-50% Savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>Free Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>Instant Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Cloud Waste is Costing You Millions</h2>
              <p className="text-xl text-neutral-600">
                Most organizations waste 30-50% of their cloud spending on unused or inefficient resources
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '32%',
                  label: 'Average Cloud Waste',
                  description: 'Flexera State of the Cloud Report 2024',
                  color: 'text-error-600',
                },
                {
                  stat: '$17.6B',
                  label: 'Global Cloud Waste',
                  description: 'Wasted annually on unused cloud resources',
                  color: 'text-warning-600',
                },
                {
                  stat: '30-50%',
                  label: 'Potential Savings',
                  description: 'Typical savings from optimization',
                  color: 'text-success-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-lg text-center"
                >
                  <div className={`text-5xl font-bold mb-2 ${item.color}`}>{item.stat}</div>
                  <div className="text-lg font-medium text-neutral-900 mb-2">{item.label}</div>
                  <div className="text-sm text-neutral-600">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">What We Analyze</h2>
              <p className="text-xl text-neutral-600">
                Comprehensive analysis across all major cloud spending categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FaServer,
                  title: 'Compute Waste',
                  issues: [
                    'Unused or idle instances running 24/7',
                    'Over-provisioned instances (too much CPU/RAM)',
                    'No auto-scaling to match demand',
                    'Using on-demand instead of reserved instances',
                    'Dev/test environments running after hours',
                  ],
                  savings: '30-40% typical savings',
                  gradient: 'from-primary-600 to-primary-500',
                },
                {
                  icon: FaDollarSign,
                  title: 'Storage Waste',
                  issues: [
                    'Old snapshots and backups never deleted',
                    'Unattached EBS volumes still billed',
                    'Data stored in expensive tiers unnecessarily',
                    'No lifecycle policies for S3 buckets',
                    'Duplicate data across regions',
                  ],
                  savings: '25-35% typical savings',
                  gradient: 'from-green-600 to-emerald-500',
                },
                {
                  icon: FaChartLine,
                  title: 'Data Transfer Costs',
                  issues: [
                    'No CDN for static assets',
                    'Inefficient cross-region transfers',
                    'Not using VPC endpoints',
                    'Uncompressed data transfers',
                    'Excessive API calls between services',
                  ],
                  savings: '15-20% typical savings',
                  gradient: 'from-yellow-600 to-orange-500',
                },
                {
                  icon: FaAward,
                  title: 'Database Optimization',
                  issues: [
                    'Over-provisioned database instances',
                    'No read replicas to distribute load',
                    'Missing caching layer (Redis/Memcached)',
                    'No auto-pause for dev databases',
                    'Old data not archived to cheaper storage',
                  ],
                  savings: '30-40% typical savings',
                  gradient: 'from-purple-600 to-pink-500',
                },
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card card-lg"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="heading-4 mb-3">{category.title}</h3>
                    <div className="space-y-2 mb-4">
                      {category.issues.map((issue, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="text-error-600 mt-0.5">•</span>
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-neutral-200">
                      <div className="text-success-600 font-medium flex items-center gap-2">
                        <FaCheckCircle />
                        {category.savings}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Analyzer Tool */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Analyze Your Cloud Costs</h2>
              <p className="text-xl text-neutral-600">
                Enter your cloud spending details to discover optimization opportunities
              </p>
            </motion.div>

            <CloudCostAnalyzer />
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Real Client Savings</h2>
              <p className="text-xl text-neutral-600">
                See how we've helped companies reduce their cloud costs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: 'E-Commerce Platform',
                  spend: '$45K → $22K/mo',
                  savings: '$276K annually',
                  improvements: [
                    'Rightsized 80% of instances',
                    'Implemented auto-scaling',
                    'Reserved instances for prod',
                  ],
                },
                {
                  company: 'SaaS Startup',
                  spend: '$18K → $10K/mo',
                  savings: '$96K annually',
                  improvements: [
                    'Cleaned up old snapshots',
                    'S3 lifecycle policies',
                    'Shut down dev after hours',
                  ],
                },
                {
                  company: 'FinTech Company',
                  spend: '$80K → $48K/mo',
                  savings: '$384K annually',
                  improvements: [
                    'Database optimization',
                    'CDN for static assets',
                    'Cross-region optimization',
                  ],
                },
              ].map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-lg"
                >
                  <div className="text-center mb-4">
                    <div className="font-bold text-lg text-neutral-900 mb-2">{caseStudy.company}</div>
                    <div className="text-2xl font-bold text-success-600 mb-1">{caseStudy.spend}</div>
                    <div className="text-sm text-neutral-600">Saved {caseStudy.savings}</div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-neutral-200">
                    {caseStudy.improvements.map((improvement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                        <FaCheckCircle className="text-success-600 flex-shrink-0" />
                        <span>{improvement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="text-xl text-neutral-600">
                Simple 3-step process to optimize your cloud costs
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Enter Your Cloud Spending',
                  description: 'Provide your monthly cloud spend and breakdown by category (compute, storage, data transfer, databases). Tell us about your current optimization practices.',
                },
                {
                  step: '2',
                  title: 'Get Waste Analysis',
                  description: 'Our tool analyzes your spending using industry benchmarks and identifies waste in each category. See exactly where your money is going and where savings are hiding.',
                },
                {
                  step: '3',
                  title: 'Receive Recommendations',
                  description: 'Get prioritized "quick wins" you can implement immediately, plus a detailed report with specific actions to reduce costs by 30-50%.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-orange-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="heading-4 mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-yellow-600 to-orange-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <FaLightbulb className="w-16 h-16 mx-auto mb-6" />
              <h2 className="heading-2 mb-6">Ready to Optimize Your Cloud Costs?</h2>
              <p className="text-xl text-yellow-100 mb-8">
                Schedule a free FinOps consultation to discuss your cost optimization strategy and implementation plan.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn btn-lg bg-white text-orange-600 hover:bg-yellow-50 shadow-xl inline-flex items-center gap-2"
                >
                  Schedule Free Consultation
                  <FaArrowRight />
                </Link>
                <Link
                  href="/services/finops"
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-orange-600 inline-flex items-center gap-2"
                >
                  Learn About FinOps
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </LanguageProvider>
  );
}
