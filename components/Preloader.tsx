'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './ui/Icons';
import { site } from '@/lib/site';

/** Short branded loading screen; never blocks interaction for more than ~1.4s. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[90] grid place-items-center bg-navy"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              animate={{ rotate: [0, -18, 18, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-red-fade shadow-glow"
            >
              <Icon name="wrench" className="h-8 w-8 text-white" />
            </motion.span>
            <div className="text-center">
              <p className="text-lg font-black tracking-tight text-white">{site.name}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Running diagnostics
              </p>
            </div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
                className="h-full bg-red-fade"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
