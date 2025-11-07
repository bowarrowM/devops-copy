'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaCodeBranch } from 'react-icons/fa';

/**
 * CI/CD Pipeline Service Page
 *
 * Automated CI/CD pipeline setup service
 */
export default function CICDServicePageEN() {
  const serviceData = {
    // Hero Section
    title: 'Ship Code 10x Faster with Zero-Downtime Deployments',
    subtitle: 'Automate everything from commit to production with battle-tested pipelines that catch bugs before users do.',
    benefits: [
      'Automated testing',
      'Security scanning',
      'Rollback in seconds',
      'Zero downtime',
    ],
    heroIcon: <FaCodeBranch className="w-10 h-10 text-white" />,
    heroGradient: 'from-purple-600 to-pink-500',

    // Problem/Solution
    problemTitle: 'Manual Deployment Problems',
    problems: [
      'Manual deployments taking hours with high failure rates',
      'No automated testing - bugs reach production',
      'Security vulnerabilities discovered too late',
      'Inconsistent environments (dev, staging, prod)',
      'No rollback strategy when deployments fail',
      'Team afraid to deploy, leading to slow release cycles',
    ],

    solutionTitle: 'Our CI/CD Solution',
    solutions: [
      'Fully automated pipeline from commit to production',
      'Comprehensive test automation (unit, integration, E2E)',
      'Security scanning at every stage (SAST, DAST, dependencies)',
      'Environment parity with Infrastructure as Code',
      'Automated rollbacks and canary deployments',
      'Confidence to deploy multiple times per day',
    ],

    // Process
    process: [
      {
        title: 'Current State Assessment',
        description: 'We audit your existing deployment process, identify bottlenecks, and map out your ideal CI/CD workflow based on your tech stack and team structure.',
        timeline: 'Week 1',
      },
      {
        title: 'Pipeline Architecture Design',
        description: 'Design comprehensive CI/CD architecture including branch strategies, testing stages, security gates, and deployment strategies (blue-green, canary, rolling).',
        timeline: 'Week 1',
      },
      {
        title: 'Build Pipeline Implementation',
        description: 'Set up automated builds, configure test runners, integrate code quality checks (linting, coverage), and establish artifact repositories.',
        timeline: 'Week 2-3',
      },
      {
        title: 'Security Integration',
        description: 'Implement security scanning (SAST with SonarQube, dependency scanning with Snyk), secrets management (Vault, AWS Secrets Manager), and compliance checks.',
        timeline: 'Week 3-4',
      },
      {
        title: 'Deployment Automation',
        description: 'Configure automated deployments to all environments, implement approval gates for production, set up monitoring and alerting for deployment health.',
        timeline: 'Week 4-5',
      },
      {
        title: 'Testing & Optimization',
        description: 'Test the complete pipeline with real workloads, optimize build times, fine-tune deployment strategies, and train your team on the new workflow.',
        timeline: 'Week 5-6',
      },
    ],

    // Deliverables
    deliverables: [
      {
        title: 'Automated Build Pipeline',
        items: [
          'Source control integration (GitHub, GitLab, Bitbucket)',
          'Automated build triggers',
          'Parallel test execution',
          'Code quality gates',
        ],
      },
      {
        title: 'Testing Framework',
        items: [
          'Unit test automation',
          'Integration test suite',
          'End-to-end test automation',
          'Performance test integration',
        ],
      },
      {
        title: 'Security Scanning',
        items: [
          'SAST (static analysis)',
          'DAST (dynamic analysis)',
          'Dependency vulnerability scanning',
          'Container image scanning',
        ],
      },
      {
        title: 'Deployment Automation',
        items: [
          'Multi-environment deployment',
          'Blue-green or canary strategy',
          'Automated rollback',
          'Database migration automation',
        ],
      },
      {
        title: 'Monitoring & Alerts',
        items: [
          'Deployment success tracking',
          'Build failure notifications',
          'Performance monitoring',
          'Custom alert rules',
        ],
      },
      {
        title: 'Documentation & Training',
        items: [
          'Pipeline architecture docs',
          'Developer workflow guide',
          'Troubleshooting runbooks',
          'Team training workshop',
        ],
      },
    ],

    // Pricing
    pricing: {
      startingPrice: '$28,000',
      priceRange: '$25,000 - $55,000',
      included: [
        'Complete CI/CD pipeline setup on your platform of choice',
        'Automated testing framework implementation',
        'Security scanning integration (SAST, DAST, dependencies)',
        'Multi-environment deployment automation',
        'Rollback and recovery procedures',
        'Comprehensive documentation',
        '1 full-day team training workshop',
        '30 days of post-launch support',
      ],
      timeline: '4-6 weeks',
    },

    // Case Study
    caseStudy: {
      company: 'FinTech Startup',
      challenge: 'A fast-growing FinTech startup was deploying manually once per week, with each deployment taking 3-4 hours and having a 20% failure rate. This was severely limiting their ability to compete and respond to customer needs.',
      solution: 'We implemented a comprehensive CI/CD pipeline with GitHub Actions, automated testing, security scanning, and blue-green deployments to AWS ECS. The entire setup took 5 weeks from assessment to production.',
      results: [
        '95% faster deployments (3h → 9min)',
        'Deploy 15x/week (vs 1x)',
        '99% deployment success rate',
        'Zero production incidents',
      ],
    },

    // Related Services
    relatedServices: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Deploy containerized applications with Kubernetes',
        link: '/services/kubernetes',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Manage infrastructure with Terraform and GitOps',
        link: '/services/iac',
      },
      {
        title: 'Monitoring & Observability',
        description: 'Full visibility into your systems with modern monitoring',
        link: '/services/monitoring',
      },
    ],
  };

  return (
    <LanguageProvider locale="en">
      <main className="min-h-screen">
        <NavbarModern />
        <ServicePageTemplate {...serviceData} />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
