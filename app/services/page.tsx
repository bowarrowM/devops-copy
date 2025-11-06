'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaDocker,
  FaCodeBranch,
  FaCloud,
  FaShieldAlt,
  FaCubes,
  FaChartLine,
  FaDollarSign,
  FaCode,
  FaRocket,
  FaArrowRight,
} from 'react-icons/fa';

/**
 * Services Overview Page
 *
 * Hub page that links to all individual service pages
 */
export default function ServicesPage() {
  // All services organized by tier
  const services = {
    foundation: [
      {
        title: 'DevOps Assessment',
        description: 'Comprehensive analysis of your current DevOps maturity with actionable roadmap',
        icon: FaChartLine,
        gradient: 'from-blue-600 to-blue-500',
        price: 'From $5K',
        link: '/services/assessment',
        available: false, // Coming soon
      },
      {
        title: 'CI/CD Pipeline Setup',
        description: 'Automate everything from commit to production with battle-tested pipelines',
        icon: FaCodeBranch,
        gradient: 'from-purple-600 to-pink-500',
        price: 'From $28K',
        link: '/services/cicd',
        available: true,
      },
      {
        title: 'Cloud Migration',
        description: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
        icon: FaCloud,
        gradient: 'from-cyan-600 to-blue-500',
        price: 'From $35K',
        link: '/services/cloud-migration',
        available: false,
      },
    ],
    transformation: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Production-ready clusters with monitoring, security, and GitOps built-in',
        icon: FaDocker,
        gradient: 'from-primary-600 to-primary-500',
        price: 'From $45K',
        link: '/services/kubernetes',
        available: true,
      },
      {
        title: 'Infrastructure as Code',
        description: 'Manage infrastructure with Terraform and GitOps workflows',
        icon: FaCode,
        gradient: 'from-green-600 to-emerald-500',
        price: 'From $32K',
        link: '/services/iac',
        available: false,
      },
      {
        title: 'DevSecOps Integration',
        description: 'Security built into every stage of your development lifecycle',
        icon: FaShieldAlt,
        gradient: 'from-orange-600 to-red-500',
        price: 'From $40K',
        link: '/services/devsecops',
        available: false,
      },
    ],
    advanced: [
      {
        title: 'Platform Engineering',
        description: 'Build self-service internal developer platforms that boost productivity',
        icon: FaCubes,
        gradient: 'from-indigo-600 to-purple-500',
        price: 'From $65K',
        link: '/services/platform',
        available: false,
      },
      {
        title: 'AIOps & Observability',
        description: 'AI-powered monitoring and observability for complex systems',
        icon: FaRocket,
        gradient: 'from-pink-600 to-rose-500',
        price: 'From $50K',
        link: '/services/aiops',
        available: false,
      },
      {
        title: 'FinOps & Cost Optimization',
        description: 'Reduce cloud costs by 30-50% with FinOps best practices',
        icon: FaDollarSign,
        gradient: 'from-yellow-600 to-orange-500',
        price: 'From $25K',
        link: '/services/finops',
        available: false,
      },
    ],
  };

  const tiers = [
    {
      id: 'foundation',
      name: 'Foundation',
      description: 'Essential DevOps services for startups and small teams',
      color: 'blue',
    },
    {
      id: 'transformation',
      name: 'Transformation',
      description: 'Advanced services for scaling organizations',
      color: 'purple',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Enterprise-grade solutions for complex environments',
      color: 'indigo',
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
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">DevOps Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                From assessment to advanced automation, we offer comprehensive DevOps solutions
                tailored to your team's needs and maturity level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services by Tier */}
        {tiers.map((tier, tierIndex) => (
          <section
            key={tier.id}
            className={`section-padding ${
              tierIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-neutral-50 to-white'
            }`}
          >
            <div className="container-custom">
              {/* Tier Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="heading-2 mb-4">
                  <span className="text-gradient">{tier.name}</span>
                </h2>
                <p className="body-large text-neutral-600 max-w-2xl mx-auto">
                  {tier.description}
                </p>
              </motion.div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services[tier.id as keyof typeof services].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      {service.available ? (
                        <Link href={service.link} className="block h-full">
                          <div className="card card-lg card-interactive h-full flex flex-col">
                            {/* Icon */}
                            <div className="mb-6">
                              <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                              >
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="heading-4 mb-3 group-hover:text-primary-600 transition-colors">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-neutral-600 mb-6 flex-1">
                              {service.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                              <span className="text-sm font-bold text-neutral-900">
                                {service.price}
                              </span>
                              <div className="flex items-center gap-2 text-primary-600 font-medium">
                                Learn More
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                              </div>
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
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="heading-4 mb-3">{service.title}</h3>

                          {/* Description */}
                          <p className="text-neutral-600 mb-6 flex-1">
                            {service.description}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                            <span className="text-sm font-bold text-neutral-900">
                              {service.price}
                            </span>
                            <span className="text-sm text-neutral-500">
                              Available Q2 2025
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-2 mb-6">Not Sure Which Service You Need?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Get a free DevOps maturity assessment and personalized roadmap
              </p>
              <Link
                href="/#contact"
                className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 shadow-xl inline-flex items-center gap-2"
              >
                Get Free Assessment
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
