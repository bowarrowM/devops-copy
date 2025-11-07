import { Language } from '../i18n/types';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  founder: {
    '@type': string;
    name: string;
  };
  foundingDate: string;
  slogan: string;
}

interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  }[];
  description: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
}

export function getOrganizationSchema(language: Language): OrganizationSchema {
  const descriptions = {
    tr: 'DevOps - Türkiye\'nin lider DevOps danışmanlık firması. Cloud migration, CI/CD, Kubernetes, DevSecOps ve platform engineering hizmetleri.',
    en: 'DevOps - Turkey\'s leading DevOps consulting company. Cloud migration, CI/CD, Kubernetes, DevSecOps and platform engineering services.',
    de: 'DevOps - Türkeis führendes DevOps-Beratungsunternehmen. Cloud-Migration, CI/CD, Kubernetes, DevSecOps und Platform Engineering.',
  };

  const slogans = {
    tr: 'Türkiye\'nin DevOps dönüşüm partneri',
    en: 'Turkey\'s DevOps transformation partner',
    de: 'Türkeis DevOps-Transformationspartner',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevOps',
    alternateName: 'DevOps.com.tr',
    url: 'https://devops.com.tr',
    logo: 'https://devops.com.tr/logo.png',
    description: descriptions[language],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-XXX-XXX-XX-XX',
      contactType: 'customer service',
      email: 'info@devops.com.tr',
      availableLanguage: ['Turkish', 'English', 'German'],
    },
    sameAs: [
      'https://linkedin.com/company/devops-tr',
      'https://github.com/devops-tr',
      'https://twitter.com/devops_tr',
    ],
    founder: {
      '@type': 'Organization',
      name: 'DevOps Turkey',
    },
    foundingDate: '2020',
    slogan: slogans[language],
  };
}

export function getProfessionalServiceSchema(language: Language): any {
  const descriptions = {
    tr: 'Kapsamlı DevOps danışmanlık ve bulut altyapı hizmetleri: CI/CD otomasyonu, Kubernetes orchestration, cloud migration, DevSecOps, platform engineering, AIOps ve FinOps çözümleri.',
    en: 'Comprehensive DevOps consulting and cloud infrastructure services: CI/CD automation, Kubernetes orchestration, cloud migration, DevSecOps, platform engineering, AIOps and FinOps solutions.',
    de: 'Umfassende DevOps-Beratung und Cloud-Infrastruktur-Services: CI/CD-Automatisierung, Kubernetes-Orchestrierung, Cloud-Migration, DevSecOps, Platform Engineering, AIOps und FinOps-Lösungen.',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DevOps Consulting Services',
    description: descriptions[language],
    provider: {
      '@type': 'Organization',
      name: 'DevOps',
      url: 'https://devops.com.tr',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Turkey',
      },
      {
        '@type': 'Country',
        name: 'Europe',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DevOps Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CI/CD Pipeline Implementation',
            description: 'Automated continuous integration and deployment pipeline setup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kubernetes & Container Orchestration',
            description: 'Enterprise Kubernetes cluster setup and management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Migration Services',
            description: 'Secure migration to AWS, Azure, or Google Cloud Platform',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DevSecOps Integration',
            description: 'Security automation and compliance management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Platform Engineering',
            description: 'Internal developer platform and self-service infrastructure',
          },
        },
      ],
    },
  };
}

export function getWebPageSchema(language: Language): any {
  const descriptions = {
    tr: 'DevOps - Türkiye\'nin DevOps patentli danışmanlık şirketi. Startup\'lardan enterprise şirketlere DevOps transformation, cloud migration, Kubernetes, CI/CD ve DevSecOps hizmetleri.',
    en: 'DevOps - Turkey\'s DevOps patented consulting company. DevOps transformation, cloud migration, Kubernetes, CI/CD and DevSecOps services from startups to enterprises.',
    de: 'DevOps - Türkeis patentiertes DevOps-Beratungsunternehmen. DevOps-Transformation, Cloud-Migration, Kubernetes, CI/CD und DevSecOps-Services von Startups bis Unternehmen.',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DevOps - DevOps Consulting & Cloud Solutions',
    description: descriptions[language],
    url: 'https://devops.com.tr',
    inLanguage: language === 'tr' ? 'tr-TR' : language === 'en' ? 'en-US' : 'de-DE',
    isPartOf: {
      '@type': 'WebSite',
      name: 'DevOps',
      url: 'https://devops.com.tr',
    },
    about: {
      '@type': 'Thing',
      name: 'DevOps Consulting',
      description: 'Professional DevOps consulting and cloud infrastructure services',
    },
    specialty: [
      'DevOps Transformation',
      'Cloud Migration',
      'Kubernetes',
      'CI/CD Automation',
      'DevSecOps',
      'Platform Engineering',
      'AIOps',
      'FinOps',
      'Infrastructure as Code',
      'Site Reliability Engineering',
    ],
  };
}

