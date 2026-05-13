import type { Metadata } from 'next'
import Image from 'next/image'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export const metadata: Metadata = {
  title: 'About | Alkota Van Conversions',
  description: 'We build expedition-capable van conversions for people who are serious about where they go.',
}

export default function AboutPage() {
  return (
    <>
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-32 px-6 md:px-10 lg:px-20 text-center">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>
              About Alkota
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-extrabold text-alkota-chalk mb-6" style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1.0 }}>
              We build vans<br />that go places.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="space-y-6 font-body text-[15px] leading-[1.9]" style={{ color: 'var(--alkota-stone)' }}>
              <p>
                Alkota builds expedition-capable van conversions for people who are serious about where they go. We don&apos;t make lifestyle products. We engineer vehicles — starting with the chassis, the suspension and the lighting before we touch the interior. Every component is chosen for a reason, every system is installed to last, and every build is unique.
              </p>
              <p>
                We fabricate in-house. We don&apos;t subcontract. The quality you see is the quality we take responsibility for.
              </p>
              <p>
                Every Alkota is different because every owner is different. What stays the same is the standard.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex items-center h-full">
              <blockquote className="font-display font-bold italic text-[26px] leading-tight" style={{ color: 'var(--alkota-forest)' }}>
                &quot;Every Alkota is built to take you somewhere you couldn&apos;t go before.&quot;
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ background: 'var(--alkota-linen)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RevealOnScroll delay={0.1}>
              <h3 className="font-display font-bold text-[20px] mb-4" style={{ color: 'var(--alkota-obsidian)' }}>Uncompromising Specification</h3>
              <div className="h-px w-16 mb-4" style={{ background: 'var(--alkota-forest)' }} />
              <p className="font-body text-[13px] leading-[1.7]" style={{ color: 'var(--alkota-stone)' }}>
                We use Victron, Fogstar, Lazer, and Baja because they work. We don&apos;t use cheaper alternatives because they fail.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h3 className="font-display font-bold text-[20px] mb-4" style={{ color: 'var(--alkota-obsidian)' }}>In-House Fabrication</h3>
              <div className="h-px w-16 mb-4" style={{ background: 'var(--alkota-forest)' }} />
              <p className="font-body text-[13px] leading-[1.7]" style={{ color: 'var(--alkota-stone)' }}>
                Our bumpers, racks, and bed systems are fabricated by us, right here. We control the quality from raw metal to final powder coat.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <h3 className="font-display font-bold text-[20px] mb-4" style={{ color: 'var(--alkota-obsidian)' }}>Built for Purpose</h3>
              <div className="h-px w-16 mb-4" style={{ background: 'var(--alkota-forest)' }} />
              <p className="font-body text-[13px] leading-[1.7]" style={{ color: 'var(--alkota-stone)' }}>
                We build for the scenario where the nearest tap is two days away. Complete off-grid independence is the baseline.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--alkota-obsidian)' }} className="py-16 overflow-hidden">
        <div className="flex gap-2 px-2 overflow-x-auto scrollbar-hide">
          <div className="relative h-[400px] w-[600px] flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" alt="Workshop 1" fill className="object-cover" unoptimized />
          </div>
          <div className="relative h-[400px] w-[600px] flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=800&q=80" alt="Workshop 2" fill className="object-cover" unoptimized />
          </div>
          <div className="relative h-[400px] w-[600px] flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Workshop 3" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>
    </>
  )
}
