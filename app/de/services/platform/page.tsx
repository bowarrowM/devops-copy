'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaCubes } from 'react-icons/fa';

export default function PlatformServicePageDE() {
  const serviceData = {
    title: 'Internal Developer Platform (IDP) Engineering',
    subtitle: 'Build a self-service platform that boosts developer productivity by 10x and reduces cognitive load.',
    benefits: [
      'Self-service deployments',
      '10x developer productivity',
      'Standardized workflows',
      'Reduced cognitive load',
    ],
    heroIcon: <FaCubes className="w-10 h-10 text-white" />,
    heroGradient: 'from-indigo-600 to-purple-500',

    problemTitle: 'Developer Experience Problems',
    problems: [
      'Developers spend 40% of time on infrastructure tasks',
      'Each team builds their own tools (duplication)',
      'Inconsistent deployment practices across teams',
      'Knowledge silos - only certain people can deploy',
      'New developers take months to be productive',
      'Platform team overwhelmed with requests',
    ],

    solutionTitle: 'Our Platform Engineering Solution',
    solutions: [
      'Self-service Internal Developer Platform (IDP)',
      'Golden paths for common workflows (deploy, database, queue)',
      'Standardized yet flexible - teams can customize',
      'Developer portal with templates and documentation',
      'Infrastructure abstraction - developers focus on code',
      'Platform team enables, doesn\'t block',
    ],

    process: [
      {
        title: 'Developer Research',
        description: 'Interview developers and teams, map current workflows and pain points, identify most common tasks, define platform requirements.',
        timeline: 'Week 1-2',
      },
      {
        title: 'Platform Architecture',
        description: 'Design IDP architecture, choose platform tools (Backstage, Port, etc.), define abstractions and golden paths, plan integration points.',
        timeline: 'Week 2-3',
      },
      {
        title: 'Core Platform Build',
        description: 'Set up developer portal (Backstage/custom), build service catalog, implement golden path templates, integrate with existing tools.',
        timeline: 'Week 4-8',
      },
      {
        title: 'Self-Service Capabilities',
        description: 'Implement self-service workflows: new service creation, database provisioning, environment management, deployment automation.',
        timeline: 'Week 8-12',
      },
      {
        title: 'Documentation & Onboarding',
        description: 'Create comprehensive docs, build onboarding flows, record video tutorials, establish support channels.',
        timeline: 'Week 12-14',
      },
      {
        title: 'Launch & Iterate',
        description: 'Phased rollout to teams, gather feedback, iterate on UX, measure adoption and productivity gains.',
        timeline: 'Week 14-16',
      },
    ],

    deliverables: [
      {
        title: 'Developer Portal',
        items: [
          'Backstage/custom portal',
          'Service catalog',
          'Component templates',
          'Documentation hub',
        ],
      },
      {
        title: 'Golden Paths',
        items: [
          'New service scaffolding',
          'Database self-service',
          'Deployment automation',
          'Environment management',
        ],
      },
      {
        title: 'Platform Services',
        items: [
          'CI/CD integration',
          'Secret management',
          'Monitoring & logging',
          'Cost visibility',
        ],
      },
      {
        title: 'Developer Experience',
        items: [
          'CLI tools',
          'IDE integrations',
          'Local development',
          'Testing frameworks',
        ],
      },
      {
        title: 'Platform Operations',
        items: [
          'Platform monitoring',
          'SLA tracking',
          'Usage analytics',
          'Cost attribution',
        ],
      },
      {
        title: 'Documentation & Training',
        items: [
          'Getting started guides',
          'API documentation',
          'Video tutorials',
          '2-day training workshop',
        ],
      },
    ],

    pricing: {
      startingPrice: '$65,000',
      priceRange: '$65,000 - $180,000',
      included: [
        'Complete Internal Developer Platform (IDP) design and build',
        'Developer portal implementation (Backstage or custom)',
        'Golden path templates for common workflows',
        'Self-service capabilities for infrastructure',
        'Integration with existing tools (CI/CD, cloud, monitoring)',
        'Comprehensive documentation and tutorials',
        '2-day platform training workshop',
        '60 days post-launch support and iteration',
      ],
      timeline: '16 weeks',
    },

    caseStudy: {
      company: 'Series C SaaS Company (200 engineers)',
      challenge: 'With 200 engineers across 15 teams, each team was building their own tooling. Onboarding took 3 months, deployments required platform team help, and productivity was suffering.',
      solution: 'We built a comprehensive IDP with Backstage, created golden paths for the most common workflows, implemented self-service for 80% of infrastructure tasks, and trained platform champions in each team.',
      results: [
        'Onboarding time: 3 months → 1 week',
        '10x developer productivity',
        'Self-service: 80% of tasks',
        'Platform team requests: -70%',
      ],
    },

    relatedServices: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Foundation platform for containerized workloads',
        link: '/services/kubernetes',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Self-service infrastructure with IaC',
        link: '/services/iac',
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Automated deployments through the platform',
        link: '/services/cicd',
      },
    ],
  };

  return (
    <LanguageProvider locale="de">
      <main className="min-h-screen">
        <NavbarModern />
        <ServicePageTemplate {...serviceData} />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
