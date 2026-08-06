import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import { LabScene } from './ui/Art';

const tiles = [
  { variant: 'lab', title: 'Chip-Level Repair Lab', copy: 'Microscope benches, hot-air rework and ESD-safe matting.' },
  { variant: 'team', title: 'Technician Team', copy: 'Nine board-level engineers across two shifts.' },
  { variant: 'desk', title: 'Customer Desk', copy: 'Job cards raised in front of you, with photographed intake.' },
  { variant: 'diagnostics', title: 'Diagnostic Equipment', copy: 'DC analysers, thermal imaging and battery testers.' },
  { variant: 'station', title: 'Repair Stations', copy: 'Six dedicated bays for mobile, laptop and console work.' },
  { variant: 'storefront', title: 'Storefront', copy: 'Ground-floor access on MG Road with free parking.' },
];

export default function Gallery() {
  return (
    <Section id="gallery" tone="navy">
      <div className="container-x">
        <SectionHeading
          eyebrow="Store & Repair Lab"
          title="See exactly where your device will be worked on"
          subtitle="No back rooms and no outsourcing. Every repair happens on our own benches, and you are welcome to watch through the lab window."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.variant} delay={(i % 3) * 0.08}>
              <figure className="glass group h-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-repair-red/50">
                <div className="overflow-hidden">
                  <div className="transition duration-500 group-hover:scale-105">
                    <LabScene variant={tile.variant} label={tile.title} />
                  </div>
                </div>
                <figcaption className="p-5">
                  <h3 className="text-base font-bold text-white">{tile.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{tile.copy}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
