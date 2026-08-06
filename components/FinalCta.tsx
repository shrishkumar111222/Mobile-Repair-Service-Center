import Icon from './ui/Icons';
import Reveal from './ui/Reveal';
import { site, telLink, waLink } from '@/lib/site';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-red py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid bg-grid opacity-30" aria-hidden="true" />
      <div className="container-x relative text-center">
        <Reveal>
          <span className="eyebrow border-white/30 bg-white/10 text-white">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            Website demo from {site.demoPrice}
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turn Your Repair Shop Into a Lead-Generating Service Brand
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Showcase your expertise, attract customers searching for repairs, build trust through reviews and
            warranties, and generate repair bookings every day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#estimator" className="btn bg-white text-navy hover:brightness-95">
              <Icon name="wrench" className="h-5 w-5 text-repair-red" /> Book Repair
            </a>
            <a href={telLink} className="btn border border-white/40 text-white hover:bg-white/10">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a
              href={waLink('Hi, I need WhatsApp support for a repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp Support
            </a>
            <a
              href={waLink(
                `Hi! I run a repair business and I want a website like this demo. Please share the ${site.demoPrice} package details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-navy text-white hover:brightness-125"
            >
              <Icon name="sparkle" className="h-5 w-5 text-amber-400" /> Request Free Demo
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['24/7', 'Lead capture'],
              ['10 min', 'Reply time'],
              ['4.9★', 'Review rating'],
              ['95+', 'PageSpeed score'],
            ].map(([big, small]) => (
              <div key={small} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur">
                <p className="text-2xl font-black text-white">{big}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/70">{small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
