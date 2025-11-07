'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaRocket } from 'react-icons/fa';

export default function AIOpsServicePage() {
  const serviceData = {
    title: 'AIOps & Observability: AI-Powered Operations',
    subtitle: 'Predict issues before they happen, automate incident response, and gain deep insights into complex systems.',
    benefits: [
      'Predictive alerts',
      'Auto-remediation',
      'Deep insights',
      'Reduced MTTR',
    ],
    heroIcon: <FaRocket className="w-10 h-10 text-white" />,
    heroGradient: 'from-pink-600 to-rose-500',

    problemTitle: 'Observability Challenges',
    problems: [
      'Alert fatigue - too many false positives',
      'Can\'t see issues until users report them',
      'Mean time to resolution (MTTR) too high',
      'Distributed tracing is complex',
      'No correlation between metrics, logs, traces',
      'Manual incident response is slow',
    ],

    solutionTitle: 'Our AIOps Solution',
    solutions: [
      'AI-powered anomaly detection (predict issues)',
      'Intelligent alerting (reduce noise by 90%)',
      'Distributed tracing for microservices',
      'Unified observability (metrics + logs + traces)',
      'Automated incident response and remediation',
      'Proactive optimization recommendations',
    ],

    process: [
      {
        title: 'Observability Assessment',
        description: 'Audit current monitoring, identify blind spots, map critical user journeys, define SLIs/SLOs, baseline current MTTR.',
        timeline: 'Week 1',
      },
      {
        title: 'Platform Setup',
        description: 'Deploy observability stack: Prometheus/Thanos, Grafana, Loki for logs, Tempo/Jaeger for tracing, configure data retention.',
        timeline: 'Week 2-3',
      },
      {
        title: 'Instrumentation',
        description: 'Instrument applications with OpenTelemetry, add custom metrics and traces, implement structured logging, create service map.',
        timeline: 'Week 4-6',
      },
      {
        title: 'AI Integration',
        description: 'Implement anomaly detection (ML models), configure intelligent alerting, set up predictive analysis, integrate with incident management.',
        timeline: 'Week 7-9',
      },
      {
        title: 'Auto-Remediation',
        description: 'Build automated response playbooks, implement self-healing mechanisms, configure escalation policies, test failure scenarios.',
        timeline: 'Week 9-11',
      },
      {
        title: 'Dashboards & Training',
        description: 'Create role-specific dashboards (dev, ops, business), train team on observability practices, document runbooks.',
        timeline: 'Week 12',
      },
    ],

    deliverables: [
      {
        title: 'Observability Platform',
        items: [
          'Prometheus/Thanos for metrics',
          'Grafana for visualization',
          'Loki for log aggregation',
          'Tempo/Jaeger for distributed tracing',
        ],
      },
      {
        title: 'Instrumentation',
        items: [
          'OpenTelemetry integration',
          'Custom metrics & traces',
          'Structured logging',
          'Service dependency map',
        ],
      },
      {
        title: 'AI-Powered Insights',
        items: [
          'Anomaly detection models',
          'Intelligent alerting',
          'Predictive analytics',
          'Root cause analysis',
        ],
      },
      {
        title: 'Auto-Remediation',
        items: [
          'Automated response playbooks',
          'Self-healing mechanisms',
          'Incident escalation',
          'Chatops integration',
        ],
      },
      {
        title: 'Dashboards',
        items: [
          'SRE golden signals',
          'Business KPI dashboards',
          'Service-level dashboards',
          'Custom team dashboards',
        ],
      },
      {
        title: 'Documentation & Training',
        items: [
          'Observability best practices',
          'Incident response runbooks',
          '1-day SRE workshop',
          'Video training materials',
        ],
      },
    ],

    pricing: {
      startingPrice: '$50,000',
      priceRange: '$50,000 - $130,000',
      included: [
        'Complete observability platform (Prometheus, Grafana, Loki, Tempo)',
        'OpenTelemetry instrumentation across services',
        'AI-powered anomaly detection and alerting',
        'Automated incident response and remediation',
        'Distributed tracing for microservices',
        'Custom dashboards for teams and business',
        'SLI/SLO implementation',
        '1-day SRE best practices workshop',
        '30 days post-implementation support',
      ],
      timeline: '12 weeks',
    },

    caseStudy: {
      company: 'Global E-Commerce Platform',
      challenge: 'An e-commerce platform with 50+ microservices had alert fatigue (500+ alerts/day, 95% false positives), high MTTR (4+ hours), and blind spots causing user-impacting incidents.',
      solution: 'We implemented comprehensive observability with distributed tracing, AI-powered anomaly detection to reduce alerts by 90%, automated remediation for common issues, and predictive alerting.',
      results: [
        'Alerts: 500/day → 25/day',
        'MTTR: 4h → 15min (94% reduction)',
        'Proactive issue detection: 85%',
        'Zero surprise outages',
      ],
    },

    relatedServices: [
      {
        title: 'Kubernetes Orchestration',
        description: 'Monitor and observe Kubernetes infrastructure',
        link: '/services/kubernetes',
      },
      {
        title: 'Platform Engineering',
        description: 'Build observability into your IDP',
        link: '/services/platform',
      },
      {
        title: 'DevSecOps',
        description: 'Security monitoring and observability',
        link: '/services/devsecops',
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
