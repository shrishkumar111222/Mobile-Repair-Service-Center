import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { site, telLink, waLink } from '@/lib/site';

const steps = [
  {
    icon: 'search',
    title: 'Water Damage Assessment',
    copy: 'Immediate power isolation, corrosion mapping and a photographed board report before any work starts.',
  },
  {
    icon: 'droplet',
    title: 'Ultrasonic Cleaning',
    copy: 'Full teardown and ultrasonic bath in electronics-safe solution to lift salt, sugar and corrosion.',
  },
  {
    icon: 'chip',
    title: 'Board-Level Repairs',
    copy: 'Corroded pads rebuilt, shorted ICs replaced and power rails restored under a stereo microscope.',
  },
  {
    icon: 'database',
    title: 'Data Recovery',
    copy: 'Photos, chats and documents pulled off even when the device will never power on again.',
  },
  {
    icon: 'bolt',
    title: 'Emergency Services',
    copy: 'Priority intake for water-damaged devices — the first six hours decide how much is saveable.',
  },
];

export default function WaterDamage() {
  return (
    <Section tone="deep">
      <div
        className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Emergency · Water Damage"
              align="left"
              title="Dropped Your Device in Water?"
              subtitle="Do not charge it, do not put it in rice. Bring it in within six hours and our board-level lab gives it the best possible chance of full recovery."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-repair-red/30 bg-repair-red/10 p-6">
                <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-red-300">
                  <Icon name="bolt" className="h-5 w-5" /> First 6 hours are critical
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Corrosion keeps spreading long after the device looks dry. Our emergency desk runs{' '}
                  {site.emergencyLine.toLowerCase()} — call ahead and we will prepare the ultrasonic bay
                  before you arrive.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={telLink} className="btn-red">
                    <Icon name="phone" className="h-5 w-5" /> Get Emergency Support
                  </a>
                  <a
                    href={waLink('Emergency! My device has water damage. Please help.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp Now
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 2) * 0.08} direction="left">
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-500/15 text-sky-400">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
