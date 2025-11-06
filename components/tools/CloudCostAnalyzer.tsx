'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaDollarSign,
  FaServer,
  FaDatabase,
  FaHdd,
  FaNetworkWired,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaDownload,
  FaLightbulb,
} from 'react-icons/fa';

/**
 * Cloud Cost Analyzer Tool
 *
 * Analyzes cloud spending and identifies optimization opportunities
 * Conservative estimates based on industry benchmarks for waste reduction
 */

interface CostInputs {
  monthlyCloudSpend: number;
  computePercent: number;
  storagePercent: number;
  dataTransferPercent: number;
  databasePercent: number;
  otherPercent: number;
  reservedInstancesPercent: number;
  autoScalingEnabled: boolean;
  rightsizingDone: boolean;
  unusedResourcesChecked: boolean;
}

interface WasteAnalysis {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  currentSpend: number;
  wastePercent: number;
  wasteAmount: number;
  potentialSavings: number;
  recommendations: string[];
}

interface Results {
  totalMonthlySpend: number;
  totalWaste: number;
  totalSavings: number;
  savingsPercent: number;
  annualSavings: number;
  wasteByCategory: WasteAnalysis[];
  quickWins: string[];
}

const defaultInputs: CostInputs = {
  monthlyCloudSpend: 10000,
  computePercent: 50,
  storagePercent: 20,
  dataTransferPercent: 10,
  databasePercent: 15,
  otherPercent: 5,
  reservedInstancesPercent: 20,
  autoScalingEnabled: false,
  rightsizingDone: false,
  unusedResourcesChecked: false,
};

