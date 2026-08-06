'use client';

import { motion } from 'framer-motion';
import Icon from './ui/Icons';
import { PhoneArt } from './ui/Art';
import { site, telLink, waLink } from '@/lib/site';

const trustPoints = [
  { icon: 'bolt', label: 'Same-Day Repairs' },
  { icon: 'shield', label: 'Genuine Parts' },
  { icon: 'award', label: 'Certified Technicians' },
  { icon: 'check', label: 'Warranty on Repairs' },
  { icon: 'chart', label: '10,000+ Devices Fixed' },
];

const liveTicker = [
  'iPhone 15 Pro — screen replaced in 42 min',
  'MacBook Air M2 — liquid damage recovered',
  'Galaxy S23 — battery replaced, 100% health',
  'Dell XPS 15 — motherboard IC re-soldered',
  'OnePlus 12 — charging port rebuilt',
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy pb-20 pt-32 lg:pb-28 lg:pt-44">
      {/* Ambient technical background */}
      <div className="absolute inset-0 -z-10 bg-grid bg-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute -left-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-repair-red/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-repair-red" />
            Authorized-grade repair lab · {site.hoursShort}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl"
          >
            Fast Repairs.{' '}
            <span className="bg-gradient-to-r from-repair-red to-orange-400 bg-clip-text text-transparent">
              Genuine Parts.
            </span>{' '}
            Trusted Service.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Expert mobile, laptop and electronics repair services with genuine replacement parts,
            skilled technicians, transparent pricing and quick turnaround times.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#estimator" className="btn-red">
              <Icon name="wrench" className="h-5 w-5" /> Book Repair
            </a>
            <a href={telLink} className="btn-ghost">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a
              href={waLink('Hi, I need a repair quote for my device.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp Support
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Icon name={point.icon} className="h-4 w-4 text-success-green" />
                {point.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Device visual + live repair board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass relative rounded-3xl p-6 shadow-card">
            <div className="mx-auto h-80 w-44 animate-float">
              <PhoneArt state="fixed" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-navy/70 p-4">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Live repair board
                <span className="flex items-center gap-1.5 text-success-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-success-green" /> Active
                </span>
              </div>
              <div className="mt-3 h-16 overflow-hidden">
                <motion.ul
                  animate={{ y: ['0%', '-80%'] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="space-y-3"
                >
                  {[...liveTicker, ...liveTicker].map((item, i) => (
                    <li key={`${item}-${i}`} className="flex items-center gap-2 text-[13px] text-slate-300">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-success-green" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rounded-2xl border border-white/10 bg-navy/90 px-4 py-3 shadow-card backdrop-blur sm:block">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Diagnosis</p>
            <p className="text-lg font-black text-success-green">FREE · 30 min</p>
          </div>

          <div className="absolute -right-4 top-40 hidden rounded-2xl border border-white/10 bg-navy/90 px-4 py-3 shadow-card backdrop-blur sm:block">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Warranty</p>
            <p className="text-lg font-black text-white">Up to 90 Days</p>
          </div>
        </motion.div>
      </div>

      {/* Website-price badge for the demo pitch */}
      <div className="container-x mt-14">
        <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 sm:flex-row">
          <p className="text-sm text-slate-300">
            <span className="font-black text-white">Own a repair shop?</span> A website like this one starts
            from <span className="font-black text-repair-red">{site.demoPrice}</span> — built to bring in
            repair leads every single day.
          </p>
          <a
            href={waLink('Hi! I want a repair-shop website like this demo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red shrink-0 !py-3"
          >
            <Icon name="sparkle" className="h-4 w-4" /> Request Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
