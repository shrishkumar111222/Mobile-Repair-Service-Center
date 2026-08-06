'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const badges = [
  {
    icon: 'award',
    title: 'Original Parts',
    copy: 'Manufacturer service-pack displays, batteries and cameras sourced through authorised channels.',
  },
  {
    icon: 'shield',
    title: 'OEM Parts',
    copy: 'Factory-grade alternatives from the same production lines, offered as a clearly-priced option.',
  },
  {
    icon: 'check',
    title: 'Warranty Coverage',
    copy: 'Every part carries written warranty printed on your invoice — no verbal promises.',
  },
  {
    icon: 'search',
    title: 'Quality Assurance',
    copy: 'Each part is bench-tested for touch, colour, brightness and capacity before it goes in.',
  },
  {
    icon: 'chip',
    title: 'Compatibility Guarantee',
    copy: 'Model-matched components so True Tone, Face ID and fingerprint modules keep working.',
  },
];

export default function GenuineParts() {
  return (
    <Section id="parts" tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Genuine Parts & Accessories"
          title="No mystery parts. Ever."
          subtitle="You see the part, the grade and the price before we fit it. The old component goes home with you — that is how transparent repair should work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge, i) => (
            <Reveal key={badge.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass relative h-full overflow-hidden rounded-2xl p-7"
              >
                <span
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-repair-red/15 blur-2xl"
                  aria-hidden="true"
                />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-repair-red">
                  <Icon name={badge.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-white">{badge.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{badge.copy}</p>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-red-fade p-7 shadow-glow">
              <p className="text-3xl font-black text-white">100%</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-white/80">
                Parts traceability
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Every component we fit is logged against your job card with its grade, source and warranty
                period — verifiable any time you walk back in.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-navy/60 py-4">
            <div className="flex w-max animate-marquee gap-10 px-6">
              {[
                ...Array(2).fill([
                  'Service-pack displays',
                  'Certified battery cells',
                  'Genuine charging flexes',
                  'Original camera modules',
                  'OEM keyboards & trackpads',
                  'Authentic connectors',
                ]),
              ]
                .flat()
                .map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-400"
                  >
                    <Icon name="sparkle" className="h-4 w-4 text-repair-red" />
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
