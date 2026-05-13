'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay: number, y = 32) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80"
        alt="Scottish mountain landscape at dawn"
        fill
        priority
        className="object-cover object-center"
        unoptimized
      />

      {/* Dual overlay */}
      <div className="overlay-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <motion.div {...fadeUp(0.3, 20)}>
          <span
            className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-8"
            style={{ color: 'rgba(244,241,236,0.5)' }}
          >
            Expedition Van Conversions · Built in the UK
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-extrabold text-alkota-chalk leading-none tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: 0.9 }}
          {...fadeUp(0.5, 32)}
        >
          Built for<br className="hidden sm:block" /> the unknown.
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          className="font-body text-[16px] max-w-[480px] mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(244,241,236,0.65)' }}
          {...fadeUp(0.8, 20)}
        >
          Premium off-grid adventure conversions.<br />
          Four layouts. Four platforms. No compromises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUp(1.0, 16)}
        >
          <Link href="/builds" className="btn btn-ghost">
            Explore builds →
          </Link>
          <Link href="/configure" className="btn btn-solid">
            Configure yours →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ color: 'rgba(244,241,236,0.4)' }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.12em]">scroll</span>
        <div className="relative w-px h-10 bg-white/20">
          <motion.div
            className="absolute top-0 left-0 w-px bg-white/60"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  )
}
