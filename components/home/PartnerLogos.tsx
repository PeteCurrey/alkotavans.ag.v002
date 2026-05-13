'use client'

import RevealOnScroll from '@/components/shared/RevealOnScroll'

const partners = [
  { name: 'Victron Energy', href: '/systems/electrical' },
  { name: 'Fogstar',        href: '/systems/electrical' },
  { name: 'Webasto',        href: '/systems/climate' },
  { name: 'Isotherm',       href: '/systems' },
  { name: 'Lazer Lamps',    href: '/systems/lighting' },
  { name: 'Baja Designs',   href: '/systems/lighting' },
  { name: 'Van Compass',    href: '/systems/chassis' },
  { name: 'Agile Offroad',  href: '/systems/chassis' },
  { name: 'Agency6',        href: '/systems/chassis' },
  { name: 'AMP Research',   href: '/systems' },
  { name: 'Musway',         href: '/systems' },
]

export default function PartnerLogos() {
  return (
    <section style={{ background: 'var(--alkota-linen)' }} className="py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--alkota-stone)' }}>
              We Only Build With the Best
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="font-body text-[13px]" style={{ color: 'var(--alkota-stone)' }}>
              Every component in an Alkota build is chosen for performance, durability, and precision — not cost.
            </p>
          </RevealOnScroll>
        </div>

        {/* Partner strip */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-0">
            {partners.map((partner, i) => (
              <div key={partner.name} className="flex items-center">
                <a
                  href={partner.href}
                  className="font-body font-medium text-[14px] px-5 py-3 no-underline transition-colors duration-250 block text-alkota-stone hover:text-alkota-obsidian"
                >
                  {partner.name}
                </a>
                {i < partners.length - 1 && (
                  <div className="h-5 w-px hidden md:block" style={{ background: 'rgba(25,28,20,0.18)' }} />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
