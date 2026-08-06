import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { PhoneArt } from './ui/Art';
import { waLink } from '@/lib/site';

const services = [
  { icon: 'mobile', title: 'Screen Replacement', note: 'OLED & LCD, 45 min' },
  { icon: 'battery', title: 'Battery Replacement', note: 'Health restored to 100%' },
  { icon: 'plug', title: 'Charging Port Repair', note: 'Port rebuild or swap' },
  { icon: 'camera', title: 'Camera Repair', note: 'Front, rear & lens glass' },
  { icon: 'speaker', title: 'Speaker Repair', note: 'Earpiece & loudspeaker' },
  { icon: 'mic', title: 'Microphone Repair', note: 'Call & recording audio' },
  { icon: 'code', title: 'Software Issues', note: 'Boot loops, FRP, updates' },
  { icon: 'chip', title: 'Motherboard Repair', note: 'Board-level diagnostics' },
];

const brands = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo', 'Nothing', 'Motorola'];

export default function MobileRepair() {
  return (
    <Section id="mobile-repair" tone="deep">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <Reveal direction="right" className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="glass rounded-3xl p-8">
              <div className="mx-auto h-[22rem] w-44">
                <PhoneArt state="fixed" />
              </div>
            </div>
            <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Average</p>
              <p className="text-2xl font-black text-white">42 min</p>
              <p className="text-xs text-slate-400">screen turnaround</p>
            </div>
            <div className="glass absolute -right-3 top-8 rounded-2xl px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Parts</p>
              <p className="text-2xl font-black text-success-green">Genuine</p>
              <p className="text-xs text-slate-400">OEM grade only</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Smartphone Repair"
            align="left"
            title="Smartphone repairs done right, the first time"
            subtitle="Every phone gets a free 30-minute diagnostic, a written quote before we open it, and a warranty-backed repair carried out on ESD-safe benches."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 4) * 0.05}>
                <div className="glass glass-hover flex items-start gap-3 rounded-xl p-4">
                  <Icon name={service.icon} className="mt-0.5 h-5 w-5 shrink-0 text-repair-red" />
                  <div>
                    <p className="text-sm font-bold text-white">{service.title}</p>
                    <p className="text-xs text-slate-400">{service.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Brands we service
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200 transition hover:border-repair-red/50 hover:text-white"
                >
                  {brand}
                </span>
              ))}
            </div>

            <a
              href={waLink('Hi, I need a repair quote for my smartphone. Model: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-8"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Get Repair Quote
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
