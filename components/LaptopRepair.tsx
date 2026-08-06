import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { LabScene } from './ui/Art';
import { waLink } from '@/lib/site';

const services = [
  { icon: 'laptop', title: 'Screen Repair', note: 'FHD, 2K, OLED & touch panels' },
  { icon: 'keyboard', title: 'Keyboard Replacement', note: 'Single key to full deck' },
  { icon: 'database', title: 'SSD Upgrades', note: 'NVMe swap with data cloning' },
  { icon: 'memory', title: 'RAM Upgrades', note: 'Up to max supported config' },
  { icon: 'chip', title: 'Motherboard Repair', note: 'Power rails & chipset faults' },
  { icon: 'plug', title: 'Charging Issues', note: 'DC jack, Type-C, IC failure' },
  { icon: 'fire', title: 'Overheating Fixes', note: 'Paste, fans & full teardown' },
  { icon: 'shield', title: 'Data Recovery', note: 'Failed drives & dead boards' },
];

const brands = ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Apple', 'MSI'];

export default function LaptopRepair() {
  return (
    <Section id="laptop-repair" tone="navy">
      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Laptop & MacBook Repair"
            align="left"
            title="Business-grade laptop service, without the wait"
            subtitle="We service consumer and business laptops end to end — component-level board repair, thermal overhauls and performance upgrades, all with your data untouched."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 4) * 0.05}>
                <div className="glass glass-hover flex items-start gap-3 rounded-xl p-4">
                  <Icon name={service.icon} className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
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
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200 transition hover:border-sky-400/50 hover:text-white"
                >
                  {brand}
                </span>
              ))}
            </div>

            <a
              href={waLink('Hi, I need a laptop repair quote. Brand & model: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-8"
            >
              <Icon name="wrench" className="h-5 w-5" /> Get Laptop Repair Quote
            </a>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div className="glass overflow-hidden rounded-3xl">
            <LabScene variant="station" label="Laptop repair station with diagnostic equipment" />
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {[
                ['Free', 'Diagnosis'],
                ['48 hrs', 'Board repair'],
                ['90 days', 'Warranty'],
              ].map(([big, small]) => (
                <div key={small} className="px-3 py-4 text-center">
                  <p className="text-base font-black text-white">{big}</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">{small}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
