'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaCode } from 'react-icons/fa';

export default function IaCServicePage() {
  const serviceData = {
    title: 'Infrastructure as Code with Terraform & GitOps',
    subtitle: 'Stop clicking in consoles. Manage infrastructure like software with version control, code review, and automated deployments.',
    benefits: [
      'Reproducible environments',
      'Version controlled',
      'Automated deployments',
      'GitOps workflow',
    ],
    heroIcon: <FaCode className="w-10 h-10 text-white" />,
    heroGradient: 'from-green-600 to-emerald-500',

    problemTitle: 'Manual Infrastructure Problems',
    problems: [
      'Manual infrastructure changes cause errors and downtime',
      'Inconsistent environments (dev ≠ staging ≠ production)',
      'No audit trail of who changed what and when',
      'Can\'t recreate infrastructure after disaster',
      'Slow to provision new environments',
      'Team knowledge locked in individual heads',
    ],

    solutionTitle: 'Our IaC Solution',
    solutions: [
      'All infrastructure defined in code (Terraform)',
      'Identical environments across dev, staging, production',
      'Full audit trail with Git history',
      'Disaster recovery: recreate entire infrastructure in hours',
      'Self-service environment provisioning',
      'Documentation as code - always up to date',
    ],

    process: [
      {
        title: 'Current State Assessment',
        description: 'Document existing infrastructure, identify resources to codify, assess complexity, and plan migration approach.',
        timeline: 'Week 1',
      },
      {
        title: 'Terraform Foundation',
        description: 'Set up Terraform workspace, establish module structure, configure remote state (S3/Azure Storage), implement state locking.',
        timeline: 'Week 1-2',
      },
      {
        title: 'Codify Infrastructure',
        description: 'Write Terraform code for all infrastructure: networking, compute, databases, load balancers, DNS, monitoring. Import existing resources.',
        timeline: 'Week 2-4',
      },
      {
        title: 'GitOps Workflow',
        description: 'Set up Git repository, implement pull request workflow, configure automated testing (terraform plan), set up CI/CD for infrastructure.',
        timeline: 'Week 4-5',
      },
      {
        title: 'Testing & Validation',
        description: 'Test infrastructure provisioning in dev/staging, validate disaster recovery, practice environment recreation, tune performance.',
        timeline: 'Week 5-6',
      },
      {
        title: 'Training & Handover',
        description: 'Train team on Terraform and GitOps workflow, document patterns and best practices, establish code review process.',
        timeline: 'Week 6',
      },
    ],

    deliverables: [
      {
        title: 'Terraform Codebase',
        items: [
          'All infrastructure as code',
          'Modular, reusable structure',
          'Variables & secrets management',
          'Multi-environment support',
        ],
      },
      {
        title: 'GitOps Workflow',
        items: [
          'Git repository with history',
          'Pull request workflow',
          'Automated plan/apply',
          'Code review guidelines',
        ],
      },
      {
        title: 'CI/CD Pipeline',
        items: [
          'Automated terraform plan',
          'Automated testing',
          'Approval gates',
          'Automated deployment',
        ],
      },
      {
        title: 'State Management',
        items: [
          'Remote state backend',
          'State locking',
          'Backup & recovery',
          'State file security',
        ],
      },
      {
        title: 'Documentation',
        items: [
          'Module documentation',
          'Usage examples',
          'Best practices guide',
          'Troubleshooting runbook',
        ],
      },
      {
        title: 'Training',
        items: [
          '2-day Terraform workshop',
          'GitOps workflow training',
          'Hands-on exercises',
          'Reference implementations',
        ],
      },
    ],

    pricing: {
      startingPrice: '$32,000',
      priceRange: '$32,000 - $70,000',
      included: [
        'Complete infrastructure codified with Terraform',
        'GitOps workflow implementation',
        'CI/CD pipeline for infrastructure',
        'Remote state management setup',
        'Multi-environment support (dev, staging, prod)',
        'Secrets management integration',
        'Comprehensive documentation',
        '2-day team training workshop',
        '30 days post-implementation support',
      ],
      timeline: '6-8 weeks',
    },

    caseStudy: {
      company: 'Financial Services Startup',
      challenge: 'A fintech startup was manually managing AWS infrastructure across 3 environments. Provisioning new environments took 2 weeks, and they had inconsistencies causing production bugs.',
      solution: 'We codified their entire AWS infrastructure (VPC, ECS, RDS, ElastiCache, CloudFront) in Terraform, implemented GitOps workflow, and set up automated CI/CD for infrastructure changes.',
      results: [
        'New environments in <1 hour',
        '100% environment parity',
        'Zero config drift',
        '5x faster infrastructure changes',
      ],
    },

    relatedServices: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Manage Kubernetes with IaC and GitOps',
        link: '/services/kubernetes',
      },
      {
        title: 'Cloud Migration',
        description: 'Migrate to cloud with IaC from day one',
        link: '/services/cloud-migration',
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Automate infrastructure and application deployments',
        link: '/services/cicd',
      },
    ],
  };

  return (
    <LanguageProvider locale="tr">
      <main className="min-h-screen">
        <NavbarModern />
        <ServicePageTemplate {...serviceData} />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
