import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { site, telLink, waLink } from '@/lib/site';

const services = [
  { icon: 'bolt', title: 'Emergency Repairs', copy: 'Out-of-hours intake for devices that cannot wait until morning.' },
  { icon: 'chart', title: 'Business Device Support', copy: 'Annual contracts for offices, clinics and retail fleets.' },
  { icon: 'database', title: 'Data Recovery', copy: 'Priority lab slot for dead devices holding critical files.' },
  { icon: 'clock', title: 'Priority Service', copy: 'Your job jumps the queue and goes straight to a senior engineer.' },
  { icon: 'wrench', title: 'Fast-Track Repairs', copy: 'Two-hour completion on stocked parts, guaranteed in writing.' },
];

export default function Emergency() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,.28),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="rounded-3xl border border-repair-red/30 bg-deep-blue/80 p-8 backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-repair-red" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-repair-red" />
                </span>
                {site.emergencyLine}
              </span>
              <h2 className="mt-5 h-display">Device down and you cannot wait?</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                Our emergency desk stays reachable after hours for water damage, dead business laptops and
                data loss. Call first — we will tell you exactly what to do before you even reach us.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={telLink} className="btn-red">
                  <Icon name="phone" className="h-5 w-5" /> Call Emergency Support
                </a>
                <a
                  href={waLink('Emergency repair needed. Device and issue: ')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Icon name="whatsapp" className="h-5 w-5" /> Emergency WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 2) * 0.07} direction="left">
                  <div className="glass glass-hover h-full rounded-2xl p-5">
                    <Icon name={service.icon} className="h-5 w-5 text-repair-red" />
                    <h3 className="mt-3 text-sm font-bold text-white">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{service.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
