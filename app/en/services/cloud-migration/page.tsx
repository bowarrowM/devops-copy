'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaCloud } from 'react-icons/fa';

export default function CloudMigrationServicePageEN() {
  const serviceData = {
    title: 'Zero-Downtime Cloud Migration to AWS, Azure, or GCP',
    subtitle: 'Move to the cloud with confidence. Seamless migration strategy, execution, and optimization.',
    benefits: [
      'Zero downtime',
      'Cost optimized',
      'Security hardened',
      'Full support',
    ],
    heroIcon: <FaCloud className="w-10 h-10 text-white" />,
    heroGradient: 'from-cyan-600 to-blue-500',

    problemTitle: 'Cloud Migration Challenges',
    problems: [
      'Fear of downtime during migration',
      'Unclear which cloud provider to choose',
      'Legacy applications not cloud-ready',
      'Security and compliance concerns',
      'Unpredictable cloud costs',
      'Lack of cloud expertise in-house',
    ],

    solutionTitle: 'Our Migration Approach',
    solutions: [
      'Phased migration with zero-downtime strategy',
      'Provider selection based on your workloads and budget',
      'Application modernization and refactoring',
      'Security-first architecture with compliance built-in',
      'Cost optimization from day one with FinOps',
      'Knowledge transfer and team training',
    ],

    process: [
      {
        title: 'Discovery & Planning',
        description: 'Inventory applications, assess cloud readiness, choose optimal cloud provider, design target architecture, and create detailed migration plan.',
        timeline: 'Week 1-2',
      },
      {
        title: 'Proof of Concept',
        description: 'Migrate a non-critical application as POC, validate approach, refine strategy, and build team confidence.',
        timeline: 'Week 3',
      },
      {
        title: 'Infrastructure Setup',
        description: 'Set up cloud accounts, configure networking (VPC, subnets, security groups), implement IAM policies, and establish baseline security.',
        timeline: 'Week 4-5',
      },
      {
        title: 'Application Migration',
        description: 'Migrate applications in waves based on priority and dependencies. Use lift-and-shift, replatform, or refactor strategies as appropriate.',
        timeline: 'Week 6-10',
      },
      {
        title: 'Optimization & Cutover',
        description: 'Optimize performance, right-size resources, implement cost controls, perform final cutover with rollback plan ready.',
        timeline: 'Week 11-12',
      },
      {
        title: 'Stabilization & Training',
        description: 'Monitor for issues, optimize based on real usage, train team on cloud operations, and hand over documentation.',
        timeline: 'Week 13-14',
      },
    ],

    deliverables: [
      {
        title: 'Cloud Infrastructure',
        items: [
          'Production environment on AWS/Azure/GCP',
          'Networking & security configured',
          'IAM policies & access control',
          'Backup & disaster recovery',
        ],
      },
      {
        title: 'Migrated Applications',
        items: [
          'All apps running on cloud',
          'Performance validated',
          'Data fully migrated',
          'Integrations tested',
        ],
      },
      {
        title: 'Monitoring & Alerts',
        items: [
          'CloudWatch/Monitor/Stackdriver',
          'Cost monitoring dashboards',
          'Performance metrics',
          'Custom alert rules',
        ],
      },
      {
        title: 'Cost Optimization',
        items: [
          'Right-sized instances',
          'Reserved instances strategy',
          'Auto-scaling configured',
          'Cost allocation tags',
        ],
      },
      {
        title: 'Documentation',
        items: [
          'Architecture diagrams',
          'Runbooks for operations',
          'Disaster recovery procedures',
          'Cost optimization guide',
        ],
      },
      {
        title: 'Training & Support',
        items: [
          '2-day cloud operations workshop',
          'Video training materials',
          '60 days post-migration support',
          'Knowledge transfer sessions',
        ],
      },
    ],

    pricing: {
      startingPrice: '$35,000',
      priceRange: '$35,000 - $120,000',
      included: [
        'Complete cloud migration strategy and execution',
        'Infrastructure setup on AWS, Azure, or GCP',
        'Application migration (up to 10 applications)',
        'Zero-downtime cutover with rollback plan',
        'Cost optimization and right-sizing',
        'Security hardening and compliance setup',
        'Monitoring and alerting configuration',
        '60 days of post-migration support',
        'Team training workshop',
      ],
      timeline: '12-14 weeks',
    },

    caseStudy: {
      company: 'Healthcare SaaS Provider',
      challenge: 'A healthcare SaaS company needed to migrate from on-premise to AWS for scalability and compliance (HIPAA). They had 12 applications, 2TB of data, and couldn\'t afford any downtime.',
      solution: 'We executed a phased migration over 12 weeks, starting with dev/staging, then production apps in waves. Used AWS Control Tower for compliance, implemented encryption at rest and in transit, and optimized for cost.',
      results: [
        'Zero downtime achieved',
        '40% infrastructure cost reduction',
        'HIPAA compliance certified',
        '10x better scalability',
      ],
    },

    relatedServices: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Modernize with containers after cloud migration',
        link: '/services/kubernetes',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Manage cloud infrastructure with Terraform',
        link: '/services/iac',
      },
      {
        title: 'FinOps & Cost Optimization',
        description: 'Ongoing cloud cost management',
        link: '/services/finops',
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
