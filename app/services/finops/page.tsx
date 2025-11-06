'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaDollarSign } from 'react-icons/fa';

export default function FinOpsServicePage() {
  const serviceData = {
    title: 'FinOps: Reduce Cloud Costs by 30-50%',
    subtitle: 'Stop overspending on cloud. Get visibility, control, and optimization to dramatically reduce your AWS, Azure, or GCP bill.',
    benefits: [
      '30-50% cost reduction',
      'Full visibility',
      'Automated optimization',
      'Showback/chargeback',
    ],
    heroIcon: <FaDollarSign className="w-10 h-10 text-white" />,
    heroGradient: 'from-yellow-600 to-orange-500',

    problemTitle: 'Cloud Cost Challenges',
    problems: [
      'Cloud bill increases every month with no explanation',
      'No visibility into who\'s spending what',
      'Over-provisioned resources running 24/7',
      'Can\'t track costs to teams or projects',
      'Surprise bills with no early warning',
      'No one is accountable for cloud spend',
    ],

    solutionTitle: 'Our FinOps Solution',
    solutions: [
      'Complete cost visibility and attribution',
      'Right-sizing recommendations (automated)',
      'Reserved Instance and Savings Plan optimization',
      'Showback/chargeback to teams',
      'Real-time spend alerts and anomaly detection',
      'FinOps culture and accountability',
    ],

    process: [
      {
        title: 'Cost Analysis',
        description: 'Analyze current cloud spend, identify top cost drivers, find waste and optimization opportunities, benchmark against industry standards.',
        timeline: 'Week 1',
      },
      {
        title: 'Tagging Strategy',
        description: 'Design cost allocation tags (team, project, environment), implement tagging policies, tag existing resources, automate tag enforcement.',
        timeline: 'Week 1-2',
      },
      {
        title: 'Visibility & Reporting',
        description: 'Set up cost monitoring tools (AWS Cost Explorer, CloudHealth, Kubecost), create cost dashboards, configure budget alerts, implement showback reports.',
        timeline: 'Week 2-3',
      },
      {
        title: 'Quick Wins',
        description: 'Implement immediate optimizations: delete unused resources, stop idle instances, right-size oversized resources, clean up old snapshots and volumes.',
        timeline: 'Week 3-4',
      },
      {
        title: 'Long-term Optimization',
        description: 'Analyze Reserved Instances vs Savings Plans, implement auto-scaling, optimize storage classes, set up spot instances for dev/test, configure lifecycle policies.',
        timeline: 'Week 4-6',
      },
      {
        title: 'FinOps Process',
        description: 'Establish monthly cost review meetings, create accountability structure, implement cost policies, train teams on FinOps practices.',
        timeline: 'Week 6-8',
      },
    ],

    deliverables: [
      {
        title: 'Cost Visibility',
        items: [
          'Comprehensive tagging',
          'Cost allocation reports',
          'Real-time dashboards',
          'Anomaly detection',
        ],
      },
      {
        title: 'Optimization Wins',
        items: [
          'Unused resources removed',
          'Right-sized instances',
          'Reserved Instance plan',
          'Storage optimization',
        ],
      },
      {
        title: 'Automation',
        items: [
          'Auto-scaling configured',
          'Scheduled stop/start',
          'Lifecycle policies',
          'Budget alerts',
        ],
      },
      {
        title: 'Showback/Chargeback',
        items: [
          'Team cost allocation',
          'Project cost tracking',
          'Monthly reports',
          'Cost attribution',
        ],
      },
      {
        title: 'Policies & Governance',
        items: [
          'Cost policies documented',
          'Approval workflows',
          'Tag enforcement',
          'Budget controls',
        ],
      },
      {
        title: 'Training & Process',
        items: [
          'FinOps best practices',
          'Monthly review process',
          '1-day FinOps workshop',
          'Continuous optimization plan',
        ],
      },
    ],

    pricing: {
      startingPrice: '$25,000',
      priceRange: '$25,000 - $60,000',
      included: [
        'Complete cloud cost analysis and optimization',
        'Tagging strategy and implementation',
        'Cost visibility dashboards and reports',
        'Quick wins implementation (immediate savings)',
        'Reserved Instance and Savings Plan optimization',
        'Showback/chargeback setup for teams',
        'Budget alerts and anomaly detection',
        '1-day FinOps workshop for team',
        '60 days of ongoing optimization support',
      ],
      timeline: '6-8 weeks',
    },

    caseStudy: {
      company: 'Fast-Growing SaaS Startup',
      challenge: 'A SaaS startup\'s AWS bill had grown from $20K/month to $120K/month in 6 months with no clear reason. They had no cost visibility, over-provisioned dev environments, and unused resources everywhere.',
      solution: 'We implemented comprehensive FinOps: tagged all resources, identified $45K/month in waste, right-sized production, implemented auto-scaling, moved dev to spot instances, and established monthly cost reviews.',
      results: [
        'Cost reduction: $120K → $65K/month',
        '45% savings ($660K/year)',
        'Full cost visibility by team',
        'Ongoing optimization culture',
      ],
    },

    relatedServices: [
      {
        title: 'Cloud Migration',
        description: 'Migrate with FinOps principles from day one',
        link: '/services/cloud-migration',
      },
      {
        title: 'Kubernetes Orchestration',
        description: 'Optimize Kubernetes costs with Kubecost',
        link: '/services/kubernetes',
      },
      {
        title: 'AIOps & Observability',
        description: 'Monitor costs alongside performance',
        link: '/services/aiops',
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
