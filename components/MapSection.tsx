import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { site } from '@/lib/site';

const info = [
  {
    icon: 'pin',
    title: 'Store Location',
    copy: `${site.addressLine1}, ${site.addressLine2}. Ground floor, lift and ramp access available.`,
  },
  {
    icon: 'truck',
    title: 'Parking',
    copy: 'Free two-wheeler parking at the entrance and paid basement parking for cars inside Tech Plaza.',
  },
  {
    icon: 'search',
    title: 'Nearby Landmarks',
    copy: 'Two minutes from MG Road Metro Station, opposite the central bus stand, beside Sunrise Café.',
  },
  {
    icon: 'headset',
    title: 'Service Area Coverage',
    copy: 'Free pickup and drop across Indiranagar, Koramangala, HSR, Whitefield, Jayanagar and Marathahalli.',
  },
];

export default function MapSection() {
  return (
    <Section tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Find Us"
          title="Two minutes from MG Road Metro"
          subtitle="Walk in any day of the week — or let us collect the device from your door at no extra cost."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <div className="glass overflow-hidden rounded-3xl">
              <iframe
                src={site.mapEmbed}
                title={`Map showing ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full border-0 grayscale-[.25]"
                allowFullScreen
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-5">
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-white">{site.name}</span> · {site.addressLine1}
                </p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red !py-2.5 !text-[13px]"
                >
                  <Icon name="pin" className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {info.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} direction="left">
                <div className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-repair-red/15 text-repair-red">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
