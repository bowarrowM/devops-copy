'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaRocket,
  FaChartLine,
  FaDollarSign,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaServer,
} from 'react-icons/fa';

/**
 * Case Studies Page
 *
 * Detailed success stories with metrics and implementation details
 */

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  companySize: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  technologies: string[];
  timeline: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-scale',
    title: 'Scaling E-Commerce Platform to Handle Black Friday Traffic',
    company: 'MegaShop',
    industry: 'E-Commerce',
    companySize: '500+ employees',
    challenge: 'MegaShop was experiencing severe downtime during peak shopping seasons (Black Friday, Cyber Monday). Their monolithic architecture couldn\'t handle traffic spikes, resulting in lost revenue and frustrated customers. Deployments took 6-8 hours and required weekend maintenance windows.',
    solution: 'We implemented a comprehensive DevOps transformation: migrated to microservices on Kubernetes, established CI/CD pipelines with automated testing, implemented auto-scaling based on traffic patterns, and set up comprehensive observability with Prometheus and Grafana.',
    results: [
      { metric: 'Uptime During Peak', value: '99.99%', icon: FaCheckCircle },
      { metric: 'Deployment Time', value: '87% faster', icon: FaClock },
      { metric: 'Revenue Saved', value: '$2.4M', icon: FaDollarSign },
      { metric: 'Scaling Capacity', value: '10x traffic', icon: FaChartLine },
    ],
    testimonial: {
      quote: 'The transformation was incredible. We handled Black Friday with zero downtime for the first time in company history. Our engineering team can now deploy multiple times per day instead of once per week. The ROI was achieved in the first major shopping season.',
      author: 'Sarah Chen',
      position: 'CTO at MegaShop',
    },
    technologies: ['Kubernetes', 'AWS EKS', 'Terraform', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Istio'],
    timeline: '12 weeks',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'fintech-security',
    title: 'Achieving SOC 2 Compliance While Accelerating Deployment',
    company: 'PayFlow',
    industry: 'FinTech',
    companySize: '200+ employees',
    challenge: 'PayFlow needed to achieve SOC 2 Type II compliance to land enterprise clients, but their existing processes were heavily manual. Security scans took days, and audit trails were incomplete. Compliance was seen as incompatible with fast deployment velocity.',
    solution: 'We implemented DevSecOps practices: automated security scanning in CI/CD pipeline, infrastructure as code with policy enforcement, automated compliance reporting, secrets management with HashiCorp Vault, and comprehensive audit logging.',
    results: [
      { metric: 'SOC 2 Compliance', value: 'Achieved', icon: FaCheckCircle },
      { metric: 'Security Scans', value: '100% automated', icon: FaServer },
      { metric: 'Deployment Velocity', value: '5x faster', icon: FaRocket },
      { metric: 'Audit Time Saved', value: '160 hours/year', icon: FaClock },
    ],
    testimonial: {
      quote: 'We thought we had to choose between security and speed. DevOps.com.tr showed us how to have both. We achieved SOC 2 compliance in record time, and our deployment frequency actually increased. The automated compliance reporting alone saves us weeks during audits.',
      author: 'Michael Rodriguez',
      position: 'VP Engineering at PayFlow',
    },
    technologies: ['GitHub Actions', 'Snyk', 'HashiCorp Vault', 'Terraform', 'AWS', 'SonarQube', 'OWASP ZAP'],
    timeline: '16 weeks',
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 'saas-cost-optimization',
    title: 'Reducing Cloud Costs by 62% Through FinOps Implementation',
    company: 'CloudCRM',
    industry: 'SaaS',
    companySize: '150+ employees',
    challenge: 'CloudCRM\'s AWS bill was growing 30% year-over-year, faster than revenue. They had unused resources running 24/7, over-provisioned instances, and no visibility into spending by team or feature. Finance was considering reducing engineering headcount to offset cloud costs.',
    solution: 'We conducted a comprehensive cloud cost analysis, implemented FinOps practices with automated rightsizing, set up auto-scaling and spot instances for non-critical workloads, established cost allocation tags by team/feature, and created a FinOps culture with cost awareness dashboards.',
    results: [
      { metric: 'Monthly Savings', value: '$48K/month', icon: FaDollarSign },
      { metric: 'Annual Savings', value: '$576K/year', icon: FaDollarSign },
      { metric: 'Cost Reduction', value: '62%', icon: FaChartLine },
      { metric: 'ROI', value: '850%', icon: FaRocket },
    ],
    testimonial: {
      quote: 'The savings were beyond our expectations. We cut our AWS bill by 62% without any performance degradation. The cost visibility dashboards transformed how our teams think about infrastructure. Every engineer now understands the cost impact of their decisions. This saved multiple engineering jobs.',
      author: 'Jennifer Wu',
      position: 'CEO at CloudCRM',
    },
    technologies: ['AWS Cost Explorer', 'Kubecost', 'Terraform', 'Auto Scaling Groups', 'Reserved Instances', 'Spot Instances'],
    timeline: '8 weeks',
    gradient: 'from-green-600 to-emerald-500',
  },
  {
    id: 'healthcare-migration',
    title: 'Zero-Downtime Migration from On-Premise to AWS for Healthcare Platform',
    company: 'HealthConnect',
    industry: 'Healthcare',
    companySize: '300+ employees',
    challenge: 'HealthConnect\'s on-premise infrastructure was reaching end-of-life, but they couldn\'t afford any downtime due to 24/7 healthcare operations. They needed HIPAA compliance in the cloud, data migration for 50TB of sensitive patient records, and disaster recovery capabilities.',
    solution: 'We designed a phased migration strategy with blue-green deployment, implemented HIPAA-compliant AWS architecture, set up encrypted data replication with validation, established disaster recovery with RTO < 1 hour, and provided 24/7 support during migration.',
    results: [
      { metric: 'Migration Downtime', value: '0 minutes', icon: FaCheckCircle },
      { metric: 'Data Migrated', value: '50TB', icon: FaServer },
      { metric: 'HIPAA Compliant', value: 'Day 1', icon: FaCheckCircle },
      { metric: 'Disaster Recovery', value: '< 1 hour RTO', icon: FaClock },
    ],
    testimonial: {
      quote: 'Migrating 50TB of patient data with zero downtime seemed impossible. The team\'s meticulous planning and phased approach made it seamless. Our doctors and nurses didn\'t experience a single interruption. We\'re now HIPAA compliant in the cloud with better disaster recovery than we ever had on-premise.',
      author: 'Dr. James Patterson',
      position: 'CIO at HealthConnect',
    },
    technologies: ['AWS', 'RDS', 'S3', 'CloudFront', 'AWS Backup', 'Transit Gateway', 'KMS', 'CloudTrail'],
    timeline: '14 weeks',
    gradient: 'from-red-600 to-orange-500',
  },
];

