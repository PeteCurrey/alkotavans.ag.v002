'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/shared/RevealOnScroll'
import Badge from '@/components/ui/Badge'

const builds = [
  {
    slug: 'kielder',
    name: 'KIELDER',
    layout: 'CRAG',
    van: 'Iveco Daily 4×4',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    alt: 'Dark forest mountain terrain',
  },
  {
    slug: 'torridon',
    name: 'TORRIDON',
    layout: 'CRAG',
    van: 'Mercedes Sprinter 4×4',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    alt: 'Mountain road with dramatic sky',
  },
  {
    slug: 'pentland',
    name: 'PENTLAND',
    layout: 'FELL',
    van: 'Ford Transit Trail',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=800&q=80',
    alt: 'Coastal cliff road at dusk',
  },
]

export default function BuildsPreview() {
  return (
    <section style={{ background: 'var(--alkota-obsidian)' }} className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="mb-14">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.35)' }}>
              From the Workshop
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-alkota-chalk" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Recent builds.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {builds.map((build, i) => (
            <RevealOnScroll key={build.slug} delay={i * 0.12}>
              <motion.div
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href={`/builds/${build.slug}`} className="block no-underline">
                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <Image
                      src={build.image}
                      alt={build.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      unoptimized
                    />
                    {/* Bottom gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(25,28,20,0.92) 0%, rgba(25,28,20,0.3) 50%, transparent 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="forest">{build.layout}</Badge>
                        <span className="font-mono text-[8px] uppercase tracking-[0.08em]" style={{ color: 'rgba(244,241,236,0.45)' }}>
                          {build.van}
                        </span>
                      </div>
                      <div className="font-display font-extrabold text-[28px] text-alkota-chalk leading-none mb-3">
                        {build.name}
                      </div>
                      <span
                        className="font-body font-medium text-[11px] uppercase tracking-[0.08em] transition-all duration-200 group-hover:underline"
                        style={{ color: 'rgba(244,241,236,0.65)' }}
                      >
                        See the build →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-end mt-10">
          <RevealOnScroll delay={0.3}>
            <Link
              href="/builds"
              className="font-body font-medium text-[12px] uppercase tracking-[0.1em] no-underline transition-colors duration-200 text-white/55 hover:text-white/90"
            >
              View all builds →
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
