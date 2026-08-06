import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const reasons = [
  { icon: 'award', title: 'Certified Technicians', copy: 'Board-level certified engineers, average nine years at the bench.' },
  { icon: 'shield', title: 'Genuine Parts', copy: 'Original and OEM components with traceable sourcing on every job card.' },
  { icon: 'check', title: 'Repair Warranty', copy: 'Up to 90 days on parts and workmanship, printed on your invoice.' },
  { icon: 'chart', title: 'Transparent Pricing', copy: 'Written quote before we open the device. No revised bills at pickup.' },
  { icon: 'bolt', title: 'Quick Turnaround', copy: 'Most repairs same day; express slots for business-critical devices.' },
  { icon: 'microscope', title: 'Advanced Equipment', copy: 'Microscopes, BGA rework, thermal imaging and ultrasonic cleaning.' },
  { icon: 'search', title: 'Free Diagnostics', copy: 'A full 30-minute inspection at no cost, with no obligation to repair.' },
  { icon: 'headset', title: 'Customer Support', copy: 'Status updates on WhatsApp and a support line that a human answers.' },
];

export default function WhyChooseUs() {
  return (
    <Section tone="navy">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why 5,000+ customers trust us with their devices"
          subtitle="An authorised-service-centre standard of work, with the speed, pricing and personal attention of an independent lab."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 4) * 0.07}>
              <div className="glass glass-hover group h-full rounded-2xl p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-repair-red/15 text-repair-red transition group-hover:bg-red-fade group-hover:text-white">
                  <Icon name={reason.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{reason.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
