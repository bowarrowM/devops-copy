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
  const { locale } = useLanguage();

  const schemas = [
    getOrganizationSchema(locale),
    getProfessionalServiceSchema(locale),
    getWebPageSchema(locale),
    getBreadcrumbSchema(),
    getFAQSchema(locale),
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
