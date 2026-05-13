'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const conversionsLinks = [
  { href: '/conversions/holt',       label: 'HOLT',       sub: 'Compact Adventure' },
  { href: '/conversions/dale',       label: 'DALE',       sub: 'The Everyday Adventurer' },
  { href: '/conversions/fell',       label: 'FELL',       sub: 'The Serious Adventurer' },
  { href: '/conversions/crag',       label: 'CRAG',       sub: 'The Expedition Machine' },
  { href: '/conversions/commission', label: 'COMMISSION', sub: 'Fully Bespoke' },
]

const navLinks = [
  { href: '/builds',      label: 'Builds' },
  { href: '/conversions', label: 'Conversions', hasDropdown: true },
  { href: '/configure',   label: 'Configure' },
  { href: '/systems',     label: 'Systems' },
  { href: '/about',       label: 'About' },
  { href: '/contact',     label: 'Contact' },
]

const mobileLinks = [
  { href: '/builds',               label: 'Builds' },
  { href: '/conversions',          label: 'Conversions' },
  { href: '/conversions/holt',     label: 'HOLT' },
  { href: '/conversions/dale',     label: 'DALE' },
  { href: '/conversions/fell',     label: 'FELL' },
  { href: '/conversions/crag',     label: 'CRAG' },
  { href: '/configure',            label: 'Configure' },
  { href: '/systems',              label: 'Systems' },
  { href: '/about',                label: 'About' },
  { href: '/contact',              label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? 'rgba(25,28,20,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.4s cubic-bezier(0.25,0.1,0.25,1), backdrop-filter 0.4s cubic-bezier(0.25,0.1,0.25,1)',
        }}
      >
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-extrabold text-[13px] tracking-[0.2em] uppercase text-white no-underline"
          >
            ALKOTA
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li key={link.href} className="relative">
                  <button
                    className="flex items-center gap-1 font-body font-medium text-[11px] uppercase tracking-[0.1em] transition-colors duration-250"
                    style={{ color: 'rgba(244,241,236,0.65)' }}
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    onFocus={() => setDropOpen(true)}
                    onBlur={() => setDropOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={12} />
                  </button>

                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setDropOpen(true)}
                        onMouseLeave={() => setDropOpen(false)}
                      >
                        <div
                          className="w-64 border-t-2"
                          style={{
                            background: 'var(--alkota-obsidian)',
                            borderTopColor: 'var(--alkota-forest)',
                            borderRadius: 0,
                          }}
                        >
                          {conversionsLinks.map((cl) => (
                            <Link
                              key={cl.href}
                              href={cl.href}
                              className="block px-5 py-3.5 no-underline group"
                              onClick={() => setDropOpen(false)}
                            >
                              <span className="block font-body font-medium text-[11px] uppercase tracking-[0.08em] text-white/70 group-hover:text-white transition-colors duration-200">
                                {cl.label}
                              </span>
                              <span className="block font-body text-[10px] mt-0.5" style={{ color: 'rgba(244,241,236,0.4)' }}>
                                {cl.sub}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body font-medium text-[11px] uppercase tracking-[0.1em] transition-colors duration-250 no-underline hover:text-white"
                    style={{ color: 'rgba(244,241,236,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/configure"
              className="hidden lg:inline-flex btn btn-solid text-[10px] py-2.5 px-5"
            >
              Configure yours →
            </Link>

            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'var(--alkota-obsidian)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close */}
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-display font-extrabold text-[13px] tracking-[0.2em] uppercase text-white">
                ALKOTA
              </span>
              <button
                className="text-white p-1"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block font-display font-bold py-2 no-underline"
                    style={{
                      fontSize: link.label.length <= 4 ? '28px' : '20px',
                      color: 'rgba(244,241,236,0.85)',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-8 pb-12">
              <Link
                href="/configure"
                className="btn btn-solid w-full justify-center text-center"
                onClick={() => setMobileOpen(false)}
              >
                Configure yours →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
