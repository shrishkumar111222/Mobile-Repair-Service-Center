'use client';

import { useState } from 'react';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { PhoneArt } from './ui/Art';
import { waLink } from '@/lib/site';

const options = [
  {
    grade: 'Original / Service Pack',
    detail: 'Manufacturer service-pack display with original touch layer and true colour calibration.',
    time: '60–90 min',
    warranty: '90-day warranty',
    highlight: true,
  },
  {
    grade: 'OEM Grade A+',
    detail: 'Factory-grade panel matched to original brightness and touch response at a lower cost.',
    time: '45 min',
    warranty: '60-day warranty',
    highlight: false,
  },
  {
    grade: 'Glass-Only Repair',
    detail: 'For cracked glass with a working display — original panel kept, outer glass relaminated.',
    time: '4–6 hrs',
    warranty: '30-day warranty',
    highlight: false,
  },
];

/** Drag-to-reveal comparison of a shattered vs. restored display. */
function CompareSlider() {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy">
      <div className="relative grid h-[26rem] place-items-center bg-deep-blue">
        <div className="h-80 w-44">
          <PhoneArt state="fixed" />
        </div>

        <div
          className="absolute inset-0 grid place-items-center bg-deep-blue"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <div className="h-80 w-44">
            <PhoneArt state="broken" />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-repair-red"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-repair-red text-white shadow-glow">
            <Icon name="code" className="h-5 w-5" />
          </span>
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-red-300">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-success-green">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare the broken and repaired display"
          className="compare-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-center text-xs text-slate-400">
        Drag the handle to see a real screen replacement result
      </p>
    </div>
  );
}

export default function ScreenReplacement() {
  return (
    <Section id="screen-repair" tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Screen Replacement Centre"
          title="Broken Screen? We Can Fix It Today."
          subtitle="Walk in with a shattered display and walk out the same day with a panel that looks, feels and responds exactly like the original."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <CompareSlider />
          </Reveal>

          <div className="space-y-4">
            {options.map((option, i) => (
              <Reveal key={option.grade} delay={i * 0.08}>
                <div
                  className={`glass glass-hover rounded-2xl p-6 ${
                    option.highlight ? 'border-repair-red/40 bg-repair-red/[0.07]' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{option.grade}</h3>
                    {option.highlight ? (
                      <span className="rounded-full bg-repair-red px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                        Most chosen
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{option.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Icon name="clock" className="h-4 w-4 text-repair-red" /> {option.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Icon name="shield" className="h-4 w-4 text-success-green" /> {option.warranty}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <a
                href={waLink('Hi, I want to book a screen repair. My device model is: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red w-full"
              >
                <Icon name="wrench" className="h-5 w-5" /> Book Screen Repair
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