export default function CaseStudiesPage() {
  return (
    <LanguageProvider locale="tr">
      <main className="min-h-screen">
        <NavbarModern />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-primary-900 to-primary-800 text-white section-padding-lg overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">Client Success Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Real transformations. Real metrics. Real impact.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-primary-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">$3.5M+</div>
                  <div className="text-sm">Total Savings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">99.9%</div>
                  <div className="text-sm">Average Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">87%</div>
                  <div className="text-sm">Faster Deployments</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-8"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${study.gradient} text-white rounded-2xl p-8 md:p-12`}>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {study.companySize}
                      </span>
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {study.timeline}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
                    <p className="text-xl opacity-90">{study.company}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="card p-8">
                      <h3 className="text-2xl font-bold text-error-600 mb-4">The Challenge</h3>
                      <p className="text-neutral-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="card p-8 bg-gradient-to-br from-success-50 to-success-100 border-success-200">
                      <h3 className="text-2xl font-bold text-success-700 mb-4">Our Solution</h3>
                      <p className="text-neutral-800 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="card card-lg">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                      Results That Matter
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {study.results.map((result, i) => {
                        const Icon = result.icon;
                        return (
                          <div key={i} className="text-center">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${study.gradient} mb-4`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-neutral-900 mb-2">
                              {result.value}
                            </div>
                            <div className="text-sm text-neutral-600">{result.metric}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="card card-lg bg-gradient-to-br from-neutral-50 to-neutral-100">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                          {study.testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg text-neutral-800 leading-relaxed italic mb-4">
                          "{study.testimonial.quote}"
                        </p>
                        <div>
                          <div className="font-bold text-neutral-900">{study.testimonial.author}</div>
                          <div className="text-sm text-neutral-600">{study.testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="card p-6">
                    <h4 className="font-bold text-neutral-900 mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {index < caseStudies.length - 1 && (
                    <div className="border-t-2 border-neutral-200 my-12" />
                  )}
                </motion.div>
              ))}
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
              <h2 className="heading-2 mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Join these companies and transform your DevOps practices. Schedule a free consultation to discuss your challenges and goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 shadow-xl inline-flex items-center gap-2"
                >
                  Schedule Free Consultation
                  <FaArrowRight />
                </Link>
                <Link
                  href="/tools/roi-calculator"
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2"
                >
                  Calculate Your ROI
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
