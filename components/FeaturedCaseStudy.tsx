'use client';

import { motion } from 'framer-motion';
import PrefetchLink from './PrefetchLink';
import {
  FaRocket,
  FaChartLine,
  FaDollarSign,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

/**
 * Featured Case Study Component
 *
 * Highlights a success story on the homepage with metrics and CTA
 */
export default function FeaturedCaseStudy() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-semibold mb-4">
            Success Story
          </span>
          <h2 className="heading-2 mb-4">Real Results, Real Impact</h2>
          <p className="text-xl text-neutral-600">
            See how we helped MegaShop achieve 99.99% uptime during Black Friday
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card card-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                E-Commerce
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                500+ employees
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                12 weeks
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Scaling E-Commerce Platform to Handle Black Friday Traffic
            </h3>
            <p className="text-xl opacity-90">MegaShop</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-error-600 mb-3">The Challenge</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Severe downtime during peak shopping seasons. Monolithic architecture couldn't handle traffic spikes,
                  resulting in lost revenue and frustrated customers. Deployments took 6-8 hours.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-success-600 mb-3">The Solution</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Migrated to microservices on Kubernetes, established CI/CD pipelines with automated testing,
                  implemented auto-scaling, and set up comprehensive observability.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Impressive Results
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: FaCheckCircle, value: '99.99%', label: 'Uptime During Peak', color: 'text-success-600' },
                  { icon: FaRocket, value: '87%', label: 'Faster Deployments', color: 'text-primary-600' },
                  { icon: FaDollarSign, value: '$2.4M', label: 'Revenue Saved', color: 'text-green-600' },
                  { icon: FaChartLine, value: '10x', label: 'Scaling Capacity', color: 'text-blue-600' },
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md mb-3`}>
                        <Icon className={`w-6 h-6 ${metric.color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-neutral-600">{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-lg text-neutral-800 leading-relaxed italic mb-4">
                "The transformation was incredible. We handled Black Friday with zero downtime for the first time
                in company history. Our engineering team can now deploy multiple times per day instead of once per week.
                The ROI was achieved in the first major shopping season."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                  S
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Sarah Chen</div>
                  <div className="text-sm text-neutral-600">CTO at MegaShop</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <PrefetchLink
                href="/case-studies"
                className="btn btn-primary btn-lg inline-flex items-center gap-2"
              >
                Read More Success Stories
                <FaArrowRight />
              </PrefetchLink>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: '$3.5M+', label: 'Total Client Savings Generated', color: 'from-green-600 to-emerald-500' },
            { value: '99.9%', label: 'Average Client Uptime', color: 'from-blue-600 to-cyan-500' },
            { value: '87%', label: 'Faster Deployments on Average', color: 'from-purple-600 to-pink-500' },
          ].map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
