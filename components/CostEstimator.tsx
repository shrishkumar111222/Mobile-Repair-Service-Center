'use client';

import { useMemo, useState } from 'react';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { site, telLink, waLink } from '@/lib/site';

type Repair = { id: string; label: string; icon: string; base: [number, number]; eta: string };

const deviceTypes = [
  { id: 'smartphone', label: 'Smartphone', icon: 'mobile', factor: 1 },
  { id: 'tablet', label: 'Tablet', icon: 'tablet', factor: 1.35 },
  { id: 'laptop', label: 'Laptop', icon: 'laptop', factor: 1.7 },
  { id: 'macbook', label: 'MacBook', icon: 'apple', factor: 2.4 },
];

const repairs: Repair[] = [
  { id: 'screen', label: 'Screen Replacement', icon: 'mobile', base: [2200, 6500], eta: '45–90 min' },
  { id: 'battery', label: 'Battery Replacement', icon: 'battery', base: [1200, 2800], eta: '30 min' },
  { id: 'port', label: 'Charging Port Repair', icon: 'plug', base: [900, 2200], eta: '2–4 hrs' },
  { id: 'general', label: 'General / Laptop Service', icon: 'wrench', base: [800, 2500], eta: 'Same day' },
  { id: 'board', label: 'Motherboard / Chip-Level', icon: 'chip', base: [2500, 8000], eta: '24–72 hrs' },
];

const brandTiers = [
  { id: 'value', label: 'Xiaomi · Vivo · Oppo · Realme', factor: 0.85 },
  { id: 'mid', label: 'Samsung · OnePlus · Nothing · Moto', factor: 1 },
  { id: 'premium', label: 'Apple · Flagship / Foldable', factor: 1.45 },
];

/** Rounds to the nearest ₹50 so the range reads like a real counter quote. */
const inr = (n: number) => `₹${(Math.round(n / 50) * 50).toLocaleString('en-IN')}`;

export default function CostEstimator() {
  const [device, setDevice] = useState(deviceTypes[0].id);
  const [repair, setRepair] = useState(repairs[0].id);
  const [tier, setTier] = useState(brandTiers[1].id);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');

  const estimate = useMemo(() => {
    const d = deviceTypes.find((x) => x.id === device)!;
    const r = repairs.find((x) => x.id === repair)!;
    const t = brandTiers.find((x) => x.id === tier)!;
    const multiplier = d.factor * t.factor;
    return {
      low: r.base[0] * multiplier,
      high: r.base[1] * multiplier,
      eta: r.eta,
      repairLabel: r.label,
      deviceLabel: d.label,
    };
  }, [device, repair, tier]);

  const message = [
    `Hi ${site.name}, I would like a repair quote.`,
    name ? `Name: ${name}` : null,
    `Device: ${estimate.deviceLabel}${model ? ` (${model})` : ''}`,
    `Service: ${estimate.repairLabel}`,
    `Estimator showed: ${inr(estimate.low)} – ${inr(estimate.high)}`,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <Section id="estimator" tone="deep">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Repair Cost Estimator"
          title="Know the price before you leave home"
          subtitle="Pick your device and the fault to see a realistic range in seconds. The final quote is always confirmed free of charge after our 30-minute diagnosis."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <fieldset>
                <legend className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  1 · Device type
                </legend>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {deviceTypes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDevice(item.id)}
                      aria-pressed={device === item.id}
                      className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-xs font-bold transition ${
                        device === item.id
                          ? 'border-repair-red bg-repair-red/15 text-white'
                          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <Icon name={item.icon} className="h-6 w-6" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  2 · What needs fixing
                </legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {repairs.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRepair(item.id)}
                      aria-pressed={repair === item.id}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition ${
                        repair === item.id
                          ? 'border-repair-red bg-repair-red/15 text-white'
                          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <Icon name={item.icon} className="h-5 w-5 shrink-0" />
                      <span>
                        {item.label}
                        <span className="block text-[11px] font-medium text-slate-500">{item.eta}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  3 · Brand tier
                </legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {brandTiers.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTier(item.id)}
                      aria-pressed={tier === item.id}
                      className={`rounded-xl border px-4 py-3 text-xs font-semibold transition ${
                        tier === item.id
                          ? 'border-repair-red bg-repair-red/15 text-white'
                          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Your name</span>
                  <input
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Exact model</span>
                  <input
                    className="field"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. iPhone 13 / Dell XPS 15"
                  />
                </label>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="sticky top-32 rounded-3xl bg-red-fade p-7 shadow-glow">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Estimated repair cost
              </p>
              <p className="mt-3 text-4xl font-black leading-none text-white">
                {inr(estimate.low)}
                <span className="mx-2 text-white/60">–</span>
                {inr(estimate.high)}
              </p>
              <p className="mt-3 text-sm text-white/85">
                {estimate.deviceLabel} · {estimate.repairLabel}
              </p>

              <dl className="mt-6 space-y-2.5 border-t border-white/25 pt-5 text-sm text-white/90">
                <div className="flex items-center justify-between">
                  <dt>Turnaround</dt>
                  <dd className="font-bold">{estimate.eta}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Diagnosis</dt>
                  <dd className="font-bold">Free</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Warranty</dt>
                  <dd className="font-bold">Up to 90 days</dd>
                </div>
              </dl>

              <div className="mt-6 grid gap-2.5">
                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full bg-white text-navy hover:brightness-95"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-success-green" /> Send Quote on WhatsApp
                </a>
                <a href={telLink} className="btn w-full border border-white/40 text-white hover:bg-white/10">
                  <Icon name="phone" className="h-5 w-5" /> Call {site.phoneDisplay}
                </a>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-white/70">
                Indicative range only. Your confirmed price is fixed in writing after the free diagnosis and
                never changes at collection.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
