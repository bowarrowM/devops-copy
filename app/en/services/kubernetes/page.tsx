'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaDocker } from 'react-icons/fa';

/**
 * Kubernetes Service Page
 *
 * Complete implementation of Kubernetes orchestration service
 * using the ServicePageTemplate component
 */
export default function KubernetesServicePageEN() {
  const serviceData = {
    // Hero Section
    title: 'Production-Ready Kubernetes in 2 Weeks',
    subtitle: 'Stop wrestling with YAML. Get a fully configured cluster with monitoring, security, and GitOps built-in.',
    benefits: [
      '99.9% uptime SLA',
      'Security hardened',
      'Cost optimized',
      'Full observability',
    ],
    heroIcon: <FaDocker className="w-10 h-10 text-white" />,
    heroGradient: 'from-primary-600 to-primary-500',

    // Problem/Solution
    problemTitle: 'The Kubernetes Challenge',
    problems: [
      'Setting up Kubernetes is easy, running it in production is hard',
      'Complex networking and service mesh configuration',
      'Security vulnerabilities and misconfigurations',
      'Resource management and cost optimization challenges',
      'Monitoring, logging, and observability gaps',
      'Disaster recovery and backup strategies missing',
    ],

    solutionTitle: 'Our Kubernetes Solution',
    solutions: [
      'Production-hardened clusters with battle-tested configurations',
      'Security by default: RBAC, policies, network segmentation, image scanning',
      'Full observability: Prometheus, Grafana, Jaeger tracing',
      'GitOps workflows with ArgoCD or Flux for automated deployments',
      'Cost optimization: resource limits, autoscaling, spot instances',
      'Disaster recovery: automated backups, multi-region failover',
    ],

    // Process
    process: [
      {
        title: 'Assessment & Planning',
        description: 'We analyze your current infrastructure, application requirements, and create a detailed architecture design for your Kubernetes cluster.',
        timeline: 'Week 1',
      },
      {
        title: 'Cluster Setup & Configuration',
        description: 'Provision production-ready Kubernetes cluster on your cloud provider (EKS, AKS, or GKE), configure networking, ingress, and security policies.',
        timeline: 'Week 2',
      },
      {
        title: 'Observability & Security',
        description: 'Deploy comprehensive monitoring stack (Prometheus, Grafana, Alertmanager), set up logging (ELK/Loki), implement security scanning and policies.',
        timeline: 'Week 3',
      },
      {
        title: 'GitOps & CI/CD Integration',
        description: 'Configure ArgoCD or Flux for GitOps workflows, integrate with your CI/CD pipelines, set up automated rollbacks and canary deployments.',
        timeline: 'Week 4',
      },
      {
        title: 'Migration & Testing',
        description: 'Containerize applications, migrate workloads to Kubernetes, perform load testing, validate disaster recovery procedures.',
        timeline: 'Week 5-6',
      },
      {
        title: 'Training & Handover',
        description: 'Train your team on Kubernetes operations, provide detailed documentation, runbooks, and ongoing support setup.',
        timeline: 'Week 7-8',
      },
    ],

    // Deliverables
    deliverables: [
      {
        title: 'Production Cluster',
        items: [
          'Multi-AZ Kubernetes cluster',
          'Auto-scaling node groups',
          'Load balancer configuration',
          'Network policies & security',
        ],
      },
      {
        title: 'Monitoring Stack',
        items: [
          'Prometheus for metrics',
          'Grafana dashboards',
          'Alertmanager alerts',
          'Jaeger for distributed tracing',
        ],
      },
      {
        title: 'Security & Compliance',
        items: [
          'Pod security policies',
          'Network segmentation',
          'Image vulnerability scanning',
          'RBAC configuration',
        ],
      },
      {
        title: 'GitOps Workflow',
        items: [
          'ArgoCD or Flux setup',
          'Automated deployments',
          'Rollback procedures',
          'Environment management',
        ],
      },
      {
        title: 'Documentation',
        items: [
          'Architecture diagrams',
          'Runbooks for operations',
          'Troubleshooting guides',
          'Security best practices',
        ],
      },
      {
        title: 'Training & Support',
        items: [
          '2 full-day workshops',
          'Video training materials',
          '30-day support included',
          'Knowledge transfer sessions',
        ],
      },
    ],

    // Pricing
    pricing: {
      startingPrice: '$45,000',
      priceRange: '$35,000 - $85,000',
      included: [
        'Production-ready Kubernetes cluster on AWS, Azure, or GCP',
        'Complete monitoring and observability stack',
        'Security hardening and compliance setup',
        'GitOps workflow with automated deployments',
        'Comprehensive documentation and runbooks',
        '2 full-day team training workshops',
        '30 days of post-launch support',
        'Architecture review and optimization',
      ],
      timeline: '6-8 weeks',
    },

    // Case Study
    caseStudy: {
      company: 'TechScale SaaS Platform',
      challenge: 'TechScale, a Series B SaaS company with 50 employees, was running on EC2 instances with manual deployments. They faced frequent downtime, slow deployments (4+ hours), and couldn\'t scale to meet growing demand.',
      solution: 'We migrated their monolithic application to microservices on Kubernetes with automated CI/CD, implemented comprehensive monitoring, and established GitOps workflows. The entire transformation took 7 weeks.',
      results: [
        '87% faster deployments (4h → 30min)',
        '99.9% uptime achieved',
        '$240K cloud costs saved/year',
        '5x faster feature delivery',
      ],
    },

    // Related Services
    relatedServices: [
      {
        title: 'CI/CD Automation',
        description: 'Build automated pipelines for continuous integration and deployment',
        link: '/services/cicd',
      },
      {
        title: 'DevSecOps',
        description: 'Integrate security into every stage of your development lifecycle',
        link: '/services/devsecops',
      },
      {
        title: 'Platform Engineering',
        description: 'Build self-service internal developer platforms',
        link: '/services/platform',
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
