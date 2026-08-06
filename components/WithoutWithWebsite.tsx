import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const without = [
  'Dependence on walk-in customers',
  'Missed repair leads every evening',
  'No online trust before the first visit',
  'Hard to showcase real repair expertise',
  'Low visibility in local search results',
];

const withSite = [
  'Generate repair leads 24/7',
  'Receive WhatsApp enquiries directly',
  'Showcase repair expertise with proof',
  'Build customer trust before they arrive',
  'Increase local search visibility',
  'Grow daily revenue predictably',
];

export default function WithoutWithWebsite() {
  return (
    <Section tone="navy">
      <div className="container-x">
        <SectionHeading
          eyebrow="For Repair Shop Owners"
          title="The difference a proper website makes"
          subtitle="This demo is what your own service centre could look like online. Same shop, same technicians — a completely different flow of customers."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="h-full rounded-3xl border border-white/10 bg-deep-blue/60 p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-600/25 text-slate-400">
                  <Icon name="cross" className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-black text-slate-300">Without a website</h3>
              </div>
              <ul className="mt-7 space-y-4">
                {without.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <Icon name="cross" className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-3xl border border-success-green/30 bg-deep-blue p-8">
              <span
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-success-green/20 blur-[80px]"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-success-green/20 text-success-green">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-black text-white">With this website</h3>
              </div>
              <ul className="relative mt-7 space-y-4">
                {withSite.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-200">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
