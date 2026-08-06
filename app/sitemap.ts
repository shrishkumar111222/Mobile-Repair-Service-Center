import type { MetadataRoute } from 'next';

const base = 'https://shrishkumar111222.github.io/Mobile-Repair-Service-Center';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
