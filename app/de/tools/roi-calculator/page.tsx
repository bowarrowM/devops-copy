'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ROICalculator from '@/components/tools/ROICalculator';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

/**
 * ROI Calculator Page
 *
 * Dedicated page for the ROI calculator tool
 * Lead magnet and value demonstration
 */
export default function ROICalculatorPageDE() {
  const benefits = [
    'See potential time savings in hours per year',
    'Calculate cost savings from automation',
    'Understand ROI and break-even timeline',
    'Get cloud cost optimization estimates',
    'Receive personalized transformation roadmap',
    'No credit card required',
  ];

  return (
    <LanguageProvider locale="de">
      <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white">
        <NavbarModern />

        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="heading-1 mb-6">
                DevOps ROI Calculator
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Calculate how much time and money your organization could save with
                DevOps automation. Get instant results based on industry benchmarks.
              </p>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <FaCheckCircle className="text-success-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Calculator */}
            <ROICalculator />

            {/* Methodology Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-24"
            >
              <div className="card card-lg">
                <h2 className="heading-3 mb-6">How We Calculate ROI</h2>

                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">
                      Conservative Estimates
                    </h3>
                    <p>
                      Our calculations use conservative industry benchmarks from DORA
                      (DevOps Research and Assessment) and real client data. We assume:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>90% reduction in deployment time (typical: 87-95%)</li>
                      <li>95% reduction in deployment failures (typical: 90-99%)</li>
                      <li>90% reduction in downtime (typical: 85-95%)</li>
                      <li>30% cloud cost savings (typical: 25-50%)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">
                      Time Savings Calculation
                    </h3>
                    <p>
                      We calculate the time your team currently spends on deployments,
                      fixing failed deployments, and handling downtime. Then we apply
                      proven improvement percentages from DevOps automation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">
                      Cost Savings Breakdown
                    </h3>
                    <p>
                      Labor costs are calculated using your team size and average salary,
                      converting time saved into dollar value. Cloud savings come from
                      right-sizing, reserved instances, and auto-scaling optimization.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">
                      ROI Methodology
                    </h3>
                    <p>
                      We compare total savings against a typical DevOps transformation
                      investment ($50K average) to calculate ROI percentage and break-even
                      timeline. Most organizations see positive ROI within 6-12 months.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Studies Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Real Results from Real Clients</h2>
                <p className="text-xl text-neutral-600">
                  See how other companies achieved similar or better results
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">87%</div>
                  <div className="text-neutral-700 mb-1">Faster Deployments</div>
                  <div className="text-sm text-neutral-500">TechScale SaaS</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">$240K</div>
                  <div className="text-neutral-700 mb-1">Saved Per Year</div>
                  <div className="text-sm text-neutral-500">E-commerce Platform</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">94%</div>
                  <div className="text-neutral-700 mb-1">MTTR Reduction</div>
                  <div className="text-sm text-neutral-500">Global SaaS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </LanguageProvider>
  );
}
