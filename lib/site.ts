export const site = {
  name: 'FixPoint Service Lab',
  tagline: 'Authorized-Grade Device Repair Centre',
  phoneDisplay: '+91 99054 29650',
  phone: '+919905429650',
  whatsapp: '919905429650',
  email: 'support@fixpointservicelab.in',
  addressLine1: 'Shop 12, Tech Plaza, MG Road',
  addressLine2: 'Bengaluru, Karnataka 560001',
  hours: 'Mon – Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 6:00 PM',
  hoursShort: 'Open today till 9 PM',
  emergencyLine: '24×7 Emergency Repair Desk',
  mapEmbed:
    'https://www.google.com/maps?q=MG+Road+Bengaluru&output=embed',
  mapLink: 'https://www.google.com/maps?q=MG+Road+Bengaluru',
  demoPrice: '₹4,999',
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
} as const;

/** Pre-filled WhatsApp deep link. Text is encoded once at call time. */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phone}`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Repair Services', href: '#services' },
  { label: 'Mobile Repair', href: '#mobile-repair' },
  { label: 'Laptop Repair', href: '#laptop-repair' },
  { label: 'Parts', href: '#parts' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
