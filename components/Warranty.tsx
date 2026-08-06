import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const cover = [
  { icon: 'clock', title: '30-Day Warranty', copy: 'Standard cover on every repair we carry out, whatever the fault.' },
  { icon: 'shield', title: '90-Day Warranty', copy: 'Extended cover on screen, battery and board-level replacements.' },
  { icon: 'chip', title: 'Part Warranty', copy: 'Manufacturer-backed cover on all original and OEM components fitted.' },
  { icon: 'award', title: 'Service Guarantee', copy: 'If the same fault returns within cover, we re-repair it free of charge.' },
  { icon: 'check', title: 'Repair Assurance', copy: 'Unrepairable after diagnosis? You pay nothing and take the device home.' },
  { icon: 'headset', title: 'Satisfaction Commitment', copy: 'Not happy at collection? We rework it before you settle the bill.' },
];

export default function Warranty() {
  return (
    <Section tone="navy">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-deep-blue p-8 sm:p-12">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-repair-red/20 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <SectionHeading
              eyebrow="Repair Warranty"
              title="Written warranty on every single job"
              subtitle="Warranty terms are printed on your invoice with the part grade and cover period — nothing depends on remembering what someone said at the counter."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cover.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 0.08}>
                  <div className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success-green/15 text-success-green">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
