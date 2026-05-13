'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const stages = [
  'Platform', 'Suspension', 'Bumpers', 'Lighting', 'Roof Rack', 'Ladder',
  'Wheels & Steps', 'Side Storage', 'Recovery & Air', 'Electrical',
  'Water', 'Climate', 'Bed & Garage', 'Kitchen', 'Audio', 'Interior Finish',
]

export default function ConfiguratorCTA() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80"
        alt="Dramatic mountain terrain"
        fill
        className="object-cover object-center"
        unoptimized
      />
      <div className="overlay-hero" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.4)' }}>
            The Alkota Builder
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <h2
            className="font-display font-extrabold text-alkota-chalk leading-none tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Sixteen decisions.<br />One extraordinary van.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <p className="font-body text-[15px] max-w-[500px] mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(244,241,236,0.6)' }}>
            Use our configurator to spec every element of your build — from suspension and lighting to electrical systems and interior finish. Get an accurate price estimate before you call us.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/configure" className="btn btn-solid">
              Start configuring →
            </Link>
            <Link href="/process" className="btn btn-ghost">
              How it works
            </Link>
          </div>
        </RevealOnScroll>

        {/* Stages strip */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {stages.map((stage, i) => (
            <motion.span
              key={stage}
              className="font-mono text-[8px] tracking-[0.08em]"
              style={{ color: 'rgba(244,241,236,0.25)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              {stage}{i < stages.length - 1 ? ' ·' : ''}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
