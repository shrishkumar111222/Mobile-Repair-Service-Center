import type { MetadataRoute } from 'next';

const base = 'https://shrishkumar111222.github.io/Mobile-Repair-Service-Center';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
