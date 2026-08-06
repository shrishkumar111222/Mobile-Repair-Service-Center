'use client';

import { useState } from 'react';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { LabScene, PhoneArt } from './ui/Art';

const cases = [
  {
    device: 'iPhone 14 Pro',
    fault: 'Shattered OLED after a 2m drop',
    fix: 'Service-pack display fitted, True Tone retained',
    time: '52 minutes',
  },
  {
    device: 'MacBook Pro 16"',
    fault: 'Liquid spill, no power',
    fix: 'Ultrasonic clean, PPBUS rail rebuilt, SSD data intact',
    time: '36 hours',
  },
  {
    device: 'Galaxy S22 Ultra',
    fault: 'Charging port torn from board',
    fix: 'Pads rebuilt, new Type-C flex, 25W fast charge restored',
    time: '6 hours',
  },
];

/** Two-panel before/after with an interactive reveal handle. */
function RepairCompare() {
  const [pos, setPos] = useState(45);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10">
      <div className="relative grid h-[24rem] place-items-center bg-deep-blue sm:h-[28rem]">
        <div className="h-72 w-40 sm:h-80 sm:w-44">
          <PhoneArt state="fixed" />
        </div>
        <div
          className="absolute inset-0 grid place-items-center bg-navy"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <div className="h-72 w-40 sm:h-80 sm:w-44">
            <PhoneArt state="broken" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-repair-red text-white">
            <Icon name="code" className="h-5 w-5" />
          </span>
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-navy/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-red-300">
          Before repair
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-navy/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-success-green">
          After repair
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Reveal the repaired device"
          className="compare-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <Section tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before & After Repairs"
          title="Real devices. Real results."
          subtitle="A sample from the last month of jobs on our bench — every one photographed at intake, mid-repair and on collection."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <Reveal direction="right">
            <RepairCompare />
          </Reveal>

          <div className="space-y-4">
            {cases.map((item, i) => (
              <Reveal key={item.device} delay={i * 0.08} direction="left">
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-bold text-white">{item.device}</h3>
                    <span className="shrink-0 rounded-full bg-success-green/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-success-green">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-3 flex items-start gap-2 text-sm text-slate-400">
                    <Icon name="cross" className="mt-0.5 h-4 w-4 shrink-0 text-repair-red" />
                    {item.fault}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-slate-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success-green" />
                    {item.fix}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24} direction="left">
              <div className="glass relative overflow-hidden rounded-2xl">
                <LabScene variant="diagnostics" label="Repair process video walkthrough" />
                <span className="absolute inset-0 grid place-items-center bg-navy/50">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-navy">
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                    </svg>
                  </span>
                </span>
                <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white">
                  Watch a full repair · 3:20
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
