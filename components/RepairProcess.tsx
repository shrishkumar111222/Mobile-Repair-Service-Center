import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const steps = [
  { icon: 'mobile', title: 'Book Repair', copy: 'Walk in, call, or send your device details on WhatsApp in under a minute.' },
  { icon: 'search', title: 'Free Diagnosis', copy: 'A 30-minute technical inspection with a photographed fault report.' },
  { icon: 'chart', title: 'Repair Quote', copy: 'A written, itemised quote. Nothing is opened until you approve it.' },
  { icon: 'wrench', title: 'Expert Repair', copy: 'Certified technicians work on ESD-safe benches with genuine parts.' },
  { icon: 'shield', title: 'Quality Testing', copy: 'A 21-point functional test covering touch, audio, camera and charging.' },
  { icon: 'check', title: 'Device Ready', copy: 'Collected or delivered to your door with warranty printed on the invoice.' },
];

export default function RepairProcess() {
  return (
    <Section tone="navy">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Repair Process"
          title="Six transparent steps, zero surprises"
          subtitle="You always know where your device is, what it needs and exactly what it will cost — before a single screw is removed."
        />

        <div className="relative mt-16">
          {/* Spine — vertical on mobile, horizontal from lg up */}
          <div
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-repair-red via-white/20 to-transparent lg:left-0 lg:top-[38px] lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-6 lg:gap-5">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.1}>
                  <div className="flex items-start gap-5 lg:block">
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-navy text-repair-red shadow-card lg:mx-auto">
                      <Icon name={step.icon} className="h-6 w-6" />
                      <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-red-fade text-[11px] font-black text-white">
                        {i + 1}
                      </span>
                    </span>
                    <div className="lg:mt-5 lg:text-center">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.copy}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
