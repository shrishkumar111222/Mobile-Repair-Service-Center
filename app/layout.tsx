import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const description =
  'Expert mobile, laptop and electronics repair with genuine parts, certified technicians, transparent pricing and same-day turnaround. Screen replacement, battery replacement, water damage recovery and chip-level motherboard repair.';

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mobile & Laptop Repair Service Centre`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    'mobile repair near me',
    'laptop repair service centre',
    'screen replacement',
    'battery replacement',
    'iPhone repair',
    'Samsung service centre',
    'MacBook repair',
    'chip level repair',
    'motherboard repair',
    'water damage repair',
    'data recovery',
  ],
  authors: [{ name: site.name }],
  category: 'Electronics Repair Service',
  openGraph: {
    title: `${site.name} | Fast Repairs. Genuine Parts. Trusted Service.`,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Mobile & Laptop Repair Service Centre`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
};

/** LocalBusiness schema so the centre can win local-pack and rich results. */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: site.name,
      description,
      telephone: site.phoneDisplay,
      email: site.email,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.addressLine1,
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560001',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '11:00',
          closes: '18:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1284',
      },
      areaServed: 'Bengaluru and surrounding areas',
      makesOffer: [
        'Mobile Screen Replacement',
        'Battery Replacement',
        'Laptop Repair',
        'MacBook Repair',
        'Chip Level Motherboard Repair',
        'Water Damage Recovery',
        'Data Recovery',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        [
          'How long do repairs take?',
          'Most screen and battery replacements are completed in 30 to 90 minutes. Chip-level and water damage jobs typically take 24 to 48 hours after diagnosis.',
        ],
        [
          'Do you use genuine parts?',
          'Yes. We fit original and OEM-grade parts with a compatibility guarantee, and every part carries written warranty coverage on your invoice.',
        ],
        [
          'Do you provide repair warranties?',
          'Every repair carries a minimum 30-day service warranty, and screen plus battery replacements are covered for 90 days.',
        ],
        [
          'Can I get a quote on WhatsApp?',
          'Yes. Send us your device model and the issue on WhatsApp and you will receive a written estimate, usually within 10 minutes during business hours.',
        ],
        [
          'Do you offer doorstep pickup?',
          'We offer free pickup and drop within the city for most repairs, and a priority courier option for customers outside our service radius.',
        ],
        [
          'Can data be recovered?',
          'In most cases, yes. Our lab performs board-level and storage-level recovery for dead phones, water-damaged devices and failed SSDs or hard drives.',
        ],
      ].map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-repair-red focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
