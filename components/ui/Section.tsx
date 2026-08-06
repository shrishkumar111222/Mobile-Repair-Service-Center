import type { ReactNode } from 'react';
import Reveal from './Reveal';

export function Section({
  id,
  children,
  className = '',
  tone = 'navy',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'navy' | 'deep' | 'light';
}) {
  const tones = {
    navy: 'bg-navy',
    deep: 'bg-deep-blue',
    light: 'bg-light-gray',
  } as const;

  return (
    <section id={id} className={`relative overflow-hidden py-20 lg:py-28 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left';

  return (
    <Reveal className={alignment}>
      <span className={light ? 'eyebrow border-repair-red/30 bg-repair-red/10 text-repair-red' : 'eyebrow'}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 h-display ${light ? '!text-navy' : ''}`}>{title}</h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-relaxed ${light ? 'text-slate-600' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
