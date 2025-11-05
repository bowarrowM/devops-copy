import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devops.com.tr';
  const lastModified = new Date();

  return [
    // Turkish (default)
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    // English
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    // German
    {
      url: `${baseUrl}/de`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
  ];
}
