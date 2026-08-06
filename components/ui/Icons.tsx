import type { SVGProps } from 'react';

/**
 * Inline stroke icons. Keeping them local avoids an icon-font request and
 * keeps the static export fully self-contained.
 */
const paths: Record<string, string[]> = {
  phone: ['M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 2 6.2 2 2 0 0 1 4 4Z'],
  whatsapp: [
    'M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1l-4.7 1.4Z',
    'M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4 1-1v-.8l-1.8-.8-.9 1a5.3 5.3 0 0 1-2.2-2.2l1-.9-.8-1.8H10c-.6 0-1 .4-1 1Z',
  ],
  clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7.5V12l3 2'],
  bolt: ['m13 2-9 12h7l-1 8 9-12h-7l1-8Z'],
  shield: ['M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3Z', 'm9 12 2 2 4-4'],
  wrench: ['M14.5 3a5.5 5.5 0 0 0-5 7.7L3 17.2 6.8 21l6.5-6.5A5.5 5.5 0 0 0 20 9l-3 1.5L14.5 8 16 5a5.6 5.6 0 0 0-1.5-2Z'],
  mobile: ['M7 2.5h10a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V4A1.5 1.5 0 0 1 7 2.5Z', 'M10.5 18.5h3'],
  laptop: ['M4 5.5h16v10H4z', 'M2 18.5h20'],
  tablet: ['M5.5 3h13v18h-13z', 'M11 18h2'],
  apple: ['M15.5 3c-1.2.1-2.4 1-2.9 2.1M17 12.5c0-2 1.2-3 1.6-3.3A4.2 4.2 0 0 0 15 7c-1.5-.1-2.3.8-3 .8s-1.6-.8-2.8-.8C7 7 5 8.7 5 12c0 3.3 2.3 8 4.4 8 1 0 1.7-.7 2.6-.7s1.5.7 2.6.7c1.4 0 3-2.5 3.4-4.2a3.7 3.7 0 0 1-1-3.3Z'],
  gamepad: ['M7 8h10a4 4 0 0 1 4 4v1a3.5 3.5 0 0 1-6 2.5l-1-1H10l-1 1A3.5 3.5 0 0 1 3 13v-1a4 4 0 0 1 4-4Z', 'M8 11v2M7 12h2M15.5 11.5h.01M17.5 13h.01'],
  chip: ['M8 8h8v8H8z', 'M5 9V6h3M16 5h3v3M19 15v3h-3M8 19H5v-3'],
  database: ['M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Z', 'M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3'],
  battery: ['M3 8h14v8H3z', 'M20 11v2', 'M5.5 10.5h4v3h-4z'],
  droplet: ['M12 3.5s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10Z'],
  camera: ['M4 8h3l1.5-2h7L17 8h3v11H4z', 'M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
  speaker: ['M4 9h4l5-4v14l-5-4H4z', 'M17 9.5a4 4 0 0 1 0 5'],
  mic: ['M12 3.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0V6A2.5 2.5 0 0 1 12 3.5Z', 'M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21'],
  code: ['m8 8-4 4 4 4', 'm16 8 4 4-4 4', 'm14 5-4 14'],
  plug: ['M9 3v5M15 3v5', 'M6 8h12v3a6 6 0 0 1-12 0V8Z', 'M12 17v4'],
  keyboard: ['M3 7h18v10H3z', 'M7 11h.01M11 11h.01M15 11h.01M7 14h10'],
  memory: ['M3 8h18v7H3z', 'M6 15v3M10 15v3M14 15v3M18 15v3'],
  fire: ['M12 3s1 3-1 5-3 3-3 6a4 4 0 0 0 8 0c0-2-1.5-3-1.5-3s3 .5 3 3.5a5.5 5.5 0 1 1-11 0C6.5 8.5 12 8 12 3Z'],
  star: ['m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z'],
  check: ['m5 12.5 4.5 4.5L19 7'],
  cross: ['m6 6 12 12M18 6 6 18'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5'],
  mail: ['M3 6h18v12H3z', 'm3 7 9 6 9-6'],
  pin: ['M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'm16.5 16.5 4 4'],
  truck: ['M3 6h11v10H3z', 'M14 9h4l3 3v4h-7z', 'M7.5 19a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5ZM17.5 19a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5Z'],
  headset: ['M4 14v-2a8 8 0 0 1 16 0v2', 'M4 13h3v6H5.5A1.5 1.5 0 0 1 4 17.5V13ZM17 13h3v4.5a1.5 1.5 0 0 1-1.5 1.5H17v-6Z'],
  chart: ['M4 20V4', 'M4 20h16', 'M8 17v-5M12.5 17V8M17 17v-7'],
  award: ['M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'm8.5 13-1.5 8 5-2.5 5 2.5-1.5-8'],
  sparkle: ['M12 3v4M12 17v4M3 12h4M17 12h4', 'm6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18'],
  arrowRight: ['M4 12h15', 'm13 6 6 6-6 6'],
  chevronDown: ['m6 9 6 6 6-6'],
  menu: ['M4 7h16M4 12h16M4 17h16'],
  microscope: ['M9 4h4l1 8H8l1-8Z', 'M6 16h9a5 5 0 0 0 0-4', 'M4 20h16'],
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  className = 'h-6 w-6',
  ...rest
}: { name: IconName | string; className?: string } & SVGProps<SVGSVGElement>) {
  const d = paths[name] ?? paths.wrench;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {d.map((p) => (
        <path key={p} d={p} />
      ))}
    </svg>
  );
}
