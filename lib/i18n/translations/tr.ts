import { Translations } from '../types';

export const tr: Translations = {
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    getStarted: 'İletişim',
    tagline: 'Kurumsal DevOps Danışmanlığı',
  },
  hero: {
    title: 'DevOps Danışmanlık & Dönüşüm',
    subtitle: 'Geliştiricileriniz kod yazsın, altyapı yönetmesin. GitOps ile self-service platformlar, otomatik deploymentlar ve dakikalar içinde rollback. AWS, Azure, GCP\'de modern DevOps çözümleri, AI workflows, LLMOps ve cloud-native mimariler ile ekibinizin verimliliğini artırıyoruz.',
    cta: 'Görüşme Talebi',
    ctaSecondary: 'Hizmetleri İnceleyin',
    badge: 'DevOps Uzmanları',
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
    labels: {
      address: 'Adres',
      email: 'E-posta',
      phone: 'Telefon',
      social: 'Sosyal Medya',
      freeConsulting: 'İhtiyaç Analizi',
      consultingDesc: 'DevOps yolculuğunuzda size nasıl yardımcı olabileceğimizi konuşalım.',
      benefit1: '30 dakikalık keşif görüşmesi',
      benefit2: 'Detaylı altyapı analizi',
      benefit3: 'Özel çözüm önerileri',
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
        content: 'DevOps ekibi sayesinde deployment süremizi önemli ölçüde kısalttık. Kubernetes migrasyonumuz sorunsuz tamamlandı ve artık çok daha sık deployment yapabiliyoruz.',
        rating: 5,
        result: 'Hızlı Deployment'
      },
      {
        name: 'Ayşe Demir',
        position: 'Yazılım Müdürü',
        company: 'E-Ticaret Ltd.',
        content: 'CI/CD pipeline kurulumu ve AWS optimizasyonu ile hem maliyetlerimiz düştü hem de sistem güvenilirliği arttı. Profesyonel yaklaşımları ve sürekli destekleri çok değerli.',
        rating: 5,
        result: 'Maliyet Optimizasyonu'
      },
      {
        name: 'Can Öztürk',
        position: 'DevOps Lead',
        company: 'FinTech Şirketi',
        content: 'DevSecOps entegrasyonu konusunda uzman desteği aldık. KVKK uyumluluğu ve güvenlik taraması otomasyonları sayesinde hem compliant hem de hızlı bir development sürecine geçtik.',
        rating: 5,
        result: 'Tam Uyumluluk'
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
      aws: 'EKS, ECS, Lambda, RDS, S3, CloudFormation, CodePipeline',
      azure: 'AKS, Azure DevOps, Functions, Cosmos DB, Azure Storage',
      gcp: 'GKE, Cloud Run, BigQuery, Cloud Storage, Cloud Build',
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
  featuredCaseStudy: {
    badge: 'Başarı Hikayesi',
    title: 'Gerçek Sonuçlar, Gerçek Etki',
    subtitle: 'MegaShop\'un Black Friday\'de %99.99 uptime başarısını nasıl sağladık',
    tags: {
      ecommerce: 'E-Ticaret',
      employees: '500+ çalışan',
      weeks: '12 hafta',
    },
    caseTitle: 'E-Ticaret Platformunu Black Friday Trafiğini Kaldıracak Şekilde Ölçeklendirme',
    company: 'MegaShop',
    challenge: {
      title: 'Zorluk',
      description: 'Yoğun alışveriş sezonlarında ciddi kesintiler yaşanıyordu. Monolitik mimari trafik artışlarını kaldıramıyor, bu da gelir kaybına ve müşteri memnuniyetsizliğine yol açıyordu. Deploymentlar 6-8 saat sürüyordu.',
    },
    solution: {
      title: 'Çözüm',
      description: 'Kubernetes üzerinde microservices mimarisine geçiş, otomatik test içeren CI/CD pipeline kurulumu, auto-scaling implementasyonu ve kapsamlı observability sistemi kurulumu.',
    },
    results: {
      title: 'Etkileyici Sonuçlar',
      uptime: { value: '%99.99', label: 'Yoğun Dönem Uptime' },
      deployments: { value: '%87', label: 'Daha Hızlı Deploymentlar' },
      revenue: { value: '$2.4M', label: 'Kurtarılan Gelir' },
      scaling: { value: '10x', label: 'Ölçekleme Kapasitesi' },
    },
    testimonial: {
      quote: 'Dönüşüm inanılmazdı. Black Friday\'i şirket tarihinde ilk kez sıfır kesinti ile geçirdik. Mühendislik ekibimiz artık haftada bir yerine günde birden fazla deployment yapabiliyor. Yatırım getirisi ilk büyük alışveriş sezonunda elde edildi.',
      author: 'Sarah Chen',
      position: 'CTO, MegaShop',
    },
    cta: 'Daha Fazla Başarı Hikayesi',
    quickStats: {
      savings: { value: '$3.5M+', label: 'Toplam Müşteri Tasarrufu' },
      uptime: { value: '%99.9', label: 'Ortalama Müşteri Uptime' },
      deployments: { value: '%87', label: 'Ortalama Hızlı Deployment' },
    },
  },
  clientLogos: {
    title: 'Güvenilen İş Ortağı',
    subtitle: 'Türkiye\'nin önde gelen şirketleri DevOps dönüşümlerinde bize güveniyor',
    clients: {
      retail: 'Lider Perakende Zinciri',
      fintech: 'Finans Teknoloji Şirketi',
      saas: 'Kurumsal SaaS Platformu',
      healthcare: 'Sağlık Teknolojisi Şirketi',
      logistics: 'Lojistik ve Kargo',
      manufacturing: 'Üretim ve Sanayi',
      education: 'Eğitim Teknolojisi',
      insurance: 'Sigorta ve Finans',
    },
    certifications: {
      aws: {
        title: 'AWS Advanced Partner',
        description: 'Advanced tier statüsünde sertifikalı AWS danışmanlık ortağı',
      },
      iso: {
        title: 'ISO 27001 Sertifikalı',
        description: 'Bilgi güvenliği yönetim sistemi sertifikası',
      },
      kvkk: {
        title: 'KVKK Uyumlu',
        description: 'Kişisel verilerin korunması kanununa tam uyumluluk',
      },
      microsoft: {
        title: 'Microsoft Partner',
        description: 'Azure ve Microsoft teknolojilerinde sertifikalı partner',
      },
    },
    trustIndicators: {
      clients: { value: '50+', label: 'Aktif Müşteri' },
      projects: { value: '200+', label: 'Tamamlanan Proje' },
      satisfaction: { value: '%98', label: 'Müşteri Memnuniyeti' },
      experience: { value: '5+ Yıl', label: 'DevOps Deneyimi' },
    },
  },
  statistics: {
    title: 'Rakamlarla Başarımız',
    subtitle: 'Müşterilerimiz için somut sonuçlar üretiyoruz',
    stats: {
      clients: {
        value: '50+',
        label: 'Mutlu Müşteri',
        description: 'Türkiye\'nin önde gelen şirketlerine hizmet veriyoruz',
      },
      projects: {
        value: '200+',
        label: 'Tamamlanan Proje',
        description: 'Başarıyla tamamlanan DevOps transformasyonları',
      },
      savings: {
        value: '$3.5M+',
        label: 'Toplam Tasarruf',
        description: 'Müşterilerimiz için sağladığımız maliyet optimizasyonu',
      },
      satisfaction: {
        value: '%98',
        label: 'Memnuniyet',
        description: 'Müşteri memnuniyet skoru',
      },
      deployments: {
        value: '%87',
        label: 'Daha Hızlı',
        description: 'Deployment sürelerinde ortalama iyileşme',
      },
      uptime: {
        value: '%99.9',
        label: 'Uptime',
        description: 'Ortalama sistem kullanılabilirlik oranı',
      },
      servers: {
        value: '1000+',
        label: 'Yönetilen Sunucu',
        description: 'Aktif olarak yönettiğimiz cloud kaynakları',
      },
      certifications: {
        value: '15+',
        label: 'Sertifika',
        description: 'Ekip üyelerimizin sahip olduğu profesyonel sertifikalar',
      },
    },
    cta: {
      question: 'Kuruluşunuz için bu sonuçları görmek ister misiniz?',
      calculateRoi: 'ROI Hesaplayın',
      scheduleConsultation: 'Danışmanlık Planlayın',
    },
  },
};
