'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './ui/Icons';
import { navLinks, site, telLink, waLink } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item whose section is currently in the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden border-b border-white/10 bg-navy/95 text-[13px] text-slate-300 backdrop-blur lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={telLink} className="flex items-center gap-2 transition hover:text-white">
              <Icon name="phone" className="h-4 w-4 text-repair-red" />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink('Hi, I need help with a device repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4 text-success-green" />
              WhatsApp Support
            </a>
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-slate-400" />
              {site.hours}
            </span>
          </div>
          <a
            href={telLink}
            className="flex items-center gap-2 rounded-full bg-repair-red/15 px-3 py-1 font-semibold text-red-300 transition hover:bg-repair-red/25"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-repair-red" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-repair-red" />
            </span>
            {site.emergencyLine}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-navy/90 py-2.5 shadow-card backdrop-blur-xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-fade shadow-glow">
              <Icon name="wrench" className="h-6 w-6 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-base font-black tracking-tight text-white">
                {site.name}
              </span>
              <span className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block xl:hidden 2xl:block">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold transition ${
                  active === link.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="#estimator" className="btn-red !px-4 !py-2.5 !text-[13px]">
              <Icon name="wrench" className="h-4 w-4" /> Book Repair
            </a>
            <a href={telLink} className="btn-ghost !px-4 !py-2.5 !text-[13px]">
              <Icon name="phone" className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waLink('Hi, I would like WhatsApp support for my device.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green !px-4 !py-2.5 !text-[13px]"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white xl:hidden"
          >
            <Icon name={open ? 'cross' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-white/10 bg-navy/98 px-5 pb-8 pt-4 backdrop-blur-xl xl:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2">
              <a href="#estimator" onClick={() => setOpen(false)} className="btn-red w-full">
                <Icon name="wrench" className="h-4 w-4" /> Book Repair
              </a>
              <a href={telLink} className="btn-ghost w-full">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phoneDisplay}
              </a>
              <a
                href={waLink('Hi, I need a repair quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green w-full"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Support
              </a>
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">{site.hours}</p>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
