'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const builds = [
  {
    slug: 'kielder',
    name: 'KIELDER',
    layout: 'CRAG',
    van: 'Iveco Daily 4×4 · 70C · LWB',
    wrap: 'Alkota Forest Green',
    descriptor: 'Our most capable build. Lifted, armoured, and equipped for the places no other van can reach.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=85',
    alt: 'Mountain terrain at dusk',
    specs: [
      { label: 'Suspension', value: 'Van Compass Expedition' },
      { label: 'Lighting', value: 'Lazer TR-750 + Baja LP4' },
      { label: 'Power', value: 'Fogstar 400Ah + Victron' },
      { label: 'Solar', value: '600W roof array' },
      { label: 'Heating', value: 'Webasto hydronic + u/floor' },
    ],
  },
  {
    slug: 'torridon',
    name: 'TORRIDON',
    layout: 'CRAG',
    van: 'Mercedes Sprinter 4×4 · L3H2',
    wrap: 'Matte Slate',
    descriptor: 'The Sprinter 4×4 platform at its absolute limit. Every system chosen for the long haul.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&q=85',
    alt: 'Mountain road with dramatic sky',
    specs: [
      { label: 'Suspension', value: 'Van Compass L2 + Fox Elite' },
      { label: 'Lighting', value: 'Lazer TR-750 + Baja LP4' },
      { label: 'Lockers', value: 'Agency6 front + rear' },
      { label: 'Audio', value: 'Musway DSP system' },
      { label: 'AC', value: 'Cruise n Comfort' },
    ],
  },
  {
    slug: 'pentland',
    name: 'PENTLAND',
    layout: 'FELL',
    van: 'Ford Transit Trail · LWB H3 · 4WD',
    wrap: 'Alpine White',
    descriptor: 'The FELL layout in its most considered form. For long journeys, quietly and beautifully made.',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=1800&q=85',
    alt: 'Coastal cliff road',
    specs: [
      { label: 'Roof', value: 'Alkota elevating roof' },
      { label: 'Fridge', value: 'Isotherm Cruise 130 Elegant' },
      { label: 'Heating', value: 'Webasto hydronic + u/floor' },
      { label: 'Power', value: 'Fogstar 300Ah + 400W solar' },
      { label: 'Wet room', value: 'Full + outdoor shower' },
    ],
  },
  {
    slug: 'cheviot',
    name: 'CHEVIOT',
    layout: 'DALE',
    van: 'MAN TGE 35 · L3H2 · AWD',
    wrap: 'Charcoal Metallic',
    descriptor: 'The everyday adventurer, done properly. The Cinema Tilt bed changes everything.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85',
    alt: 'Moorland track, low light',
    specs: [
      { label: 'Bed', value: 'Alkota Cinema Tilt' },
      { label: 'Kitchen', value: 'Twin induction + Isotherm 85' },
      { label: 'Audio', value: 'Musway M4 + ME62C' },
      { label: 'Power', value: 'Fogstar 200Ah + 300W solar' },
      { label: 'Climate', value: 'Webasto Air Top' },
    ],
  },
  {
    slug: 'solway',
    name: 'SOLWAY',
    layout: 'DALE',
    van: 'Mercedes Sprinter 319 · L2H2',
    wrap: 'Bronze Metallic',
    descriptor: 'The DALE at its most refined. For those who want capability and beauty in equal measure.',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1800&q=85',
    alt: 'Forest road, dappled light',
    specs: [
      { label: 'Bed', value: 'Alkota Lift Garage' },
      { label: 'Worktop', value: 'Solid ash' },
      { label: 'Tap', value: 'Grohe mixer' },
      { label: 'Power', value: 'Fogstar 200Ah + 300W solar' },
      { label: 'Audio', value: 'Musway full system' },
    ],
  },
]

export default function SnapGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setPrevIndex(activeIndex)
              setActiveIndex(index)
            }
          }
        })
      },
      { threshold: 0.6 }
    )

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [activeIndex])

  return (
    <div className="relative" style={{ height: '100vh' }}>
      {/* Snap container */}
      <div
        ref={containerRef}
        className="snap-container scrollbar-hide"
        style={{ height: '100vh' }}
      >
        {builds.map((build, i) => (
          <div
            key={build.slug}
            ref={(el) => { sectionRefs.current[i] = el }}
            className="snap-section"
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0"
              animate={activeIndex === i ? { scale: 1.04 } : { scale: 1 }}
              transition={{ duration: 10, ease: 'linear' }}
            >
              <Image
                src={build.image}
                alt={build.alt}
                fill
                className="object-cover object-center"
                priority={i === 0}
                unoptimized
              />
            </motion.div>

            {/* Overlay */}
            <div className="overlay-bottom" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-8 md:px-12 pb-20 md:pb-16">
              {/* Left block */}
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    key={`left-${build.slug}`}
                    className="max-w-[480px]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="forest">{build.layout}</Badge>
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em]" style={{ color: 'rgba(244,241,236,0.45)' }}>
                        {build.van}
                      </span>
                    </div>
                    <h2
                      className="font-display font-extrabold text-alkota-chalk uppercase leading-none tracking-[-0.01em] mb-4"
                      style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
                    >
                      {build.name}
                    </h2>
                    <p className="font-body text-[14px] leading-relaxed mb-8" style={{ color: 'rgba(244,241,236,0.6)', maxWidth: '380px' }}>
                      {build.descriptor}
                    </p>
                    <Link
                      href={`/builds/${build.slug}`}
                      className="btn btn-ghost text-[10px] py-3 px-6"
                    >
                      See the build →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right block — specs */}
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    key={`right-${build.slug}`}
                    className="hidden md:flex flex-col gap-3 items-end"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {build.specs.map((spec) => (
                      <div key={spec.label} className="flex gap-4 items-baseline">
                        <span className="font-mono text-[8px] uppercase tracking-[0.08em]" style={{ color: 'rgba(244,241,236,0.35)' }}>
                          {spec.label}
                        </span>
                        <span className="font-mono text-[8px]" style={{ color: 'rgba(244,241,236,0.7)' }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                    <div className="mt-3 font-mono text-[10px]" style={{ color: 'rgba(244,241,236,0.3)' }}>
                      {String(i + 1).padStart(2, '0')} / {String(builds.length).padStart(2, '0')}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation — right edge */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-auto">
        {builds.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            aria-label={`Go to build ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: '6px',
              height: activeIndex === i ? '22px' : '6px',
              borderRadius: activeIndex === i ? '3px' : '50%',
              background: activeIndex === i ? 'rgba(244,241,236,1)' : 'rgba(244,241,236,0.3)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'block',
            }}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: '48px',
          background: 'rgba(25,28,20,0.7)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase" style={{ color: 'rgba(244,241,236,0.4)' }}>
          Alkota Builds
        </span>
        <span className="font-mono text-[11px]" style={{ color: 'var(--alkota-chalk)' }}>
          {String(activeIndex + 1).padStart(2, '0')} / {String(builds.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
