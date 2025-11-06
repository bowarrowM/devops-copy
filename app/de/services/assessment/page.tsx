'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaChartLine } from 'react-icons/fa';

export default function AssessmentServicePageDE() {
  const serviceData = {
    title: 'DevOps Maturity Assessment & Strategic Roadmap',
    subtitle: 'Understand where you are, discover where you could be, and get a clear path to DevOps excellence.',
    benefits: [
      'Comprehensive analysis',
      'Custom roadmap',
      'Quick wins identified',
      'ROI projections',
    ],
    heroIcon: <FaChartLine className="w-10 h-10 text-white" />,
    heroGradient: 'from-blue-600 to-blue-500',

    problemTitle: 'Common DevOps Challenges',
    problems: [
      'Unsure where to start your DevOps journey',
      'Multiple pain points but unclear priorities',
      'Limited budget - need to focus on high-impact areas',
      'Resistance to change from team members',
      'Previous automation attempts failed',
      'Need to justify DevOps investment to leadership',
    ],

    solutionTitle: 'Our Assessment Approach',
    solutions: [
      'Comprehensive 360° evaluation of your current state',
      'Data-driven analysis of bottlenecks and opportunities',
      'Prioritized roadmap based on ROI and quick wins',
      'Stakeholder interviews to address concerns',
      'Industry benchmarking to show where you stand',
      'Executive summary with budget justification',
    ],

    process: [
      {
        title: 'Discovery & Data Collection',
        description: 'We interview key stakeholders, review current processes, analyze tooling, and gather metrics on deployment frequency, lead time, and failure rates.',
        timeline: 'Week 1',
      },
      {
        title: 'Technical Assessment',
        description: 'Deep dive into your infrastructure, CI/CD pipelines, monitoring setup, security practices, and team capabilities. We identify gaps and opportunities.',
        timeline: 'Week 1',
      },
      {
        title: 'Maturity Scoring',
        description: 'Score your organization across 8 dimensions using DORA metrics and industry standards. Compare against industry benchmarks.',
        timeline: 'Week 2',
      },
      {
        title: 'Roadmap Development',
        description: 'Create a prioritized, phased roadmap with quick wins, medium-term improvements, and long-term strategic initiatives. Include effort estimates and ROI projections.',
        timeline: 'Week 2',
      },
    ],

    deliverables: [
      {
        title: 'Assessment Report',
        items: [
          'Current state analysis',
          'Maturity score (0-10)',
          'Industry benchmarking',
          'Strengths & weaknesses',
        ],
      },
      {
        title: 'Strategic Roadmap',
        items: [
          'Prioritized initiatives',
          'Phase 1: Quick wins (0-3 months)',
          'Phase 2: Foundation (3-6 months)',
          'Phase 3: Transformation (6-12 months)',
        ],
      },
      {
        title: 'ROI Analysis',
        items: [
          'Cost-benefit projections',
          'Time savings estimates',
          'Risk reduction quantified',
          'Budget justification',
        ],
      },
      {
        title: 'Executive Summary',
        items: [
          'Leadership presentation',
          'Budget recommendations',
          'Success metrics',
          'Implementation timeline',
        ],
      },
    ],

    pricing: {
      startingPrice: '$5,000',
      priceRange: '$5,000 - $15,000',
      included: [
        'Comprehensive DevOps maturity assessment',
        'Stakeholder interviews (up to 10 people)',
        'Technical infrastructure review',
        'Industry benchmarking analysis',
        'Prioritized strategic roadmap',
        'ROI projections and budget justification',
        'Executive presentation deck',
        '2 follow-up strategy sessions',
      ],
      timeline: '2 weeks',
    },

    caseStudy: {
      company: 'E-Commerce Scale-Up',
      challenge: 'A rapidly growing e-commerce company knew they needed DevOps but didn\'t know where to start. They had legacy infrastructure, manual deployments, and a small team.',
      solution: 'Our assessment identified 3 quick wins that could be implemented in 60 days, a realistic 6-month transformation plan, and a clear ROI case that secured $150K in budget.',
      results: [
        'Quick wins: $40K saved in 60 days',
        'Full roadmap approved',
        'Team alignment achieved',
        '3x deployment frequency',
      ],
    },

    relatedServices: [
      {
        title: 'CI/CD Pipeline Setup',
        description: 'Implement the automation roadmap from your assessment',
        link: '/services/cicd',
      },
      {
        title: 'Cloud Migration',
        description: 'Execute migration strategy identified in assessment',
        link: '/services/cloud-migration',
      },
      {
        title: 'Kubernetes Orchestration',
        description: 'Build the container platform from your roadmap',
        link: '/services/kubernetes',
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
