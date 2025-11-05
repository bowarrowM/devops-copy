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
      fixedPrice: {
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
}
