'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import Footer from '@/components/Footer';
import MaturityAssessment from '@/components/tools/MaturityAssessment';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaClipboardCheck,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaAward,
} from 'react-icons/fa';

/**
 * DevOps Maturity Assessment Page
 *
 * Comprehensive assessment tool to evaluate DevOps maturity across 8 dimensions
 */
export default function AssessmentPageDE() {
  return (
    <LanguageProvider locale="de">
      <main className="min-h-screen">
        <NavbarModern />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-purple-900 to-purple-800 text-white section-padding-lg overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 mb-6 shadow-xl">
                <FaClipboardCheck className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">DevOps Maturity Assessment</span>
              </h1>

              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Evaluate your organization across 8 DevOps dimensions. Get personalized recommendations
                and a prioritized roadmap for improvement.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-purple-200">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>8 Dimensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>32 Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>10 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-success-400" />
                  <span>Free Report</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">What You'll Get</h2>
              <p className="text-xl text-neutral-600">
                A comprehensive evaluation of your DevOps practices with actionable insights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaChartLine,
                  title: 'Maturity Score',
                  description: 'Overall DevOps maturity score (0-10) with level classification: Initial, Developing, Defined, Managed, or Optimizing.',
                  gradient: 'from-primary-600 to-primary-500',
                },
                {
                  icon: FaAward,
                  title: 'Dimension Breakdown',
                  description: 'Individual scores across 8 dimensions: CI/CD, IaC, Observability, Security, Cloud, Collaboration, Testing, and Incident Response.',
                  gradient: 'from-purple-600 to-pink-500',
                },
                {
                  icon: FaRocket,
                  title: 'Prioritized Roadmap',
                  description: 'Top 3 areas for improvement with specific recommendations to advance your DevOps maturity.',
                  gradient: 'from-orange-600 to-red-500',
                },
                {
                  icon: FaUsers,
                  title: 'Industry Benchmarks',
                  description: 'Compare your scores against industry standards based on DORA research and best practices.',
                  gradient: 'from-green-600 to-emerald-500',
                },
                {
                  icon: FaCheckCircle,
                  title: 'Detailed Report',
                  description: 'Comprehensive PDF report emailed to you with full analysis, recommendations, and implementation timeline.',
                  gradient: 'from-blue-600 to-cyan-500',
                },
                {
                  icon: FaClipboardCheck,
                  title: 'Action Items',
                  description: 'Specific next steps you can take immediately to start improving your DevOps practices.',
                  gradient: 'from-teal-600 to-green-500',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card card-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="heading-4 mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Assessment Tool */}
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Start Your Assessment</h2>
              <p className="text-xl text-neutral-600">
                Answer 32 questions across 8 dimensions. Takes about 10 minutes.
              </p>
            </motion.div>

            <MaturityAssessment />
          </div>
        </section>

        {/* Assessment Dimensions */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">8 DevOps Dimensions</h2>
              <p className="text-xl text-neutral-600">
                We evaluate your organization across these critical areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'CI/CD Automation',
                  description: 'Deployment frequency, automation level, testing coverage, and rollback capability.',
                  gradient: 'from-primary-600 to-primary-500',
                },
                {
                  title: 'Infrastructure as Code',
                  description: 'IaC adoption, environment consistency, version control, and provisioning speed.',
                  gradient: 'from-green-600 to-emerald-500',
                },
                {
                  title: 'Monitoring & Observability',
                  description: 'Monitoring coverage, issue discovery, MTTR, and alert quality.',
                  gradient: 'from-pink-600 to-rose-500',
                },
                {
                  title: 'Security & Compliance',
                  description: 'Security testing, compliance automation, secrets management, and vulnerability patching.',
                  gradient: 'from-orange-600 to-red-500',
                },
                {
                  title: 'Cloud Architecture',
                  description: 'Cloud-native adoption, scalability, resilience, and cost optimization.',
                  gradient: 'from-blue-600 to-cyan-500',
                },
                {
                  title: 'Team Collaboration',
                  description: 'Dev/Ops collaboration, knowledge sharing, developer empowerment, and incident culture.',
                  gradient: 'from-purple-600 to-indigo-500',
                },
                {
                  title: 'Testing & Quality',
                  description: 'Test automation, test speed, performance testing, and test reliability.',
                  gradient: 'from-teal-600 to-green-500',
                },
                {
                  title: 'Incident Response',
                  description: 'Process structure, communication, post-incident reviews, and automation.',
                  gradient: 'from-yellow-600 to-orange-500',
                },
              ].map((dimension, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dimension.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-1">{dimension.title}</h3>
                      <p className="text-sm text-neutral-600">{dimension.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="text-xl text-neutral-600">
                Simple 3-step process to understand your DevOps maturity
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Answer Questions',
                  description: 'Rate your current practices across 8 dimensions. Each dimension has 4 questions, scored 0-10. Be honest - this helps us give you better recommendations.',
                },
                {
                  step: '2',
                  title: 'Get Your Score',
                  description: 'See your overall maturity score and breakdown by dimension. Understand where you excel and where there\'s room for improvement.',
                },
                {
                  step: '3',
                  title: 'Receive Recommendations',
                  description: 'Get a prioritized list of improvements tailored to your scores. Receive a detailed PDF report via email with a 6-12 month roadmap.',
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
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
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
        <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-2 mb-6">Need Help Implementing Improvements?</h2>
              <p className="text-xl text-purple-100 mb-8">
                After your assessment, schedule a free consultation to discuss your roadmap and how we can help accelerate your DevOps transformation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn btn-lg bg-white text-purple-600 hover:bg-purple-50 shadow-xl inline-flex items-center gap-2"
                >
                  Schedule Free Consultation
                  <FaArrowRight />
                </Link>
                <Link
                  href="/tools/roi-calculator"
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-purple-600 inline-flex items-center gap-2"
                >
                  Calculate ROI
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
