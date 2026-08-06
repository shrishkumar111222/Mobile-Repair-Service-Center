import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { waLink } from '@/lib/site';

const services = [
  {
    icon: 'mobile',
    title: 'Mobile Repair',
    copy: 'Screens, batteries, charging ports, cameras and software faults for every major smartphone brand.',
    time: '30–90 min',
  },
  {
    icon: 'laptop',
    title: 'Laptop Repair',
    copy: 'Display panels, keyboards, hinges, thermal servicing, SSD and RAM upgrades with data intact.',
    time: 'Same day',
  },
  {
    icon: 'tablet',
    title: 'Tablet Repair',
    copy: 'iPad and Android tablet glass, digitiser, battery and charging board replacement.',
    time: '24 hrs',
  },
  {
    icon: 'apple',
    title: 'MacBook Repair',
    copy: 'Retina display, butterfly and magic keyboard, logic board and liquid-damage restoration.',
    time: '24–48 hrs',
  },
  {
    icon: 'gamepad',
    title: 'Gaming Console Repair',
    copy: 'PlayStation, Xbox and handheld consoles — HDMI ports, drift sticks, overheating and drives.',
    time: '48 hrs',
  },
  {
    icon: 'chip',
    title: 'Motherboard Repair',
    copy: 'Track-level fault finding, power-rail rebuilding and connector replacement under microscope.',
    time: '48 hrs',
  },
  {
    icon: 'microscope',
    title: 'Chip-Level Repair',
    copy: 'BGA reballing, IC replacement and micro-soldering by technicians with a decade at the bench.',
    time: '48–72 hrs',
  },
  {
    icon: 'database',
    title: 'Data Recovery',
    copy: 'Dead phones, failed SSDs, corrupted drives — recovered in a clean, controlled environment.',
    time: '2–5 days',
  },
];

export default function Services() {
  return (
    <Section id="services" tone="navy">
      <div className="container-x">
        <SectionHeading
          eyebrow="Repair Services"
          title="Every device, one trusted service centre"
          subtitle="From a cracked screen to a dead motherboard, our lab is equipped for consumer repairs and advanced board-level work under one roof."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.07}>
              <a
                href={waLink(`Hi, I need help with: ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-repair-red/15 text-repair-red transition group-hover:bg-red-fade group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{service.copy}</p>
                <span className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-500">Turnaround</span>
                  <span className="text-success-green">{service.time}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