export default function CloudCostAnalyzer() {
  const [inputs, setInputs] = useState<CostInputs>(defaultInputs);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof CostInputs, value: number | boolean) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const calculateResults = (): Results => {
    const {
      monthlyCloudSpend,
      computePercent,
      storagePercent,
      dataTransferPercent,
      databasePercent,
      reservedInstancesPercent,
      autoScalingEnabled,
      rightsizingDone,
      unusedResourcesChecked,
    } = inputs;

    // Calculate spend by category
    const computeSpend = (monthlyCloudSpend * computePercent) / 100;
    const storageSpend = (monthlyCloudSpend * storagePercent) / 100;
    const dataTransferSpend = (monthlyCloudSpend * dataTransferPercent) / 100;
    const databaseSpend = (monthlyCloudSpend * databasePercent) / 100;

    // Conservative waste estimates based on industry research
    // Compute waste: 30-40% typical (unused instances, over-provisioning, no auto-scaling)
    let computeWaste = 35;
    if (autoScalingEnabled) computeWaste -= 10;
    if (rightsizingDone) computeWaste -= 15;
    if (reservedInstancesPercent > 50) computeWaste -= 5;
    computeWaste = Math.max(computeWaste, 10); // Minimum 10% waste

    // Storage waste: 25-35% typical (old snapshots, unattached volumes, wrong tier)
    let storageWaste = 30;
    if (unusedResourcesChecked) storageWaste -= 15;
    storageWaste = Math.max(storageWaste, 10);

    // Data transfer waste: 15-20% typical (inefficient routing, no CDN)
    const dataTransferWaste = 18;

    // Database waste: 30-40% typical (over-provisioned, no read replicas, no caching)
    let databaseWaste = 35;
    if (rightsizingDone) databaseWaste -= 15;
    databaseWaste = Math.max(databaseWaste, 10);

    const wasteByCategory: WasteAnalysis[] = [
      {
        category: 'Compute (EC2, VMs)',
        icon: FaServer,
        currentSpend: computeSpend,
        wastePercent: computeWaste,
        wasteAmount: (computeSpend * computeWaste) / 100,
        potentialSavings: (computeSpend * computeWaste) / 100,
        recommendations: [
          !autoScalingEnabled && 'Enable auto-scaling to match demand (save 10-15%)',
          !rightsizingDone && 'Rightsize instances based on actual usage (save 15-20%)',
          reservedInstancesPercent < 50 && 'Purchase reserved instances for predictable workloads (save 30-40%)',
          'Shut down dev/test environments after hours',
          'Use Spot instances for fault-tolerant workloads',
        ].filter(Boolean) as string[],
      },
      {
        category: 'Storage (S3, EBS, Disk)',
        icon: FaHdd,
        currentSpend: storageSpend,
        wastePercent: storageWaste,
        wasteAmount: (storageSpend * storageWaste) / 100,
        potentialSavings: (storageSpend * storageWaste) / 100,
        recommendations: [
          'Delete old snapshots and backups (30-day retention)',
          'Identify and remove unattached volumes',
          'Move infrequently accessed data to cheaper tiers',
          'Enable S3 lifecycle policies',
          'Use compression for logs and archives',
        ],
      },
      {
        category: 'Data Transfer',
        icon: FaNetworkWired,
        currentSpend: dataTransferSpend,
        wastePercent: dataTransferWaste,
        wasteAmount: (dataTransferSpend * dataTransferWaste) / 100,
        potentialSavings: (dataTransferSpend * dataTransferWaste) / 100,
        recommendations: [
          'Use CDN (CloudFront/CloudFlare) for static assets',
          'Keep data transfer within same region',
          'Use VPC endpoints for AWS services',
          'Compress data before transfer',
          'Cache frequently accessed data',
        ],
      },
      {
        category: 'Databases (RDS, DynamoDB)',
        icon: FaDatabase,
        currentSpend: databaseSpend,
        wastePercent: databaseWaste,
        wasteAmount: (databaseSpend * databaseWaste) / 100,
        potentialSavings: (databaseSpend * databaseWaste) / 100,
        recommendations: [
          !rightsizingDone && 'Rightsize database instances (save 15-25%)',
          'Use read replicas to distribute load',
          'Implement caching layer (Redis/Memcached)',
          'Enable auto-pause for dev databases',
          'Archive old data to cheaper storage',
        ].filter(Boolean) as string[],
      },
    ];

    const totalWaste = wasteByCategory.reduce((sum, cat) => sum + cat.wasteAmount, 0);
    const totalSavings = totalWaste; // Conservative: savings = waste removed
    const savingsPercent = (totalSavings / monthlyCloudSpend) * 100;
    const annualSavings = totalSavings * 12;

    // Quick wins: top 3 recommendations across all categories
    const quickWins = wasteByCategory
      .sort((a, b) => b.wasteAmount - a.wasteAmount)
      .slice(0, 3)
      .map((cat) => cat.recommendations[0])
      .filter(Boolean) as string[];

    return {
      totalMonthlySpend: monthlyCloudSpend,
      totalWaste,
      totalSavings,
      savingsPercent,
      annualSavings,
      wasteByCategory: wasteByCategory.sort((a, b) => b.wasteAmount - a.wasteAmount),
      quickWins,
    };
  };

  const handleAnalyze = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const results = calculateResults();

      const response = await fetch('/api/tools/cost-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          results,
        }),
      });

      if (response.ok) {
        alert('Report sent! Check your email for detailed optimization recommendations.');
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

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (showResults) {
    const results = calculateResults();

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Overall Savings */}
        <div className="card card-lg bg-gradient-to-br from-success-50 to-success-100 border-success-200">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-success-600 to-success-500 mb-4 shadow-lg">
              <FaDollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3 text-neutral-900">Potential Savings Identified</h3>
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-5xl font-bold text-success-600">
                  {formatCurrency(results.totalSavings)}
                </div>
                <div className="text-sm text-neutral-600">per month</div>
              </div>
              <div className="h-16 w-px bg-neutral-300" />
              <div>
                <div className="text-5xl font-bold text-success-600">
                  {formatCurrency(results.annualSavings)}
                </div>
                <div className="text-sm text-neutral-600">per year</div>
              </div>
            </div>
            <div className="pt-4 border-t border-success-200">
              <div className="text-2xl font-bold text-success-700">
                {results.savingsPercent.toFixed(1)}% cost reduction
              </div>
            </div>
          </div>
        </div>

        {/* Current vs Optimized */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-warning-600 text-2xl" />
              <h4 className="heading-4">Current Spending</h4>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-neutral-900">
                {formatCurrency(results.totalMonthlySpend)}
              </div>
              <div className="text-sm text-neutral-600">per month</div>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Waste identified:</span>
                  <span className="font-bold text-error-600">{formatCurrency(results.totalWaste)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6 bg-gradient-to-br from-success-50 to-success-100 border-success-200">
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-success-600 text-2xl" />
              <h4 className="heading-4 text-neutral-900">Optimized Spending</h4>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success-600">
                {formatCurrency(results.totalMonthlySpend - results.totalSavings)}
              </div>
              <div className="text-sm text-neutral-600">per month</div>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Savings:</span>
                  <span className="font-bold text-success-600">{formatCurrency(results.totalSavings)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waste by Category */}
        <div className="card card-lg">
          <h4 className="heading-4 mb-6">Waste Breakdown by Category</h4>
          <div className="space-y-6">
            {results.wasteByCategory.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">{category.category}</div>
                        <div className="text-sm text-neutral-600">
                          Current: {formatCurrency(category.currentSpend)}/mo
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-error-600">
                        {formatCurrency(category.wasteAmount)}
                      </div>
                      <div className="text-sm text-neutral-600">{category.wastePercent}% waste</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.wastePercent}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-error-600 to-error-500"
                    />
                  </div>

                  {/* Recommendations */}
                  <div className="pl-13 space-y-1">
                    {category.recommendations.slice(0, 3).map((rec, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <FaLightbulb className="text-warning-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Wins */}
        <div className="card card-lg bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <h4 className="heading-4 mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-primary-600" />
            Quick Wins - Start Here
          </h4>
          <ul className="space-y-3">
            {results.quickWins.map((win, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-3 text-neutral-800"
              >
                <span className="font-bold text-primary-600 text-lg">{index + 1}.</span>
                <span>{win}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Email Capture */}
        <div className="card card-lg bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <FaDownload className="w-12 h-12 mx-auto text-primary-400" />
            <h4 className="heading-4">Get Your Detailed Cost Optimization Report</h4>
            <p className="text-neutral-300">
              Receive a comprehensive PDF report with:
            </p>
            <ul className="text-left space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Line-by-line cost analysis
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Specific resource recommendations
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Implementation timeline (quick wins + long-term)
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                ROI projections for optimization efforts
              </li>
            </ul>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input w-full text-neutral-900"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg w-full"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Report'}
              </button>
            </form>
            <p className="text-xs text-neutral-400">
              We respect your privacy. No spam, just valuable insights.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <button
            onClick={() => {
              setShowResults(false);
            }}
            className="btn btn-outline"
          >
            Analyze Again
          </button>
        </div>
      </motion.div>
    );
  }

  const totalPercent =
    inputs.computePercent +
    inputs.storagePercent +
    inputs.dataTransferPercent +
    inputs.databasePercent +
    inputs.otherPercent;

  return (
    <div className="space-y-8">
      <div className="card card-lg">
        <h3 className="heading-3 mb-6">Cloud Spending Breakdown</h3>

        {/* Monthly Spend */}
        <div className="space-y-3 mb-8">
          <label className="font-medium text-neutral-900">
            Total Monthly Cloud Spend: {formatCurrency(inputs.monthlyCloudSpend)}
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={inputs.monthlyCloudSpend}
            onChange={(e) => handleInputChange('monthlyCloudSpend', parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-xs text-neutral-500">
            <span>$1K</span>
            <span>$50K</span>
            <span>$100K+</span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-neutral-900">Cost Distribution by Category</h4>
            <span className={`text-sm ${totalPercent === 100 ? 'text-success-600' : 'text-error-600'}`}>
              {totalPercent}% (must equal 100%)
            </span>
          </div>

          {[
            { field: 'computePercent', label: 'Compute (EC2, VMs)', icon: FaServer },
            { field: 'storagePercent', label: 'Storage (S3, EBS, Disk)', icon: FaHdd },
            { field: 'dataTransferPercent', label: 'Data Transfer', icon: FaNetworkWired },
            { field: 'databasePercent', label: 'Databases (RDS, DynamoDB)', icon: FaDatabase },
            { field: 'otherPercent', label: 'Other Services', icon: FaChartLine },
          ].map(({ field, label, icon: Icon }) => {
            const value = inputs[field as keyof CostInputs] as number;
            const amount = (inputs.monthlyCloudSpend * value) / 100;

            return (
              <div key={field} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="text-primary-600" />
                    <label className="text-sm font-medium text-neutral-900">{label}</label>
                  </div>
                  <span className="text-sm font-bold text-neutral-900">
                    {value}% ({formatCurrency(amount)})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={value}
                  onChange={(e) => handleInputChange(field as keyof CostInputs, parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
            );
          })}
        </div>

        {/* Reserved Instances */}
        <div className="space-y-3 mb-8 p-4 bg-neutral-50 rounded-lg">
          <label className="font-medium text-neutral-900">
            Reserved Instances: {inputs.reservedInstancesPercent}% of compute
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={inputs.reservedInstancesPercent}
            onChange={(e) => handleInputChange('reservedInstancesPercent', parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <p className="text-xs text-neutral-600">
            Reserved instances save 30-40% vs on-demand for predictable workloads
          </p>
        </div>

        {/* Optimization Checkboxes */}
        <div className="space-y-4 mb-8 p-4 bg-neutral-50 rounded-lg">
          <h4 className="font-medium text-neutral-900">Current Optimization Practices</h4>
          {[
            {
              field: 'autoScalingEnabled',
              label: 'Auto-scaling enabled',
              description: 'Automatically adjust capacity based on demand',
            },
            {
              field: 'rightsizingDone',
              label: 'Regular rightsizing reviews',
              description: 'Match instance sizes to actual workload requirements',
            },
            {
              field: 'unusedResourcesChecked',
              label: 'Unused resources identified',
              description: 'Regular cleanup of orphaned resources',
            },
          ].map(({ field, label, description }) => (
            <label key={field} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={inputs[field as keyof CostInputs] as boolean}
                onChange={(e) => handleInputChange(field as keyof CostInputs, e.target.checked)}
                className="mt-1 w-4 h-4 accent-primary-600"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-neutral-900">{label}</div>
                <div className="text-xs text-neutral-600">{description}</div>
              </div>
            </label>
          ))}
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={totalPercent !== 100}
          className="btn btn-primary btn-lg w-full"
        >
          <FaChartLine />
          Analyze Cloud Costs
        </button>

        {totalPercent !== 100 && (
          <p className="text-sm text-error-600 text-center">
            Please adjust percentages to total 100%
          </p>
        )}
      </div>

      {/* Methodology */}
      <div className="card p-6 bg-neutral-50">
        <h4 className="font-medium text-neutral-900 mb-3">How We Calculate Savings</h4>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-success-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Conservative estimates</strong> based on AWS Well-Architected Framework and industry benchmarks
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-success-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Typical waste:</strong> 30-35% in compute, 25-30% in storage, 15-20% in data transfer
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-success-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Adjustments</strong> based on your current optimization practices
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
