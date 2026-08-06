'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './ui/Icons';
import { site, telLink, waLink } from '@/lib/site';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop / tablet rail */}
      <div className="pointer-events-none fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {visible ? (
            <motion.a
              key="demo"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              href={waLink(
                `Hi! I run a repair business and I want a website like this demo. Please share details about the ${site.demoPrice} package.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-navy shadow-card transition hover:-translate-y-0.5"
            >
              <Icon name="sparkle" className="h-4 w-4 text-repair-red" />
              Request FREE Website Demo
            </motion.a>
          ) : null}
        </AnimatePresence>

        <a
          href={telLink}
          aria-label="Call the service centre"
          className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-red-fade text-white shadow-glow transition hover:scale-105"
        >
          <Icon name="phone" className="h-6 w-6" />
        </a>

        <a
          href={waLink('Hi, I want to book a device repair.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto relative grid h-16 w-16 place-items-center rounded-full bg-success-green text-navy shadow-card transition hover:scale-105"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-success-green" />
          <Icon name="whatsapp" className="relative h-8 w-8" />
        </a>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <AnimatePresence>
          {visible ? (
            <motion.a
              key="m-demo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              href={waLink(
                `Hi! I want a repair-shop website like this demo. Please share the ${site.demoPrice} package details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 mb-2 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-black text-navy shadow-card"
            >
              <Icon name="sparkle" className="h-4 w-4 text-repair-red" />
              Request FREE Website Demo · {site.demoPrice}
            </motion.a>
          ) : null}
        </AnimatePresence>

        <div className="grid grid-cols-3 border-t border-white/10 bg-navy/95 backdrop-blur-xl">
          <a href={telLink} className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold text-white">
            <Icon name="phone" className="h-5 w-5 text-repair-red" />
            Call Now
          </a>
          <a
            href={waLink('Hi, I need a repair quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-white/10 py-3 text-[11px] font-bold text-white"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-success-green" />
            WhatsApp
          </a>
          <a href="#estimator" className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold text-white">
            <Icon name="wrench" className="h-5 w-5 text-amber-400" />
            Book Repair
          </a>
        </div>
      </div>
    </>
  );
}
