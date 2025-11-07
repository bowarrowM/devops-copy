'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FaShieldAlt } from 'react-icons/fa';

export default function DevSecOpsServicePage() {
  const serviceData = {
    title: 'DevSecOps: Security Built Into Every Stage',
    subtitle: 'Shift left on security. Catch vulnerabilities early, automate compliance, and build secure software by default.',
    benefits: [
      'Security automated',
      'Compliance built-in',
      'Vulnerabilities caught early',
      'Zero trust architecture',
    ],
    heroIcon: <FaShieldAlt className="w-10 h-10 text-white" />,
    heroGradient: 'from-orange-600 to-red-500',

    problemTitle: 'Security Challenges',
    problems: [
      'Security checks happen too late (after deployment)',
      'Manual security reviews slow down releases',
      'Developers don\'t have security expertise',
      'Compliance requirements are overwhelming',
      'Vulnerabilities discovered in production',
      'Security team is a bottleneck',
    ],

    solutionTitle: 'Our DevSecOps Approach',
    solutions: [
      'Automated security scanning at every stage',
      'Security gates in CI/CD pipeline (fail fast)',
      'Developer-friendly security tools and training',
      'Compliance as code (policy automation)',
      'Continuous vulnerability monitoring',
      'Security team as enablers, not gatekeepers',
    ],

    process: [
      {
        title: 'Security Assessment',
        description: 'Audit current security posture, identify vulnerabilities, assess compliance gaps, and prioritize security initiatives.',
        timeline: 'Week 1',
      },
      {
        title: 'Tool Selection & Setup',
        description: 'Choose and configure security tools: SAST (SonarQube, Checkmarx), DAST (OWASP ZAP), dependency scanning (Snyk), container scanning (Trivy), secrets detection.',
        timeline: 'Week 1-2',
      },
      {
        title: 'Pipeline Integration',
        description: 'Integrate security tools into CI/CD pipeline, configure security gates and quality thresholds, set up automated scanning on commits and PRs.',
        timeline: 'Week 3-4',
      },
      {
        title: 'Infrastructure Security',
        description: 'Implement infrastructure security: network policies, security groups, IAM least privilege, encryption at rest/transit, secret management (Vault/AWS Secrets Manager).',
        timeline: 'Week 4-5',
      },
      {
        title: 'Compliance Automation',
        description: 'Implement policy as code (OPA, Sentinel), automated compliance checks, audit logging, vulnerability management workflow.',
        timeline: 'Week 6-7',
      },
      {
        title: 'Training & Process',
        description: 'Train developers on secure coding, establish security review process, create security champions program, document security standards.',
        timeline: 'Week 8',
      },
    ],

    deliverables: [
      {
        title: 'Security Scanning',
        items: [
          'SAST (static code analysis)',
          'DAST (dynamic testing)',
          'Dependency vulnerability scanning',
          'Container image scanning',
        ],
      },
      {
        title: 'CI/CD Security Gates',
        items: [
          'Automated security checks',
          'Quality gate thresholds',
          'Break builds on critical issues',
          'Security test reporting',
        ],
      },
      {
        title: 'Infrastructure Security',
        items: [
          'Network segmentation',
          'Zero trust architecture',
          'Encryption everywhere',
          'Secrets management',
        ],
      },
      {
        title: 'Compliance Automation',
        items: [
          'Policy as code',
          'Automated compliance checks',
          'Audit logging',
          'Compliance dashboards',
        ],
      },
      {
        title: 'Monitoring & Response',
        items: [
          'Security monitoring',
          'Vulnerability alerts',
          'Incident response playbooks',
          'Security dashboards',
        ],
      },
      {
        title: 'Training & Documentation',
        items: [
          'Secure coding workshop',
          'Security best practices',
          'Runbooks for incidents',
          'Compliance documentation',
        ],
      },
    ],

    pricing: {
      startingPrice: '$40,000',
      priceRange: '$40,000 - $95,000',
      included: [
        'Complete DevSecOps implementation',
        'Security tools setup and integration',
        'CI/CD pipeline security gates',
        'Infrastructure security hardening',
        'Compliance automation (SOC2, ISO 27001, GDPR)',
        'Secrets management implementation',
        'Vulnerability management workflow',
        '1-day secure coding workshop',
        '30 days post-implementation support',
      ],
      timeline: '8 weeks',
    },

    caseStudy: {
      company: 'HealthTech Platform',
      challenge: 'A healthcare platform needed to achieve SOC2 Type II and HIPAA compliance. They had no automated security testing, manual security reviews took weeks, and vulnerabilities were found in production.',
      solution: 'We implemented comprehensive DevSecOps: automated SAST/DAST/dependency scanning in CI/CD, infrastructure security hardening, compliance automation, and security training for developers.',
      results: [
        'SOC2 & HIPAA certified',
        '95% vulnerabilities caught pre-prod',
        '80% faster security reviews',
        'Zero security incidents',
      ],
    },

    relatedServices: [
      {
        title: 'CI/CD Pipeline',
        description: 'Integrate security into your CI/CD automation',
        link: '/services/cicd',
      },
      {
        title: 'Kubernetes Orchestration',
        description: 'Secure your Kubernetes infrastructure',
        link: '/services/kubernetes',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Security and compliance as code',
        link: '/services/iac',
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
