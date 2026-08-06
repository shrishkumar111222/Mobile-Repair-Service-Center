'use client';

import { useState, type FormEvent } from 'react';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { site, telLink, waLink } from '@/lib/site';

const services = [
  'Mobile Screen Replacement',
  'Battery Replacement',
  'Charging Port Repair',
  'Laptop / MacBook Repair',
  'Motherboard / Chip-Level Repair',
  'Water Damage Recovery',
  'Data Recovery',
  'Something else',
];

const details = [
  { icon: 'phone', label: 'Phone', value: site.phoneDisplay, href: telLink },
  { icon: 'whatsapp', label: 'WhatsApp', value: site.phoneDisplay, href: waLink('Hi, I need a repair.') },
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Store Address', value: `${site.addressLine1}, ${site.addressLine2}`, href: site.mapLink },
  { icon: 'clock', label: 'Business Hours', value: site.hours, href: null },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * Static hosting means no server to POST to, so the enquiry is handed to
   * WhatsApp — which is where repair customers reply fastest anyway.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `New repair enquiry from the website`,
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Device: ${data.get('device')}`,
      `Service: ${data.get('service')}`,
      `Details: ${data.get('message') || '—'}`,
    ].join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <Section id="contact" tone="navy">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Contact & Booking"
          title="Book a free diagnosis in under a minute"
          subtitle="Send the form, call us, or drop a WhatsApp message. Enquiries received during business hours get a reply within 10 minutes."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <ul className="space-y-5">
                {details.map((item) => {
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-repair-red/15 text-repair-red">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-500">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block break-words text-sm font-semibold text-white">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 transition hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7 grid gap-2.5 border-t border-white/10 pt-6">
                <a href={telLink} className="btn-red w-full">
                  <Icon name="phone" className="h-5 w-5" /> Call Now
                </a>
                <a
                  href={waLink('Hi, I want to book a free diagnosis.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green w-full"
                >
                  <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp Support
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-8">
              <h3 className="text-lg font-bold text-white">Repair enquiry form</h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Free diagnosis · No obligation to repair · Reply within 10 minutes
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Full name *</span>
                  <input name="name" required autoComplete="name" className="field" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Phone number *</span>
                  <input
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    className="field"
                    placeholder="+91 00000 00000"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Device & model *</span>
                  <input name="device" required className="field" placeholder="e.g. iPhone 13 Pro" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Service needed *</span>
                  <select name="service" required defaultValue={services[0]} className="field">
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-navy">
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">
                    Describe the problem
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="field resize-none"
                    placeholder="What happened, and when did it start?"
                  />
                </label>
              </div>

              <button type="submit" className="btn-red mt-6 w-full">
                <Icon name="wrench" className="h-5 w-5" /> Book Free Diagnosis
              </button>

              {sent ? (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-success-green/40 bg-success-green/10 px-4 py-3 text-sm text-success-green"
                >
                  <Icon name="check" className="h-5 w-5 shrink-0" />
                  Enquiry ready in WhatsApp — hit send there and our team will confirm your slot.
                </p>
              ) : (
                <p className="mt-4 text-center text-[11px] text-slate-500">
                  Your details open in WhatsApp so a technician can reply immediately. We never share your
                  number.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
