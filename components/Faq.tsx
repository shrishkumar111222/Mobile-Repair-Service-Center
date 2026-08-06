'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';
import { waLink } from '@/lib/site';

const faqs = [
  {
    q: 'How long do repairs take?',
    a: 'Screen and battery replacements are usually done in 30 to 90 minutes while you wait. Charging ports and general laptop servicing are same-day. Chip-level board repair and water damage recovery typically take 24 to 72 hours, because the board needs cleaning, repair and a soak test before we hand it back.',
  },
  {
    q: 'Do you use genuine parts?',
    a: 'Yes. We offer manufacturer service-pack parts as the default and clearly-labelled OEM Grade A+ alternatives when you want a lower price. You see the part and its packaging before it is fitted, the grade is written on your job card, and the old component goes home with you.',
  },
  {
    q: 'Do you provide repair warranties?',
    a: 'Every repair carries a minimum 30-day warranty on parts and workmanship. Screen, battery and board-level replacements are covered for 90 days. The cover period is printed on your invoice — if the same fault returns within it, we re-repair free of charge.',
  },
  {
    q: 'Can I get a quote on WhatsApp?',
    a: 'Absolutely. Send us your device model and a short description or photo of the issue and you will normally have a written estimate within 10 minutes during business hours. The estimate is confirmed after the free in-store diagnosis.',
  },
  {
    q: 'Do you offer doorstep pickup?',
    a: 'Yes — free pickup and drop within the city for most repairs. Outside our radius we arrange an insured courier. You get WhatsApp updates at intake, quote approval, repair completion and dispatch.',
  },
  {
    q: 'Can data be recovered?',
    a: 'In most cases, yes. We recover data from dead phones, water-damaged boards, failed SSDs and corrupted hard drives. Board-level recovery is done in our own lab, so your device never leaves the premises, and we quote only after confirming what is recoverable.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything customers ask before they hand over a device"
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className={`glass overflow-hidden rounded-2xl transition ${isOpen ? 'border-repair-red/40' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-bold text-white">{faq.q}</span>
                      <Icon
                        name="chevronDown"
                        className={`h-5 w-5 shrink-0 text-repair-red transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.2}>
            <div className="glass mt-8 flex flex-col items-center gap-4 rounded-2xl p-7 text-center sm:flex-row sm:text-left">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-success-green/15 text-success-green">
                <Icon name="whatsapp" className="h-6 w-6" />
              </span>
              <p className="flex-1 text-sm text-slate-300">
                <span className="font-bold text-white">Still have a question?</span> Message us on WhatsApp —
                a technician, not a bot, will answer.
              </p>
              <a
                href={waLink('Hi, I have a question about a repair.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green shrink-0"
              >
                Ask a Technician
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
