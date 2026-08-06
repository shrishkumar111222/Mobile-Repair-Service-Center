import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { BatteryGauge } from './ui/Art';
import { waLink } from '@/lib/site';

const services = [
  {
    icon: 'search',
    title: 'Battery Health Check',
    copy: 'A free 12-point cycle-count, capacity and charge-current report printed for you before anything is opened.',
  },
  {
    icon: 'battery',
    title: 'Battery Replacement',
    copy: 'Genuine and OEM cells fitted with correct adhesive, calibration and a health reset to 100%.',
  },
  {
    icon: 'bolt',
    title: 'Performance Optimisation',
    copy: 'Charging IC checks, thermal throttling fixes and background drain analysis after every swap.',
  },
  {
    icon: 'clock',
    title: 'Fast Installation',
    copy: 'Most phone batteries are replaced and tested in under 30 minutes while you wait.',
  },
  {
    icon: 'shield',
    title: 'Genuine Battery Options',
    copy: 'Certified cells with safety protection circuits, serial-verified and warranty backed.',
  },
];

export default function BatterySection() {
  return (
    <Section tone="navy">
      <div className="container-x">
        <SectionHeading
          eyebrow="Battery Replacement"
          title="Phone dying by lunchtime? Get a full day back."
          subtitle="We diagnose the cell, the charging circuit and the software before recommending a replacement — so you pay for the fix you actually need."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal direction="right">
            <div className="glass rounded-3xl p-8">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Battery diagnostics
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <BatteryGauge percent={61} label="Before" />
                <BatteryGauge percent={100} label="After" />
              </div>
              <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                {[
                  ['Cycle count', '842 → 0'],
                  ['Peak capacity', '61% → 100%'],
                  ['Charge time', '2h 40m → 1h 05m'],
                  ['Service time', '28 minutes'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="font-bold text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 0.08}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-success-green/15 text-success-green">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.copy}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <a
                href={waLink('Hi, I want a free battery health check for my device.')}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover flex h-full items-center justify-between gap-4 rounded-2xl border-repair-red/40 bg-repair-red/10 p-6"
              >
                <span>
                  <span className="block text-base font-black text-white">Free battery health check</span>
                  <span className="mt-1 block text-sm text-slate-300">No appointment needed</span>
                </span>
                <Icon name="arrowRight" className="h-6 w-6 shrink-0 text-repair-red" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
