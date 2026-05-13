'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const layouts = [
  {
    name: 'HOLT',
    tagline: 'Compact Adventure',
    description: 'The van that fits everywhere and goes anywhere. Built for solo explorers and couples who treat the weekend like an expedition.',
    spec: '2 berths · SWB/MWB · From £42,000 conversion',
    href: '/conversions/holt',
  },
  {
    name: 'DALE',
    tagline: 'The Everyday Adventurer',
    description: 'Everything you need. Nothing you don\'t. The most versatile Alkota — equally at home on a Scottish mountain track or a French river road.',
    spec: '2 berths · MWB · From £55,000 conversion',
    href: '/conversions/dale',
  },
  {
    name: 'FELL',
    tagline: 'The Serious Adventurer',
    description: 'More space, more capability, more places. The FELL is for those who need a full wet room, a proper kitchen, and a van that keeps up with their ambitions.',
    spec: '2–4 berths · LWB · From £70,000 conversion',
    href: '/conversions/fell',
  },
  {
    name: 'CRAG',
    tagline: 'The Expedition Machine',
    description: 'No road required. The CRAG is built on 4WD and AWD platforms, with lifted suspension, armour, onboard air, and systems that run for weeks without resupply.',
    spec: '2–4 berths · 4WD · From £88,000 conversion',
    href: '/conversions/crag',
  },
]

export default function LayoutRange() {
  return (
    <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="mb-16">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-5" style={{ color: 'var(--alkota-stone)' }}>
              The Alkota Range
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              className="font-display font-bold"
              style={{ color: 'var(--alkota-obsidian)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}
            >
              Four layouts.<br />Every adventure.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Layout cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[rgba(25,28,20,0.08)]">
          {layouts.map((layout, i) => (
            <RevealOnScroll key={layout.name} delay={i * 0.1}>
              <motion.div
                className="group relative flex flex-col p-7 border-r border-b border-[rgba(25,28,20,0.08)] last:border-r-0 md:last:border-r-0 lg:last:border-r-0 min-h-[380px] bg-white hover:border-alkota-forest"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transition: 'border-color 0.25s, transform 0.3s' }}
              >
                {/* Layout name */}
                <div
                  className="font-display font-extrabold text-[52px] uppercase leading-none tracking-[-0.01em] mb-4"
                  style={{ color: 'var(--alkota-forest)' }}
                >
                  {layout.name}
                </div>

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(25,28,20,0.08)' }} />

                {/* Tagline */}
                <div className="font-body text-[13px] mb-3" style={{ color: 'var(--alkota-obsidian)' }}>
                  {layout.tagline}
                </div>

                {/* Description */}
                <p className="font-body text-[12px] leading-relaxed mb-4" style={{ color: 'var(--alkota-stone)' }}>
                  {layout.description}
                </p>

                {/* Spec */}
                <div className="font-mono text-[9px] mb-6" style={{ color: 'var(--alkota-stone)' }}>
                  {layout.spec}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA */}
                <Link
                  href={layout.href}
                  className="font-body font-medium text-[11px] no-underline group/link inline-flex items-center gap-1.5 transition-colors duration-200"
                  style={{ color: 'var(--alkota-forest)' }}
                >
                  <span>Explore {layout.name}</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
