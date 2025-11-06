export type Language = 'tr' | 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    badge: string;
  };
  services: {
    title: string;
    subtitle: string;
    tiers: {
      foundation: {
        title: string;
        description: string;
      };
      transformation: {
        title: string;
        description: string;
      };
      advanced: {
        title: string;
        description: string;
      };
      managed: {
        title: string;
        description: string;
      };
    };
    items: {
      assessment: {
        title: string;
        description: string;
      };
      cicd: {
        title: string;
        description: string;
      };
      cloudMigration: {
        title: string;
        description: string;
      };
      kubernetes: {
        title: string;
        description: string;
      };
      iac: {
        title: string;
        description: string;
      };
      devsecops: {
        title: string;
        description: string;
      };
      platform: {
        title: string;
        description: string;
      };
      aiops: {
        title: string;
        description: string;
      };
      finops: {
        title: string;
        description: string;
      };
      managed: {
        title: string;
        description: string;
      };
    };
    learnMore: string;
  };
  about: {
    title: string;
    subtitle: string;
    advantages: {
      bilingual: {
        title: string;
        description: string;
      };
      startup: {
        title: string;
        description: string;
      };
      modern: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
      compliance: {
        title: string;
        description: string;
      };
      multiCloud: {
        title: string;
        description: string;
      };
    };
    technologies: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
    success: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    benefits: {
      fastResult: {
        title: string;
        description: string;
        stat: string;
      };
      costOptimization: {
        title: string;
        description: string;
        stat: string;
      };
      security: {
        title: string;
        description: string;
        stat: string;
      };
      fasterDeploy: {
        title: string;
        description: string;
        stat: string;
      };
      support: {
        title: string;
        description: string;
        stat: string;
      };
      provenSuccess: {
        title: string;
        description: string;
        stat: string;
      };
    };
    trustBar: {
      awsPartner: {
        badge: string;
        description: string;
      };
      iso: {
        badge: string;
        description: string;
      };
      kvkk: {
        badge: string;
        description: string;
      };
    };
  };
  servicesCta: {
    title: string;
    description: string;
    button: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      submitting: string;
      selectPlaceholder: string;
      consent: string;
      consentRequired: string;
      success: string;
      error: string;
    };
    info: {
      address: string;
      email: string;
      phone: string;
    };
  };
  footer: {
    tagline: string;
    services: string;
    company: string;
    legal: string;
    rights: string;
    trademark: string;
    blog: string;
    career: string;
    privacyPolicy: string;
    termsOfService: string;
    kvkkPolicy: string;
    cookiePolicy: string;
    madeWithLove: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    cta: string;
    ctaButton: string;
    items: Array<{
      name: string;
      position: string;
      company: string;
      content: string;
      rating: number;
      result: string;
    }>;
  };
  common: {
    backToHome: string;
    contactCta: string;
  };
  legal: {
    privacy: {
      title: string;
      lastUpdated: string;
      introduction: string;
    };
    terms: {
      title: string;
      lastUpdated: string;
      introduction: string;
    };
    kvkk: {
      title: string;
      lastUpdated: string;
      introduction: string;
    };
    cookies: {
      title: string;
      lastUpdated: string;
      introduction: string;
    };
  };
  techStack: {
    title: string;
    subtitle: string;
    cloudPlatforms: {
      title: string;
      description: string;
    };
    categories: {
      cicd: string;
      gitops: string;
      container: string;
      iac: string;
      monitoring: string;
      security: string;
    };
    badges: {
      cloudNative: string;
      multiCloud: string;
      production: string;
      enterprise: string;
    };
    allTools: string;
  };
  featuredCaseStudy: {
    badge: string;
    title: string;
    subtitle: string;
    tags: {
      ecommerce: string;
      employees: string;
      weeks: string;
    };
    caseTitle: string;
    company: string;
    challenge: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
    };
    results: {
      title: string;
      uptime: { value: string; label: string };
      deployments: { value: string; label: string };
      revenue: { value: string; label: string };
      scaling: { value: string; label: string };
    };
    testimonial: {
      quote: string;
      author: string;
      position: string;
    };
    cta: string;
    quickStats: {
      savings: { value: string; label: string };
      uptime: { value: string; label: string };
      deployments: { value: string; label: string };
    };
  };
  clientLogos: {
    title: string;
    subtitle: string;
    clients: {
      retail: string;
      fintech: string;
      saas: string;
      healthcare: string;
      logistics: string;
      manufacturing: string;
      education: string;
      insurance: string;
    };
    certifications: {
      aws: { title: string; description: string };
      iso: { title: string; description: string };
      kvkk: { title: string; description: string };
      microsoft: { title: string; description: string };
    };
    trustIndicators: {
      clients: { value: string; label: string };
      projects: { value: string; label: string };
      satisfaction: { value: string; label: string };
      experience: { value: string; label: string };
    };
  };
  statistics: {
    title: string;
    subtitle: string;
    stats: {
      clients: { value: string; label: string; description: string };
      projects: { value: string; label: string; description: string };
      savings: { value: string; label: string; description: string };
      satisfaction: { value: string; label: string; description: string };
      deployments: { value: string; label: string; description: string };
      uptime: { value: string; label: string; description: string };
      servers: { value: string; label: string; description: string };
      certifications: { value: string; label: string; description: string };
    };
    cta: {
      question: string;
      calculateRoi: string;
      scheduleConsultation: string;
    };
  };
}
