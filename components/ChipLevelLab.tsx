import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { LabScene } from './ui/Art';
import { waLink } from '@/lib/site';

const capabilities = [
  { icon: 'chip', title: 'Motherboard Repair', copy: 'Schematic-led fault tracing on phone and laptop logic boards.' },
  { icon: 'microscope', title: 'IC Replacement', copy: 'Audio, charging, power and touch ICs replaced and reballed.' },
  { icon: 'wrench', title: 'Micro Soldering', copy: '0201 components and torn pads rebuilt with jumper wire work.' },
  { icon: 'bolt', title: 'Power Issues', copy: 'Dead boards, no-boot and battery-drain rails restored to spec.' },
  { icon: 'fire', title: 'Short Circuit Repair', copy: 'Thermal-camera and freeze-spray short hunting on live rails.' },
  { icon: 'chart', title: 'Advanced Diagnostics', copy: 'DC power analysis, boot-current signatures and JTAG recovery.' },
];

const kit = [
  'Stereo microscope benches',
  'Hot-air & BGA rework stations',
  'Thermal imaging camera',
  'DC power analyser',
  'Ultrasonic cleaning bay',
  'ESD-controlled workstations',
];

export default function ChipLevelLab() {
  return (
    <Section tone="navy">
      <div className="absolute inset-0 bg-grid bg-grid opacity-50" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Chip-Level Repair Lab"
          title="The repairs other shops refuse to attempt"
          subtitle="Most centres replace whole boards. We repair them — component by component — which is faster, cheaper and keeps your data exactly where it is."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.07}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-repair-red/15 text-repair-red">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="left">
            <div className="glass overflow-hidden rounded-3xl">
              <LabScene variant="lab" label="Chip-level repair lab with microscope bench" />
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Lab equipment
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {kit.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-success-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink('Hi, I need chip-level / motherboard repair. Device: ')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red mt-6 w-full"
                >
                  <Icon name="microscope" className="h-5 w-5" /> Book Board-Level Diagnosis
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
