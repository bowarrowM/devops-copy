'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PrefetchLink from './PrefetchLink';
import {
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaClock,
  FaDollarSign,
  FaServer,
  FaCheckCircle,
} from 'react-icons/fa';

/**
 * Statistics Component with Animated Counters
 *
 * Displays impressive metrics with smooth number animations
 */

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
}

const useCountUp = (end: number, duration: number = 2000, isInView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
};

export default function Statistics() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const stats: Stat[] = [
    {
      icon: FaUsers,
      value: 50,
      suffix: '+',
      label: 'Enterprise Clients',
      description: 'From startups to Fortune 500 companies',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: FaRocket,
      value: 200,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful DevOps transformations completed',
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: FaDollarSign,
      value: 3.5,
      suffix: 'M+',
      prefix: '$',
      label: 'Client Savings Generated',
      description: 'Total cost savings achieved for clients',
      color: 'from-green-600 to-emerald-500',
    },
    {
      icon: FaCheckCircle,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys',
      color: 'from-yellow-600 to-orange-500',
    },
    {
      icon: FaClock,
      value: 87,
      suffix: '%',
      label: 'Faster Deployments',
      description: 'Average improvement across all projects',
      color: 'from-primary-600 to-primary-500',
    },
    {
      icon: FaChartLine,
      value: 99.9,
      suffix: '%',
      label: 'Average Uptime',
      description: 'Across all client infrastructure',
      color: 'from-success-600 to-success-500',
    },
    {
      icon: FaServer,
      value: 1000,
      suffix: '+',
      label: 'Servers Managed',
      description: 'Active infrastructure under management',
      color: 'from-indigo-600 to-blue-500',
    },
    {
      icon: FaAward,
      value: 15,
      suffix: '+',
      label: 'Industry Certifications',
      description: 'AWS, Azure, GCP, and security certifications',
      color: 'from-red-600 to-orange-500',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-neutral-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-success-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Proven Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Real metrics from real projects. We don't just talk about DevOps transformation — we deliver measurable results.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 2000, isInView);

            // Format the number display
            let displayValue = count.toString();
            if (stat.value < 10 && stat.value % 1 !== 0) {
              // For decimal numbers like 3.5
              displayValue = (count / 10).toFixed(1);
            } else if (stat.value >= 99 && stat.value < 100) {
              // For 99.9
              displayValue = (count / 10).toFixed(1);
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="card p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <span className="text-5xl font-bold">
                      {stat.prefix}
                      {displayValue}
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>

                  {/* Description */}
                  <div className="text-sm text-primary-200 opacity-80">
                    {stat.description}
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-primary-100 mb-6">
            Want to see these results for your organization?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrefetchLink
              href="/tools/roi-calculator"
              className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 shadow-xl inline-flex items-center gap-2"
            >
              Calculate Your ROI
              <FaChartLine />
            </PrefetchLink>
            <PrefetchLink
              href="/#contact"
              className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2"
            >
              Schedule Consultation
              <FaRocket />
            </PrefetchLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
