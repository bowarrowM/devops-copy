'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaCode,
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaUsers,
  FaVial,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaDownload,
} from 'react-icons/fa';

/**
 * DevOps Maturity Assessment Tool
 *
 * Comprehensive assessment across 8 DevOps dimensions
 * Each dimension scored 0-10, provides maturity level and recommendations
 */

interface Question {
  id: string;
  text: string;
  description: string;
}

interface Dimension {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  questions: Question[];
}

interface Assessment {
  [dimensionId: string]: {
    [questionId: string]: number;
  };
}

interface DimensionScore {
  dimension: string;
  score: number;
  level: string;
  color: string;
}

const dimensions: Dimension[] = [
  {
    id: 'cicd',
    title: 'CI/CD Automation',
    icon: FaRocket,
    gradient: 'from-primary-600 to-primary-500',
    questions: [
      {
        id: 'cicd-1',
        text: 'How automated is your deployment process?',
        description: '0 = Manual, 5 = Semi-automated, 10 = Fully automated with zero-touch deployments',
      },
      {
        id: 'cicd-2',
        text: 'How often do you deploy to production?',
        description: '0 = Quarterly, 3 = Monthly, 6 = Weekly, 10 = Multiple times per day',
      },
      {
        id: 'cicd-3',
        text: 'How comprehensive is your automated testing?',
        description: '0 = Manual testing only, 5 = Unit + integration tests, 10 = Full pyramid with E2E',
      },
      {
        id: 'cicd-4',
        text: 'How quickly can you rollback a bad deployment?',
        description: '0 = Hours/days, 5 = 30-60 minutes, 10 = < 5 minutes automated rollback',
      },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    icon: FaCode,
    gradient: 'from-green-600 to-emerald-500',
    questions: [
      {
        id: 'iac-1',
        text: 'What percentage of infrastructure is defined as code?',
        description: '0 = 0%, 5 = 50%, 10 = 100% infrastructure as code',
      },
      {
        id: 'iac-2',
        text: 'How consistent are your environments?',
        description: '0 = All different, 5 = Mostly similar, 10 = Identical (same IaC templates)',
      },
      {
        id: 'iac-3',
        text: 'Do you use version control for infrastructure?',
        description: '0 = No version control, 5 = Some versioning, 10 = Full Git workflow with PR review',
      },
      {
        id: 'iac-4',
        text: 'How quickly can you provision a new environment?',
        description: '0 = Weeks, 5 = Days, 10 = < 1 hour fully automated',
      },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    icon: FaChartLine,
    gradient: 'from-pink-600 to-rose-500',
    questions: [
      {
        id: 'obs-1',
        text: 'How comprehensive is your monitoring coverage?',
        description: '0 = Basic uptime checks, 5 = Metrics + logs, 10 = Full observability (metrics + logs + traces)',
      },
      {
        id: 'obs-2',
        text: 'How do you discover issues?',
        description: '0 = Users report them, 5 = We see them first sometimes, 10 = Proactive alerting before user impact',
      },
      {
        id: 'obs-3',
        text: 'What is your Mean Time to Resolution (MTTR)?',
        description: '0 = Hours/days, 5 = 1-2 hours, 10 = < 15 minutes',
      },
      {
        id: 'obs-4',
        text: 'How much alert noise do you have?',
        description: '0 = Constant alerts (90%+ false positives), 5 = Moderate noise, 10 = Intelligent alerts (<10% false positives)',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    icon: FaShieldAlt,
    gradient: 'from-orange-600 to-red-500',
    questions: [
      {
        id: 'sec-1',
        text: 'When do you perform security testing?',
        description: '0 = Before release only, 5 = During development, 10 = Automated in every commit',
      },
      {
        id: 'sec-2',
        text: 'How automated is your compliance checking?',
        description: '0 = Manual audits, 5 = Some automation, 10 = Continuous compliance monitoring',
      },
      {
        id: 'sec-3',
        text: 'How do you manage secrets and credentials?',
        description: '0 = Hardcoded/config files, 5 = Environment variables, 10 = Centralized secrets management (Vault)',
      },
      {
        id: 'sec-4',
        text: 'How quickly do you patch critical vulnerabilities?',
        description: '0 = Weeks/months, 5 = Within a week, 10 = < 24 hours automated patching',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    icon: FaCloud,
    gradient: 'from-blue-600 to-cyan-500',
    questions: [
      {
        id: 'cloud-1',
        text: 'How cloud-native is your architecture?',
        description: '0 = Lift-and-shift VMs, 5 = Some containers, 10 = Kubernetes + serverless + managed services',
      },
      {
        id: 'cloud-2',
        text: 'How scalable is your infrastructure?',
        description: '0 = Manual scaling, 5 = Scheduled auto-scaling, 10 = Dynamic auto-scaling based on metrics',
      },
      {
        id: 'cloud-3',
        text: 'How resilient is your architecture?',
        description: '0 = Single point of failure, 5 = Some redundancy, 10 = Multi-AZ/region with auto-failover',
      },
      {
        id: 'cloud-4',
        text: 'How optimized are your cloud costs?',
        description: '0 = No optimization, 5 = Basic rightsizing, 10 = FinOps with continuous optimization',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    icon: FaUsers,
    gradient: 'from-purple-600 to-indigo-500',
    questions: [
      {
        id: 'collab-1',
        text: 'How do Dev and Ops teams work together?',
        description: '0 = Silos/handoffs, 5 = Some collaboration, 10 = Unified DevOps team with shared goals',
      },
      {
        id: 'collab-2',
        text: 'How much knowledge sharing happens?',
        description: '0 = Knowledge in heads, 5 = Some documentation, 10 = Comprehensive docs + training + pair programming',
      },
      {
        id: 'collab-3',
        text: 'How empowered are developers to deploy?',
        description: '0 = Ops team deploys, 5 = Devs can deploy with approval, 10 = Self-service deployments',
      },
      {
        id: 'collab-4',
        text: 'How do you handle incidents?',
        description: '0 = Blame culture, 5 = Post-mortems sometimes, 10 = Blameless culture with systematic improvement',
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    icon: FaVial,
    gradient: 'from-teal-600 to-green-500',
    questions: [
      {
        id: 'test-1',
        text: 'What is your test automation coverage?',
        description: '0 = Manual testing, 5 = 50% automated, 10 = >80% automated with full pyramid',
      },
      {
        id: 'test-2',
        text: 'How long does your test suite take?',
        description: '0 = Hours, 5 = 30-60 minutes, 10 = < 10 minutes (parallelized)',
      },
      {
        id: 'test-3',
        text: 'When do you perform performance testing?',
        description: '0 = Before release, 5 = During development, 10 = Continuous performance testing in CI/CD',
      },
      {
        id: 'test-4',
        text: 'How reliable are your tests?',
        description: '0 = Flaky, 5 = Mostly reliable, 10 = Deterministic with zero flakiness',
      },
    ],
  },
  {
    id: 'incident',
    title: 'Incident Response',
    icon: FaExclamationTriangle,
    gradient: 'from-yellow-600 to-orange-500',
    questions: [
      {
        id: 'incident-1',
        text: 'How structured is your incident response process?',
        description: '0 = Ad-hoc, 5 = Basic process, 10 = Formal incident command system with runbooks',
      },
      {
        id: 'incident-2',
        text: 'How do you communicate during incidents?',
        description: '0 = Email/random channels, 5 = Dedicated Slack channel, 10 = Automated status pages + ChatOps',
      },
      {
        id: 'incident-3',
        text: 'Do you conduct post-incident reviews?',
        description: '0 = Never, 5 = For major incidents, 10 = Always, with action items tracked to completion',
      },
      {
        id: 'incident-4',
        text: 'How much of incident response is automated?',
        description: '0 = All manual, 5 = Some automation, 10 = Auto-remediation for common issues',
      },
    ],
  },
];

const getMaturityLevel = (score: number): { level: string; color: string; description: string } => {
  if (score < 3) {
    return {
      level: 'Initial',
      color: 'text-error-600',
      description: 'Ad-hoc, manual processes with unpredictable results',
    };
  } else if (score < 5) {
    return {
      level: 'Developing',
      color: 'text-warning-600',
      description: 'Some automation, but inconsistent practices',
    };
  } else if (score < 7) {
    return {
      level: 'Defined',
      color: 'text-yellow-600',
      description: 'Standardized processes documented and followed',
    };
  } else if (score < 9) {
    return {
      level: 'Managed',
      color: 'text-primary-600',
      description: 'Measured, monitored, and continuously improved',
    };
  } else {
    return {
      level: 'Optimizing',
      color: 'text-success-600',
      description: 'World-class DevOps with continuous innovation',
    };
  }
};

const getRecommendations = (dimensionScores: DimensionScore[]): string[] => {
  const recommendations: string[] = [];

  // Sort by score ascending to prioritize lowest scores
  const sorted = [...dimensionScores].sort((a, b) => a.score - b.score);

  // Get top 3 areas needing improvement
  sorted.slice(0, 3).forEach((dim) => {
    if (dim.score < 5) {
      switch (dim.dimension) {
        case 'CI/CD Automation':
          recommendations.push('Implement automated CI/CD pipelines to reduce deployment time by 90%');
          break;
        case 'Infrastructure as Code':
          recommendations.push('Codify infrastructure with Terraform to ensure environment consistency');
          break;
        case 'Monitoring & Observability':
          recommendations.push('Deploy comprehensive observability to reduce MTTR from hours to minutes');
          break;
        case 'Security & Compliance':
          recommendations.push('Implement DevSecOps to catch vulnerabilities before production');
          break;
        case 'Cloud Architecture':
          recommendations.push('Modernize to cloud-native architecture for better scalability and resilience');
          break;
        case 'Team Collaboration':
          recommendations.push('Break down silos with unified DevOps teams and shared goals');
          break;
        case 'Testing & Quality':
          recommendations.push('Increase test automation to 80%+ coverage for faster, safer deployments');
          break;
        case 'Incident Response':
          recommendations.push('Establish formal incident response process with automated remediation');
          break;
      }
    }
  });

  return recommendations;
};

export default function MaturityAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentDimension = dimensions[currentStep];
  const isLastStep = currentStep === dimensions.length - 1;
  const progressPercent = ((currentStep + 1) / dimensions.length) * 100;

  const handleScoreChange = (questionId: string, score: number) => {
    setAssessment((prev) => ({
      ...prev,
      [currentDimension.id]: {
        ...prev[currentDimension.id],
        [questionId]: score,
      },
    }));
  };

  const getCurrentScore = (questionId: string): number => {
    return assessment[currentDimension.id]?.[questionId] ?? 5;
  };

  const isDimensionComplete = (): boolean => {
    const dimData = assessment[currentDimension.id];
    if (!dimData) return false;
    return currentDimension.questions.every((q) => dimData[q.id] !== undefined);
  };

  const handleNext = () => {
    if (isLastStep) {
      setShowResults(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = (): DimensionScore[] => {
    return dimensions.map((dim) => {
      const dimData = assessment[dim.id] || {};
      const scores = Object.values(dimData);
      const avgScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
      const { level, color } = getMaturityLevel(avgScore);

      return {
        dimension: dim.title,
        score: Math.round(avgScore * 10) / 10,
        level,
        color,
      };
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dimensionScores = calculateResults();
      const overallScore = dimensionScores.reduce((sum, dim) => sum + dim.score, 0) / dimensionScores.length;
      const { level: overallLevel } = getMaturityLevel(overallScore);
      const recommendations = getRecommendations(dimensionScores);

      const response = await fetch('/api/tools/assessment-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          dimensionScores,
          overallScore,
          overallLevel,
          recommendations,
        }),
      });

      if (response.ok) {
        alert('Report sent! Check your email for detailed recommendations.');
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

  if (showResults) {
    const dimensionScores = calculateResults();
    const overallScore = dimensionScores.reduce((sum, dim) => sum + dim.score, 0) / dimensionScores.length;
    const { level: overallLevel, color: overallColor, description: overallDescription } = getMaturityLevel(overallScore);
    const recommendations = getRecommendations(dimensionScores);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Overall Score */}
        <div className="card card-lg text-center">
          <div className="space-y-4">
            <h3 className="heading-3">Your DevOps Maturity Score</h3>
            <div className="flex items-center justify-center gap-4">
              <div className={`text-7xl font-bold ${overallColor}`}>
                {overallScore.toFixed(1)}
              </div>
              <div className="text-left">
                <div className={`text-2xl font-bold ${overallColor}`}>{overallLevel}</div>
                <div className="text-neutral-600">{overallDescription}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dimension Breakdown */}
        <div className="card card-lg">
          <h4 className="heading-4 mb-6">Dimension Breakdown</h4>
          <div className="space-y-6">
            {dimensionScores.map((dim, index) => {
              const dimension = dimensions.find((d) => d.title === dim.dimension);
              const Icon = dimension?.icon || FaCheckCircle;

              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dimension?.gradient || 'from-neutral-600 to-neutral-500'} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">{dim.dimension}</div>
                        <div className={`text-sm ${dim.color}`}>{dim.level}</div>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${dim.color}`}>{dim.score.toFixed(1)}</div>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(dim.score / 10) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${dimension?.gradient || 'from-neutral-600 to-neutral-500'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="card card-lg bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <h4 className="heading-4 mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-primary-600" />
            Top Priorities for Improvement
          </h4>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-3 text-neutral-800"
              >
                <span className="font-bold text-primary-600 text-lg">{index + 1}.</span>
                <span>{rec}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Email Capture */}
        <div className="card card-lg bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <FaDownload className="w-12 h-12 mx-auto text-primary-400" />
            <h4 className="heading-4">Get Your Detailed Report</h4>
            <p className="text-neutral-300">
              Receive a comprehensive PDF report with:
            </p>
            <ul className="text-left space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Detailed dimension analysis with benchmarks
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Prioritized roadmap for next 6-12 months
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                ROI projections for DevOps transformation
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-success-400" />
                Custom recommendations based on your scores
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
              setCurrentStep(0);
              setAssessment({});
            }}
            className="btn btn-outline"
          >
            <FaArrowLeft />
            Retake Assessment
          </button>
        </div>
      </motion.div>
    );
  }

  const Icon = currentDimension.icon;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">
            Dimension {currentStep + 1} of {dimensions.length}
          </span>
          <span className="font-medium text-primary-600">{Math.round(progressPercent)}% Complete</span>
        </div>
        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-primary-600 to-primary-500"
          />
        </div>
      </div>

      {/* Dimension Header */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card card-lg"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentDimension.gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="heading-3">{currentDimension.title}</h3>
            <p className="text-neutral-600">Rate each aspect from 0 (worst) to 10 (best)</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {currentDimension.questions.map((question, index) => {
            const score = getCurrentScore(question.id);

            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="space-y-1">
                  <label className="font-medium text-neutral-900">{question.text}</label>
                  <p className="text-sm text-neutral-600">{question.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Score</span>
                    <span className={`text-2xl font-bold ${getMaturityLevel(score).color}`}>
                      {score}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={score}
                    onChange={(e) => handleScoreChange(question.id, parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>0 - Initial</span>
                    <span>5 - Defined</span>
                    <span>10 - Optimizing</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-200">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn btn-outline"
          >
            <FaArrowLeft />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isDimensionComplete()}
            className="btn btn-primary"
          >
            {isLastStep ? 'See Results' : 'Next'}
            <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Help Text */}
      <div className="text-center text-sm text-neutral-600">
        <p>Answer all questions to proceed to the next dimension</p>
      </div>
    </div>
  );
}
