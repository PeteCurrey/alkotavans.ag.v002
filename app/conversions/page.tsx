import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Conversions | The Alkota Range | Alkota Van Conversions',
  description: 'Four layouts built to take you further. HOLT, DALE, FELL, and CRAG — each a complete system.',
}

const layouts = [
  {
    name: 'HOLT', tagline: 'Compact Adventure', href: '/conversions/holt',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    alt: 'HOLT compact van on forest track',
    description: 'The van that fits everywhere and goes anywhere. Built for solo explorers and couples who treat the weekend like an expedition. The HOLT is our most compact layout — easier to park, faster to set up, and more capable than it has any right to be.',
    spec: '2 berths · SWB/MWB · From £42,000 conversion',
    vans: ['MAN TGE', 'Sprinter', 'Transit'],
    bg: 'var(--alkota-chalk)', textColor: 'var(--alkota-obsidian)', imageLeft: true,
  },
  {
    name: 'DALE', tagline: 'The Everyday Adventurer', href: '/conversions/dale',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    alt: 'DALE van on highland road',
    description: 'Everything you need. Nothing you don\'t. The most versatile Alkota — equally at home on a Scottish mountain track or a French river road. The DALE is our most popular layout for good reason.',
    spec: '2 berths · MWB · From £55,000 conversion',
    vans: ['MAN TGE', 'Sprinter', 'Transit'],
    bg: 'var(--alkota-linen)', textColor: 'var(--alkota-obsidian)', imageLeft: false,
  },
  {
    name: 'FELL', tagline: 'The Serious Adventurer', href: '/conversions/fell',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=1200&q=80',
    alt: 'FELL van on coastal road',
    description: 'More space, more capability, more places. The FELL brings a full wet room, a serious kitchen, and a proper garage to the party. For those who go for longer, go further, and demand more from their van.',
    spec: '2–4 berths · LWB · From £70,000 conversion',
    vans: ['Sprinter', 'Transit', 'Iveco Daily'],
    bg: 'var(--alkota-obsidian)', textColor: 'var(--alkota-chalk)', imageLeft: true,
  },
  {
    name: 'CRAG', tagline: 'The Expedition Machine', href: '/conversions/crag',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    alt: 'CRAG expedition van in mountain terrain',
    description: 'No road required. The CRAG is built on 4WD and AWD platforms, with lifted suspension, armour, onboard air, and systems that run for weeks without resupply. This is not a camper van. It is an expedition vehicle.',
    spec: '2–4 berths · 4WD/AWD · From £88,000 conversion',
    vans: ['Iveco Daily 4×4', 'Sprinter 4×4', 'Transit Trail'],
    bg: 'var(--alkota-forest)', textColor: 'var(--alkota-chalk)', imageLeft: false,
  },
]

export default function ConversionsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>The Alkota Range</div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-extrabold text-alkota-chalk mb-6" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.0 }}>
              Four layouts.<br />Built to take you further.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="font-body text-[15px] leading-relaxed max-w-[540px]" style={{ color: 'rgba(244,241,236,0.6)' }}>
              Every Alkota layout is a complete system — not just a starting point. Choose your layout, then configure every component within it using the Alkota Builder.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Layout panels */}
      {layouts.map((layout) => (
        <section key={layout.name} style={{ background: layout.bg, minHeight: '80vh' }} className="relative">
          <div className={`flex flex-col ${layout.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[80vh]`}>
            {/* Image */}
            <div className="relative w-full lg:w-1/2" style={{ minHeight: '400px' }}>
              <Image src={layout.image} alt={layout.alt} fill className="object-cover" unoptimized />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2 flex items-center px-8 md:px-16 py-20">
              <RevealOnScroll>
                <div>
                  <div
                    className="font-display font-extrabold text-[72px] uppercase leading-none tracking-[-0.01em] mb-3"
                    style={{ color: layout.bg === 'var(--alkota-forest)' ? 'rgba(244,241,236,0.9)' : 'var(--alkota-forest)' }}
                  >
                    {layout.name}
                  </div>
                  <div className="font-body italic text-[16px] mb-6" style={{ color: layout.textColor === 'var(--alkota-chalk)' ? 'rgba(244,241,236,0.6)' : 'var(--alkota-stone)' }}>
                    {layout.tagline}
                  </div>
                  <p className="font-body text-[14px] leading-[1.85] mb-6 max-w-[420px]" style={{ color: layout.textColor === 'var(--alkota-chalk)' ? 'rgba(244,241,236,0.7)' : 'var(--alkota-stone)' }}>
                    {layout.description}
                  </p>
                  <div className="font-mono text-[9px] mb-6" style={{ color: layout.textColor === 'var(--alkota-chalk)' ? 'rgba(244,241,236,0.45)' : 'var(--alkota-stone)' }}>
                    {layout.spec}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {layout.vans.map((van) => (
                      <span key={van} className="font-mono text-[8px] px-2 py-1 border" style={{ borderRadius: '2px', borderColor: 'var(--alkota-forest)', color: layout.textColor === 'var(--alkota-chalk)' ? 'rgba(244,241,236,0.8)' : 'var(--alkota-forest)' }}>
                        {van}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5">
                    <Link href={layout.href} className="font-body font-medium text-[13px] no-underline transition-colors duration-200" style={{ color: 'var(--alkota-forest)' }}>
                      Explore {layout.name} →
                    </Link>
                    <Link href={`/configure?layout=${layout.name.toLowerCase()}`} className="btn btn-solid text-[10px] py-2.5 px-5">
                      Configure {layout.name} →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* Commission strip */}
      <section style={{ background: 'var(--alkota-obsidian)' }} className="py-20 px-6 text-center">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.3)' }}>Something different in mind?</div>
          <h2 className="font-display font-bold text-alkota-chalk text-[32px] mb-8">Commission an Alkota.</h2>
          <Link href="/contact" className="btn btn-solid">Start a Commission →</Link>
        </RevealOnScroll>
      </section>
    </>
  )
}
