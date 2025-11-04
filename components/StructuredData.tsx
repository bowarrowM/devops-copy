'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import {
  getOrganizationSchema,
  getProfessionalServiceSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/lib/seo/structuredData';

export default function StructuredData() {
  const { language } = useLanguage();

  const schemas = [
    getOrganizationSchema(language),
    getProfessionalServiceSchema(language),
    getWebPageSchema(language),
    getBreadcrumbSchema(),
    getFAQSchema(language),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
