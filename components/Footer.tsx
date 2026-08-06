'use client';

import { useState, type FormEvent } from 'react';
import Icon from './ui/Icons';
import { navLinks, site, telLink, waLink } from '@/lib/site';

const serviceLinks = [
  ['Mobile Repair', '#mobile-repair'],
  ['Laptop Repair', '#laptop-repair'],
  ['Screen Replacement', '#screen-repair'],
  ['Chip-Level Repair', '#services'],
  ['Data Recovery', '#services'],
  ['Repair Cost Estimator', '#estimator'],
];

const quickLinks = [
  ['Repair Services', '#services'],
  ['Warranty', '#parts'],
  ['Reviews', '#reviews'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer className="relative border-t border-white/10 bg-navy pb-28 pt-16 md:pb-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-fade shadow-glow">
                <Icon name="wrench" className="h-6 w-6 text-white" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-black tracking-tight text-white">{site.name}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A board-level repair lab for smartphones, laptops, tablets and consoles — genuine parts,
              certified technicians, transparent pricing and warranty on every job.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={telLink} className="flex items-center gap-2.5 text-slate-300 transition hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-repair-red" /> {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-slate-300 transition hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 text-repair-red" /> {site.email}
              </a>
              <p className="flex items-start gap-2.5 text-slate-400">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-repair-red" />
                {site.addressLine1}, {site.addressLine2}
              </p>
              <p className="flex items-start gap-2.5 text-slate-400">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-repair-red" />
                {site.hours}
              </p>
            </div>
          </div>

          <nav aria-label="Repair services">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Repair Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 transition hover:text-repair-red">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 transition hover:text-repair-red">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Newsletter</h2>
            <p className="mt-5 text-sm text-slate-400">
              Device care tips, seasonal offers and new service announcements. One email a month, no spam.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="field flex-1"
              />
              <button type="submit" className="btn-red !px-4" aria-label="Subscribe">
                <Icon name="arrowRight" className="h-5 w-5" />
              </button>
            </form>
            {subscribed ? (
              <p role="status" className="mt-3 flex items-center gap-2 text-xs text-success-green">
                <Icon name="check" className="h-4 w-4" /> Thanks — you are on the list.
              </p>
            ) : null}

            <h2 className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Follow Us</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-repair-red/50 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-500 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Demo website for repair businesses ·{' '}
            <a
              href={waLink('Hi! I want a repair-shop website like this demo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-repair-red hover:underline"
            >
              Get yours from {site.demoPrice}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
