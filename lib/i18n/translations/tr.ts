import { Translations } from '../types';

export const tr: Translations = {
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    getStarted: 'Başlayın',
  },
  hero: {
    title: 'DevOps Danışmanlık & Platform Engineering',
    subtitle: 'Geliştiricileriniz kod yazsın, altyapı yönetmesin. GitOps ve Platform Engineering ile self-service platformlar, otomatik deploymentlar ve dakikalar içinde rollback. AWS, Azure, GCP\'de Internal Developer Platform (IDP) kuruyor, AI workflows, LLMOps ve cloud-native mimariler ile ekibinizin verimliliğini artırıyoruz.',
    cta: 'Hemen Başlayın',
    ctaSecondary: 'Hizmetleri Keşfedin',
    badge: 'DevOps & Platform Engineering Uzmanları',
  },
  services: {
    title: 'Hizmetlerimiz',
    subtitle: 'Her ölçekteki işletme için kapsamlı DevOps çözümleri',
    tiers: {
      foundation: {
        title: 'Temel Hizmetler',
        description: 'DevOps yolculuğunuza başlayın',
      },
      transformation: {
        title: 'Dönüşüm Hizmetleri',
        description: 'Altyapınızı modernize edin',
      },
      advanced: {
        title: 'İleri Seviye',
        description: 'Kurumsal ölçekte çözümler',
      },
      managed: {
        title: 'Yönetilen Hizmetler',
        description: '7/24 destek ve yönetim',
      },
    },
    items: {
      assessment: {
        title: 'DevOps Değerlendirme & Strateji',
        description: 'Mevcut durumunuzu analiz eder, teknoloji stack değerlendirmesi yapar ve yol haritası oluştururuz.',
      },
      cicd: {
        title: 'CI/CD Pipeline Kurulumu',
        description: 'AWS CodePipeline, Azure DevOps, GitLab CI/CD veya GitHub Actions ile otomatik test ve deployment süreçleri.',
      },
      cloudMigration: {
        title: 'Bulut Migrasyonu',
        description: 'AWS, Azure veya GCP\'ye güvenli ve optimize edilmiş bulut geçişi.',
      },
      kubernetes: {
        title: 'Kubernetes & Container Orchestration',
        description: 'EKS, AKS veya GKE ile container yönetimi, service mesh ve GitOps implementasyonu.',
      },
      iac: {
        title: 'Infrastructure as Code (IaC)',
        description: 'AWS CloudFormation, Azure ARM/Bicep, Terraform veya Pulumi ile multi-cloud altyapı otomasyonu.',
      },
      devsecops: {
        title: 'DevSecOps Entegrasyonu',
        description: 'Güvenlik taraması otomasyonu, compliance yönetimi ve vulnerability management.',
      },
      platform: {
        title: 'Platform Engineering',
        description: 'Internal developer platform ve self-service altyapı çözümleri.',
      },
      aiops: {
        title: 'AIOps & Observability',
        description: 'AWS CloudWatch, Azure Monitor, Prometheus, Grafana, Datadog ile yapay zeka destekli izleme.',
      },
      finops: {
        title: 'FinOps & Maliyet Optimizasyonu',
        description: 'AWS Cost Explorer, Azure Cost Management ve GCP Billing ile bulut harcamalarınızı analiz eder ve optimize ederiz.',
      },
      managed: {
        title: 'Yönetilen DevOps Hizmetleri',
        description: '7/24 izleme, olay müdahalesi ve tam DevOps ekip desteği.',
      },
    },
    learnMore: 'Detayları Gör',
  },
  about: {
    title: 'Neden DevOps?',
    subtitle: 'DevOps dönüşümünüzde stratejik ortağınız. Modern practices, proven frameworks, hands-on expertise',
    advantages: {
      bilingual: {
        title: 'Security-First DevSecOps',
        description: 'Policy-as-code, otomatik güvenlik taramaları ve compliance denetimi ile güvenliği her aşamaya entegre ediyoruz. Siber güvenlik olaylarını azaltın.',
      },
      startup: {
        title: 'Platform Engineering',
        description: 'Internal Developer Platform (IDP) ile ekibinizin self-service altyapıya erişimini sağlıyoruz. Hızlı onboarding, standart governance, developer experience odaklı.',
      },
      modern: {
        title: 'AI-Driven Automation',
        description: 'LLMOps, AgentOps ve AI-powered workflows ile deployment süreçlerinizi otomatikleştiriyor, manuel hataları ortadan kaldırıyoruz.',
      },
      expertise: {
        title: 'Observability-First',
        description: 'Prometheus, Grafana, Datadog ile kapsamlı izleme. Sorunları ortaya çıkmadan önce tespit edin, güvenilir sistemler kurun.',
      },
      compliance: {
        title: 'FinOps & Cost Optimization',
        description: 'Bulut harcamalarınızı analiz ediyor, gereksiz maliyetleri tespit ediyor ve optimize ediyoruz. Bütçenizi kontrol altına alın.',
      },
      multiCloud: {
        title: 'Multi-Cloud Expertise',
        description: 'AWS, Azure, GCP platformlarında certified uzmanlarla vendor lock-in olmadan esnek, production-ready çözümler.',
      },
    },
    technologies: 'Kullandığımız Teknolojiler',
  },
  stats: {
    experience: 'Yıllık Deneyim',
    projects: 'Tamamlanan Proje',
    clients: 'Mutlu Müşteri',
    success: 'Başarı Oranı',
  },
  whyChooseUs: {
    title: 'Size Sağladığımız Faydalar',
    subtitle: 'Geliştiricilerinizi operasyonel yükten kurtarın, self-service altyapı ile verimliliklerini artırın',
    benefits: {
      fastResult: {
        title: 'Hızlı Deployment',
        description: 'GitOps ve otomatik CI/CD ile üretim ortamına daha hızlı çıkın',
        stat: 'Hızlı',
      },
      costOptimization: {
        title: 'Güvenilir Altyapı',
        description: 'Platform Engineering ve IaC ile altyapı hatalarını azaltın',
        stat: 'Güvenilir',
      },
      security: {
        title: 'DevSecOps Entegrasyonu',
        description: 'Güvenlik testlerini otomatikleştirin, compliance\'ı kod ile yönetin',
        stat: 'Otomatik',
      },
      fasterDeploy: {
        title: 'Self-Service Platform',
        description: 'Developer\'larınız altyapıyı beklemeden deploy edebilsin',
        stat: 'Self-Service',
      },
      support: {
        title: 'AI-Driven Monitoring',
        description: 'AIOps ile sorunları önceden tespit edin, otomatik düzeltin',
        stat: 'Proaktif',
      },
      provenSuccess: {
        title: 'Modern Teknolojiler',
        description: 'Platform Engineering, GitOps, LLMOps, AgentOps uzmanlığı',
        stat: 'Modern',
      },
    },
    trustBar: {
      awsPartner: {
        badge: '🚀 GitOps',
        description: 'ArgoCD ve Flux ile continuous deployment',
      },
      iso: {
        badge: '🏗️ Platform Engineering',
        description: 'Internal Developer Platform (IDP) kurulumu',
      },
      kvkk: {
        badge: '🤖 AI-Driven',
        description: 'LLMOps, AgentOps ve AI workflows',
      },
    },
  },
  servicesCta: {
    title: 'Projeniz için özel bir çözüm mü arıyorsunuz?',
    description: 'Uzman ekibimiz, işletmenizin benzersiz ihtiyaçlarına özel DevOps stratejileri geliştirmek için hazır.',
    button: 'İletişime Geçin',
  },
  contact: {
    title: 'Hemen Başlayın',
    subtitle: 'DevOps dönüşümünüz için ihtiyaçlarınızı görüşelim',
    form: {
      name: 'Adınız Soyadınız',
      email: 'E-posta',
      phone: 'Telefon',
      company: 'Şirket Adı',
      service: 'İlgilendiğiniz Hizmet',
      message: 'Mesajınız',
      submit: 'Gönder',
      submitting: 'Gönderiliyor...',
      selectPlaceholder: 'Seçiniz...',
      consent: 'KVKK Aydınlatma Metni\'ni okudum, verilerimin işlenmesini kabul ediyorum.',
      consentRequired: 'Devam etmek için onay vermelisiniz',
      success: 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.',
      error: 'Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta ile iletişime geçin.',
    },
    info: {
      address: 'İstanbul, Türkiye',
      email: 'info@devops.com.tr',
      phone: '+90 (XXX) XXX XX XX',
    },
  },
  footer: {
    tagline: 'Türkiye\'nin DevOps dönüşüm partneri',
    services: 'Hizmetler',
    company: 'Şirket',
    legal: 'Yasal',
    rights: 'Tüm hakları saklıdır.',
    trademark: 'DevOps® platformu DevOps Ltd. Şti.\'nın tescilli ürün/markasıdır.',
    blog: 'Blog',
    career: 'Kariyer',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfService: 'Kullanım Şartları',
    kvkkPolicy: 'KVKK',
    cookiePolicy: 'Çerez Politikası',
    madeWithLove: 'Türkiye\'de ❤️ ile yapıldı',
  },
  testimonials: {
    title: 'Müşterilerimiz Ne Diyor?',
    subtitle: 'Türkiye\'nin önde gelen şirketleri DevOps dönüşümü için bizi tercih ediyor',
    cta: 'Siz de başarı hikayenizi yazmak ister misiniz?',
    ctaButton: 'İletişime Geçin',
    items: [
      {
        name: 'Mehmet Yılmaz',
        position: 'CTO',
        company: 'TechStartup A.Ş.',
        content: 'DevOps ekibi sayesinde deployment süremizi 2 saatten 15 dakikaya indirdik. Kubernetes migrasyonumuz sorunsuz tamamlandı ve artık günde 10+ deploy yapabiliyoruz.',
        rating: 5,
        result: '%87 Daha Hızlı Deploy'
      },
      {
        name: 'Ayşe Demir',
        position: 'Yazılım Müdürü',
        company: 'E-Ticaret Ltd.',
        content: 'CI/CD pipeline kurulumu ve AWS optimizasyonu ile hem maliyetlerimiz %40 düştü hem de sistem güvenilirliği arttı. Profesyonel yaklaşımları ve sürekli destekleri çok değerli.',
        rating: 5,
        result: '%40 Maliyet Tasarrufu'
      },
      {
        name: 'Can Öztürk',
        position: 'DevOps Lead',
        company: 'FinTech Şirketi',
        content: 'DevSecOps entegrasyonu konusunda uzman desteği aldık. KVKK uyumluluğu ve güvenlik taraması otomasyonları sayesinde hem compliant hem de hızlı bir development sürecine geçtik.',
        rating: 5,
        result: '100% Compliance'
      },
    ],
  },
  common: {
    backToHome: 'Ana Sayfaya Dön',
    contactCta: 'Sorularınız mı var? {email} adresinden bize ulaşın.',
  },
  legal: {
    privacy: {
      title: 'Gizlilik Politikası',
      lastUpdated: 'Son Güncelleme',
      introduction: 'DevOps Ltd. Şti. olarak, kişisel verilerinizin güvenliği bizim için önceliklidir. Bu gizlilik politikası, topladığımız bilgileri, nasıl kullandığımızı ve haklarınızı açıklar.',
    },
    terms: {
      title: 'Kullanım Koşulları',
      lastUpdated: 'Son Güncelleme',
      introduction: 'DevOps web sitesini kullanarak aşağıdaki şartları ve koşulları kabul etmiş olursunuz.',
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      lastUpdated: 'Son Güncelleme',
      introduction: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla DevOps Ltd. Şti. olarak kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek isteriz.',
    },
    cookies: {
      title: 'Çerez Politikası',
      lastUpdated: 'Son Güncelleme',
      introduction: 'Web sitemizde çerezler kullanarak deneyiminizi geliştirmek ve hizmetlerimizi optimize etmek için veri topluyoruz.',
    },
  },
  techStack: {
    title: 'Kurumsal Teknoloji Yığını',
    subtitle: 'AWS, Azure ve Google Cloud platformlarında endüstri standardı araçlarla güçlendirilmiş DevOps çözümleri',
    cloudPlatforms: {
      title: 'Multi-Cloud Uzmanlığı',
      description: 'AWS, Microsoft Azure ve Google Cloud Platform\'da production-ready altyapı ve DevOps çözümleri sunuyoruz',
    },
    categories: {
      cicd: 'CI/CD & Otomasyon',
      gitops: 'GitOps & Deployment',
      container: 'Container & Orchestration',
      iac: 'Infrastructure as Code',
      monitoring: 'Monitoring & Observability',
      security: 'Security & Compliance',
    },
    badges: {
      cloudNative: 'Cloud Native',
      multiCloud: 'Multi-Cloud',
      production: 'Production Ready',
      enterprise: 'Enterprise Grade',
    },
    allTools: 'Tüm Araçlar',
  },
};
