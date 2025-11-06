'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaChartLine,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';

interface ROIInputs {
  deploymentsPerWeek: number;
  hoursPerDeployment: number;
  failureRate: number;
  downtimeHours: number;
  teamSize: number;
  avgSalary: number;
  cloudCosts: number;
}

interface ROIResults {
  currentTimeWaste: number;
  optimizedTime: number;
  timeSavedHours: number;
  timeSavedPercent: number;
  costSavedPerYear: number;
  cloudSavings: number;
  totalSavings: number;
  deploymentImprovement: number;
  downtimeReduction: number;
  roi: number;
  breakEvenMonths: number;
}

/**
 * ROI Calculator Component
 *
 * Interactive tool that calculates potential savings from DevOps transformation
 * Lead magnet that captures emails to send detailed reports
 */
export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    deploymentsPerWeek: 2,
    hoursPerDeployment: 4,
    failureRate: 15,
    downtimeHours: 8,
    teamSize: 5,
    avgSalary: 80000,
    cloudCosts: 10000,
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate ROI whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const {
      deploymentsPerWeek,
      hoursPerDeployment,
      failureRate,
      downtimeHours,
      teamSize,
      avgSalary,
      cloudCosts,
    } = inputs;

    // Current state calculations
    const deploymentsPerYear = deploymentsPerWeek * 52;
    const currentDeploymentHours = deploymentsPerYear * hoursPerDeployment;
    const failureHours = currentDeploymentHours * (failureRate / 100);
    const currentTimeWaste = currentDeploymentHours + failureHours + (downtimeHours * 12);

    // After DevOps transformation (conservative estimates)
    const optimizedDeploymentTime = hoursPerDeployment * 0.1; // 90% reduction
    const optimizedFailureRate = failureRate * 0.05; // 95% reduction
    const optimizedDowntime = downtimeHours * 0.1; // 90% reduction

    const optimizedDeploymentHours = deploymentsPerYear * optimizedDeploymentTime;
    const optimizedFailureHours = optimizedDeploymentHours * (optimizedFailureRate / 100);
    const optimizedTime = optimizedDeploymentHours + optimizedFailureHours + (optimizedDowntime * 12);

    // Time saved
    const timeSavedHours = currentTimeWaste - optimizedTime;
    const timeSavedPercent = (timeSavedHours / currentTimeWaste) * 100;

    // Cost calculations
    const hourlyRate = avgSalary / 2080; // 2080 working hours per year
    const costSavedPerYear = timeSavedHours * hourlyRate * teamSize;

    // Cloud cost savings (typical 30% reduction with optimization)
    const cloudSavings = (cloudCosts * 12) * 0.3;

    // Total savings
    const totalSavings = costSavedPerYear + cloudSavings;

    // Typical DevOps transformation investment
    const typicalInvestment = 50000; // Average project cost
    const roi = ((totalSavings - typicalInvestment) / typicalInvestment) * 100;
    const breakEvenMonths = Math.ceil((typicalInvestment / totalSavings) * 12);

    // Improvement percentages
    const deploymentImprovement = ((hoursPerDeployment - optimizedDeploymentTime) / hoursPerDeployment) * 100;
    const downtimeReduction = ((downtimeHours - optimizedDowntime) / downtimeHours) * 100;

    setResults({
      currentTimeWaste,
      optimizedTime,
      timeSavedHours,
      timeSavedPercent,
      costSavedPerYear,
      cloudSavings,
      totalSavings,
      deploymentImprovement,
      downtimeReduction,
      roi,
      breakEvenMonths,
    });
  };

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const results = calculateROI();

      const response = await fetch('/api/tools/roi-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          inputs,
          results,
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        const error = await response.json();
        alert(`Failed to send report: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending report:', error);
      alert('Failed to send report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6 font-medium">
          <FaRocket className="text-sm" />
          Free ROI Calculator
        </div>
        <h2 className="heading-2 mb-4">
          Calculate Your DevOps ROI
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          See how much time and money you could save with DevOps automation.
          Real numbers based on industry benchmarks.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card card-lg"
        >
          <h3 className="heading-4 mb-6">Your Current State</h3>

          <div className="space-y-6">
            {/* Deployments per week */}
            <div>
              <label className="label">
                Deployments per week
                <span className="text-neutral-500 font-normal ml-2">
                  ({inputs.deploymentsPerWeek})
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={inputs.deploymentsPerWeek}
                onChange={(e) => handleInputChange('deploymentsPerWeek', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>1/week</span>
                <span>50/week</span>
              </div>
            </div>

            {/* Hours per deployment */}
            <div>
              <label className="label">
                Hours per deployment
                <span className="text-neutral-500 font-normal ml-2">
                  ({inputs.hoursPerDeployment}h)
                </span>
              </label>
              <input
                type="range"
                min="0.5"
                max="16"
                step="0.5"
                value={inputs.hoursPerDeployment}
                onChange={(e) => handleInputChange('hoursPerDeployment', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>30min</span>
                <span>16h</span>
              </div>
            </div>

            {/* Failure rate */}
            <div>
              <label className="label">
                Deployment failure rate
                <span className="text-neutral-500 font-normal ml-2">
                  ({inputs.failureRate}%)
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={inputs.failureRate}
                onChange={(e) => handleInputChange('failureRate', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>0%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Downtime hours */}
            <div>
              <label className="label">
                Downtime hours per month
                <span className="text-neutral-500 font-normal ml-2">
                  ({inputs.downtimeHours}h)
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.downtimeHours}
                onChange={(e) => handleInputChange('downtimeHours', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>0h</span>
                <span>100h</span>
              </div>
            </div>

            {/* Team size */}
            <div>
              <label className="label">
                Engineering team size
                <span className="text-neutral-500 font-normal ml-2">
                  ({inputs.teamSize} people)
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={inputs.teamSize}
                onChange={(e) => handleInputChange('teamSize', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Average salary */}
            <div>
              <label className="label">
                Average engineer salary
                <span className="text-neutral-500 font-normal ml-2">
                  ({formatCurrency(inputs.avgSalary)})
                </span>
              </label>
              <input
                type="range"
                min="40000"
                max="200000"
                step="5000"
                value={inputs.avgSalary}
                onChange={(e) => handleInputChange('avgSalary', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>$40K</span>
                <span>$200K</span>
              </div>
            </div>

            {/* Cloud costs */}
            <div>
              <label className="label">
                Monthly cloud costs
                <span className="text-neutral-500 font-normal ml-2">
                  ({formatCurrency(inputs.cloudCosts)})
                </span>
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={inputs.cloudCosts}
                onChange={(e) => handleInputChange('cloudCosts', Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>$1K</span>
                <span>$100K</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="btn btn-primary btn-lg w-full mt-8"
          >
            Calculate My Savings
            <FaArrowRight />
          </button>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {showResults && results && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Savings Overview */}
              <div className="card card-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white">
                <div className="text-center">
                  <div className="text-sm font-medium text-primary-100 mb-2">
                    Total Annual Savings
                  </div>
                  <div className="text-5xl font-bold mb-2">
                    {formatCurrency(results.totalSavings)}
                  </div>
                  <div className="text-primary-100">
                    ROI: {results.roi.toFixed(0)}% in Year 1
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary-400">
                    <div className="text-sm text-primary-100">
                      Break-even in {results.breakEvenMonths} months
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card card-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-success-100 flex items-center justify-center">
                      <FaClock className="text-success-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-neutral-900">
                        {formatNumber(results.timeSavedHours)}h
                      </div>
                      <div className="text-xs text-neutral-600">Time Saved/Year</div>
                    </div>
                  </div>
                </div>

                <div className="card card-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <FaDollarSign className="text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-neutral-900">
                        {formatCurrency(results.costSavedPerYear)}
                      </div>
                      <div className="text-xs text-neutral-600">Labor Savings</div>
                    </div>
                  </div>
                </div>

                <div className="card card-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-warning-100 flex items-center justify-center">
                      <FaRocket className="text-warning-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-neutral-900">
                        {results.deploymentImprovement.toFixed(0)}%
                      </div>
                      <div className="text-xs text-neutral-600">Faster Deploys</div>
                    </div>
                  </div>
                </div>

                <div className="card card-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-error-100 flex items-center justify-center">
                      <FaChartLine className="text-error-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-neutral-900">
                        {results.downtimeReduction.toFixed(0)}%
                      </div>
                      <div className="text-xs text-neutral-600">Less Downtime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="card card-lg">
                <h4 className="font-bold text-neutral-900 mb-4">Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-success-500" />
                      <span className="text-neutral-700">Labor cost savings</span>
                    </div>
                    <span className="font-bold text-neutral-900">
                      {formatCurrency(results.costSavedPerYear)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-success-500" />
                      <span className="text-neutral-700">Cloud cost optimization</span>
                    </div>
                    <span className="font-bold text-neutral-900">
                      {formatCurrency(results.cloudSavings)}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <span className="font-bold text-neutral-900">Total Annual Savings</span>
                    <span className="font-bold text-primary-600 text-xl">
                      {formatCurrency(results.totalSavings)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Capture */}
              {!emailSubmitted ? (
                <div className="card card-lg bg-neutral-50">
                  <h4 className="font-bold text-neutral-900 mb-2">
                    Get Detailed Report
                  </h4>
                  <p className="text-sm text-neutral-600 mb-4">
                    Enter your email to receive a comprehensive ROI analysis and
                    personalized DevOps transformation roadmap.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="input flex-1"
                    />
                    <button type="submit" className="btn btn-primary">
                      <FaDownload />
                      Send Report
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card card-lg bg-success-50 border-2 border-success-200"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-success-500 flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-white text-2xl" />
                    </div>
                    <h4 className="font-bold text-success-900 mb-2">
                      Report Sent!
                    </h4>
                    <p className="text-success-700">
                      Check your email for the detailed ROI analysis and next steps.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <div className="card card-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white">
                <h4 className="font-bold mb-2">Ready to Achieve These Results?</h4>
                <p className="text-primary-100 mb-4">
                  Schedule a free consultation to discuss your DevOps transformation.
                </p>
                <button
                  onClick={() => {
                    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                  }}
                  className="btn btn-lg bg-white text-primary-600 hover:bg-primary-50 w-full"
                >
                  Schedule Free Consultation
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
