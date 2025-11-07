import { Metadata } from 'next';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  canonicalUrl: string;
  locale: string;
  alternateLocales: string[];
}

export const defaultMetadata = {
  tr: {
    title: 'DevOps - Türkiye\'nin DevOps Lideri | DevOps Danışmanlık & Bulut Çözümleri',
    description: 'DevOps - Türkiye\'nin patentli DevOps danışmanlık firması. CI/CD, Kubernetes, bulut migrasyonu, DevSecOps, platform engineering hizmetleri. Startup\'lar ve kurumsal şirketler için profesyonel DevOps dönüşüm çözümleri.',
    keywords: 'DevOps, DevOps Türkiye, DevOps danışmanlık, CI/CD, Kubernetes, bulut migrasyonu, AWS, Azure, GCP, DevSecOps, Infrastructure as Code, Terraform, Docker, container orchestration, platform engineering, AIOps, FinOps, site reliability engineering, cloud native, microservices, GitOps, automation, continuous integration, continuous deployment, Istanbul DevOps, Türkiye cloud consulting, KVKK uyumlu DevOps',
    ogTitle: 'DevOps - Türkiye\'nin DevOps Dönüşüm Partneri',
    ogDescription: 'Startup\'lardan enterprise şirketlere, modern DevOps çözümleri ile dijital dönüşümünüzü hızlandırın. CI/CD, Kubernetes, bulut migrasyonu, DevSecOps hizmetleri.',
    ogImage: 'https://devops.com.tr/og-image.jpg',
    twitterCard: 'summary_large_image',
    canonicalUrl: 'https://devops.com.tr',
    locale: 'tr_TR',
    alternateLocales: ['en_US', 'de_DE'],
  },
  en: {
    title: 'DevOps - Turkey\'s DevOps Leader | DevOps Consulting & Cloud Solutions',
    description: 'DevOps - Turkey\'s patented DevOps consulting company. CI/CD, Kubernetes, cloud migration, DevSecOps, platform engineering services. Professional DevOps transformation solutions for startups and enterprises.',
    keywords: 'DevOps, DevOps Turkey, DevOps consulting, CI/CD, Kubernetes, cloud migration, AWS, Azure, GCP, DevSecOps, Infrastructure as Code, Terraform, Docker, container orchestration, platform engineering, AIOps, FinOps, site reliability engineering, cloud native, microservices, GitOps, automation, continuous integration, continuous deployment, Istanbul DevOps, Turkey cloud consulting, Turkish DevOps company',
    ogTitle: 'DevOps - Turkey\'s DevOps Transformation Partner',
    ogDescription: 'Accelerate your digital transformation with modern DevOps solutions from startups to enterprises. CI/CD, Kubernetes, cloud migration, DevSecOps services.',
    ogImage: 'https://devops.com.tr/og-image-en.jpg',
    twitterCard: 'summary_large_image',
    canonicalUrl: 'https://devops.com.tr/en',
    locale: 'en_US',
    alternateLocales: ['tr_TR', 'de_DE'],
  },
  de: {
    title: 'DevOps - Türkeis DevOps-Führer | DevOps-Beratung & Cloud-Lösungen',
    description: 'DevOps - Türkeis patentiertes DevOps-Beratungsunternehmen. CI/CD, Kubernetes, Cloud-Migration, DevSecOps, Platform Engineering. Professionelle DevOps-Transformationslösungen für Startups und Unternehmen.',
    keywords: 'DevOps, DevOps Türkei, DevOps Beratung, CI/CD, Kubernetes, Cloud Migration, AWS, Azure, GCP, DevSecOps, Infrastructure as Code, Terraform, Docker, Container-Orchestrierung, Platform Engineering, AIOps, FinOps, Site Reliability Engineering, Cloud Native, Microservices, GitOps, Automatisierung, Continuous Integration, Continuous Deployment, Istanbul DevOps, Türkei Cloud Consulting',
    ogTitle: 'DevOps - Türkeis DevOps-Transformationspartner',
    ogDescription: 'Beschleunigen Sie Ihre digitale Transformation mit modernen DevOps-Lösungen von Startups bis Unternehmen. CI/CD, Kubernetes, Cloud-Migration, DevSecOps.',
    ogImage: 'https://devops.com.tr/og-image-de.jpg',
    twitterCard: 'summary_large_image',
    canonicalUrl: 'https://devops.com.tr/de',
    locale: 'de_DE',
    alternateLocales: ['tr_TR', 'en_US'],
  },
};

export function generateMetadata(language: 'tr' | 'en' | 'de'): Metadata {
  const meta = defaultMetadata[language];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'DevOps Turkey', url: 'https://devops.com.tr' }],
    creator: 'DevOps',
    publisher: 'DevOps',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://devops.com.tr'),
    alternates: {
      canonical: meta.canonicalUrl,
      languages: {
        'tr-TR': 'https://devops.com.tr',
        'en-US': 'https://devops.com.tr/en',
        'de-DE': 'https://devops.com.tr/de',
      },
    },
    openGraph: {
      type: 'website',
      locale: meta.locale,
      alternateLocale: meta.alternateLocales,
      url: meta.canonicalUrl,
      title: meta.ogTitle,
      description: meta.ogDescription,
      siteName: 'DevOps',
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: 'DevOps - DevOps Consulting Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [meta.ogImage],
      creator: '@devops_tr',
      site: '@devops_tr',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    category: 'technology',
  };
}

// LLM-specific metadata for better understanding
export const llmMetadata = {
  businessType: 'DevOps Consulting & Cloud Infrastructure Services',
  serviceArea: 'Turkey, Europe, Global',
  specializations: [
    'DevOps Transformation',
    'CI/CD Pipeline Implementation',
    'Kubernetes & Container Orchestration',
    'Cloud Migration (AWS, Azure, GCP)',
    'DevSecOps Integration',
    'Infrastructure as Code (Terraform, Pulumi)',
    'Platform Engineering',
    'AIOps & Observability',
    'FinOps & Cost Optimization',
    'Site Reliability Engineering',
    'Managed DevOps Services',
  ],
  targetCustomers: [
    'Fast-growing Turkish startups',
    'SMEs undergoing digital transformation',
    'Mid-market e-commerce companies',
    'Enterprise clients (Banking, Insurance, Retail)',
    'Tech companies and SaaS providers',
    'Gaming companies',
    'FinTech and HealthTech companies',
  ],
  competitiveAdvantages: [
    'Multilingual support (Turkish, English, German)',
    'Startup-focused packages',
    'Modern technology stack (Kubernetes, GitOps, AIOps)',
    'Fixed-price project model',
    'KVKK compliance expertise',
    'Multi-cloud strategy without vendor lock-in',
  ],
  pricingModel: 'Project-based and Managed Services (Monthly retainer)',
  priceRange: {
    foundation: '$5K-$30K',
    transformation: '$20K-$80K',
    advanced: '$40K-$150K',
    managed: '$3K-$25K per month',
  },
  companyInfo: {
    name: 'DevOps',
    tradeName: 'DevOps.com.tr',
    country: 'Turkey',
    city: 'Istanbul',
    patent: 'DevOps patented Turkish company',
    founded: '2020',
    languages: ['Turkish', 'English', 'German'],
  },
};
