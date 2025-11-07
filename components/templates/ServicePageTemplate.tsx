'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaClock, FaDollarSign } from 'react-icons/fa';

interface ServicePageTemplateProps {
  // Hero Section
  title: string;
  subtitle: string;
  benefits: string[];
  heroIcon: ReactNode;
  heroGradient?: string;

  // Problem/Solution Section
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];

  // Process Section
  process: {
    title: string;
    description: string;
    timeline: string;
  }[];

  // Deliverables Section
  deliverables: {
    title: string;
    items: string[];
  }[];

  // Pricing Section
  pricing: {
    startingPrice: string;
    priceRange: string;
    included: string[];
    timeline: string;
  };

  // Case Study (optional)
  caseStudy?: {
    company: string;
    challenge: string;
    solution: string;
    results: string[];
  };

  // Related Services
  relatedServices?: {
    title: string;
    description: string;
    link: string;
  }[];
}

/**
 * ServicePageTemplate Component
 *
 * Reusable template for all service detail pages
 * Follows conversion-optimized structure from redesign vision
 */
export default function ServicePageTemplate({
  title,
  subtitle,
  benefits,
  heroIcon,
  heroGradient = 'from-primary-600 to-primary-500',
  problemTitle,
  problems,
  solutionTitle,
  solutions,
  process,
  deliverables,
  pricing,
  caseStudy,
  relatedServices,
}: ServicePageTemplateProps) {
  const scrollToContact = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
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
            {/* Icon */}
            <div className="mb-8 inline-flex">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${heroGradient} flex items-center justify-center shadow-2xl`}>
                {heroIcon}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="badge badge-success gap-2 bg-success-500/20 text-success-100 border-success-500/30 px-4 py-2"
                >
                  <FaCheckCircle />
                  {benefit}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg shadow-2xl"
              >
                Get Started
                <FaArrowRight />
              </button>
              <a
                href="#pricing"
                className="btn btn-secondary btn-lg bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 mb-6 text-error-600">{problemTitle}</h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-error-100 flex items-center justify-center mt-1">
                      <span className="text-error-600 text-sm">✗</span>
                    </div>
                    <p className="text-neutral-700">{problem}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 mb-6 text-success-600">{solutionTitle}</h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 flex items-center justify-center mt-1">
                      <FaCheckCircle className="text-success-600 text-sm" />
                    </div>
                    <p className="text-neutral-700 font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">
              <span className="text-gradient">How It Works</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Our proven methodology ensures successful implementation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${heroGradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="heading-4">{step.title}</h3>
                      <div className="badge badge-neutral gap-2">
                        <FaClock className="text-xs" />
                        {step.timeline}
                      </div>
                    </div>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">
              <span className="text-gradient">What You Get</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Comprehensive deliverables designed for long-term success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-gradient"
              >
                <h3 className="heading-4 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <FaCheckCircle className="text-success-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card card-lg border-2 border-primary-200">
              <div className="text-center mb-8">
                <h2 className="heading-2 mb-4">Investment</h2>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-neutral-900">{pricing.startingPrice}</span>
                  <span className="text-xl text-neutral-600">starting</span>
                </div>
                <p className="text-neutral-600">Typical range: {pricing.priceRange}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-neutral-900 mb-4">What's Included:</h3>
                {pricing.included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-success-500 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-neutral-600">
                  <FaClock />
                  <span>Timeline: {pricing.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <FaDollarSign />
                  <span>Fixed pricing, no surprises</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={scrollToContact}
                  className="btn btn-primary btn-lg w-full shadow-primary"
                >
                  Get Detailed Quote
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study (Optional) */}
      {caseStudy && (
        <section className="section-padding bg-primary-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="heading-2 mb-8 text-center">Success Story</h2>
              <div className="card-glass p-8">
                <h3 className="heading-3 mb-6">{caseStudy.company}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary-200 mb-2">The Challenge</h4>
                    <p className="text-primary-100">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary-200 mb-2">Our Solution</h4>
                    <p className="text-primary-100">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary-200 mb-4">The Results</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="badge badge-success gap-2 bg-success-500/20 text-success-100 border-success-500/30 py-3">
                          <FaCheckCircle />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services (Optional) */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Related Services</h2>
              <p className="body-large">Enhance your transformation with these services</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedServices.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-interactive group"
                >
                  <h3 className="heading-4 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium">
                    Learn More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free assessment and custom roadmap for your transformation
            </p>
            <button
              onClick={scrollToContact}
              className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 shadow-xl"
            >
              Schedule Free Consultation
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