export function getBreadcrumbSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://devops.com.tr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://devops.com.tr#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About',
        item: 'https://devops.com.tr#about',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://devops.com.tr#contact',
      },
    ],
  };
}

export function getFAQSchema(language: Language): any {
  const faqs = {
    tr: [
      {
        question: 'DevOps nedir ve neden önemlidir?',
        answer: 'DevOps, yazılım geliştirme (Development) ve IT operasyonlarını (Operations) birleştiren bir kültür ve pratikler bütünüdür. CI/CD otomasyonu, infrastructure as code, ve sürekli izleme ile yazılım teslimat süreçlerini hızlandırır ve kaliteyi artırır.',
      },
      {
        question: 'Bulut migrasyon projesi ne kadar sürer?',
        answer: 'Bulut migrasyonu süresi altyapınızın karmaşıklığına göre değişir. Küçük ölçekli projeler 2-4 hafta, orta ölçekli projeler 1-3 ay, büyük enterprise migrasyonlar 3-6 ay sürebilir.',
      },
      {
        question: 'Kubernetes hangi şirketler için uygundur?',
        answer: 'Kubernetes, microservices mimarisi kullanan, yüksek trafiğe sahip, ölçeklenebilirlik gerektiren ve containerize uygulamaları olan şirketler için idealdir. Startup\'lardan enterprise şirketlere kadar geniş bir yelpazede kullanılabilir.',
      },
      {
        question: 'DevOps dönüşümü nasıl başlar?',
        answer: 'DevOps dönüşümü, mevcut altyapı ve süreçlerin değerlendirilmesi ile başlar. Ardından roadmap oluşturulur, quick wins belirlenir ve aşamalı olarak CI/CD, IaC, monitoring gibi pratikler uygulanır.',
      },
    ],
    en: [
      {
        question: 'What is DevOps and why is it important?',
        answer: 'DevOps is a set of practices and culture that combines software development (Development) and IT operations (Operations). It accelerates software delivery processes and improves quality through CI/CD automation, infrastructure as code, and continuous monitoring.',
      },
      {
        question: 'How long does a cloud migration project take?',
        answer: 'Cloud migration duration varies based on infrastructure complexity. Small-scale projects take 2-4 weeks, medium-scale projects 1-3 months, and large enterprise migrations 3-6 months.',
      },
      {
        question: 'Which companies is Kubernetes suitable for?',
        answer: 'Kubernetes is ideal for companies using microservices architecture, handling high traffic, requiring scalability, and running containerized applications. It can be used by a wide range from startups to enterprises.',
      },
      {
        question: 'How does DevOps transformation start?',
        answer: 'DevOps transformation starts with assessment of existing infrastructure and processes. Then a roadmap is created, quick wins are identified, and practices like CI/CD, IaC, and monitoring are implemented incrementally.',
      },
    ],
    de: [
      {
        question: 'Was ist DevOps und warum ist es wichtig?',
        answer: 'DevOps ist eine Reihe von Praktiken und eine Kultur, die Softwareentwicklung (Development) und IT-Betrieb (Operations) kombiniert. Es beschleunigt Software-Lieferprozesse und verbessert die Qualität durch CI/CD-Automatisierung, Infrastructure as Code und kontinuierliche Überwachung.',
      },
      {
        question: 'Wie lange dauert ein Cloud-Migrationsprojekt?',
        answer: 'Die Cloud-Migrationsdauer variiert je nach Infrastrukturkomplexität. Kleine Projekte dauern 2-4 Wochen, mittlere Projekte 1-3 Monate und große Enterprise-Migrationen 3-6 Monate.',
      },
      {
        question: 'Für welche Unternehmen ist Kubernetes geeignet?',
        answer: 'Kubernetes ist ideal für Unternehmen mit Microservices-Architektur, hohem Traffic, Skalierungsanforderungen und containerisierten Anwendungen. Es kann von Startups bis zu Großunternehmen eingesetzt werden.',
      },
      {
        question: 'Wie beginnt die DevOps-Transformation?',
        answer: 'Die DevOps-Transformation beginnt mit der Bewertung bestehender Infrastruktur und Prozesse. Dann wird eine Roadmap erstellt, Quick Wins identifiziert und Praktiken wie CI/CD, IaC und Monitoring schrittweise implementiert.',
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs[language].map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
