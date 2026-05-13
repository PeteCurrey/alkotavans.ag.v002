import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Process | Alkota Van Conversions',
  description: 'Five steps from idea to ignition. Learn how we commission and build expedition van conversions.',
}

const steps = [
  {
    num: '01',
    name: 'Discovery',
    duration: 'typically 1–2 weeks',
    desc: 'A phone call or in-person meeting. We learn what you do, where you go, and what matters most in a build. No obligation, no pressure. We turn down builds that aren\'t the right fit for us. If we proceed, we establish the layout, base vehicle, and primary system requirements.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    num: '02',
    name: 'Design',
    duration: 'typically 2–3 weeks',
    desc: 'We produce a full layout drawing, equipment specification, and detailed quote. If you want 3D renders, we can arrange those. Everything is confirmed before a deposit changes hands. You will know exactly what components are going into your build and why.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
  },
  {
    num: '03',
    name: 'Platform Build',
    duration: 'typically 3–4 weeks',
    desc: 'We start with the van, not the interior. Suspension, bumpers, lighting, armour, and chassis systems are completed first. This is where most converters cut corners. We don\'t. Ensuring the vehicle can handle the weight and terrain is step one.',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=800&q=80',
  },
  {
    num: '04',
    name: 'Conversion',
    duration: 'typically 8–12 weeks',
    desc: 'Insulation, wiring, plumbing, fabrication, and fit-out. Every Alkota is hand-built in-house. We don\'t subcontract. You get a dedicated project manager and regular photo updates as the systems and interior are installed.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    num: '05',
    name: 'Handover',
    duration: '1 full day',
    desc: 'A full day with you at our workshop. We walk through every system, every switch, every setting. You leave knowing your van inside out. A 12-month build warranty covers everything we install and fabricate.',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80',
  },
]

export default function ProcessPage() {
  return (
    <>
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-24 px-6 md:px-10 lg:px-20 text-center">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>
              How it Works
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-extrabold text-alkota-chalk mb-6" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.0 }}>
              Five steps from idea<br />to ignition.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {steps.map((step, i) => (
        <section key={step.num} style={{ background: i % 2 === 0 ? 'var(--alkota-chalk)' : 'var(--alkota-linen)' }} className="py-24 px-6 md:px-10 lg:px-20">
          <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <RevealOnScroll>
                <div className="font-mono font-bold leading-none select-none absolute -top-16 -left-8" style={{ fontSize: '180px', color: 'var(--alkota-forest)', opacity: 0.08 }}>
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-[48px] mb-4" style={{ color: 'var(--alkota-obsidian)' }}>
                    {step.name}
                  </h2>
                  <div className="font-mono text-[10px] mb-6" style={{ color: 'var(--alkota-stone)' }}>
                    Duration: {step.duration}
                  </div>
                  <p className="font-body text-[15px] leading-[1.9] max-w-md" style={{ color: 'var(--alkota-stone)' }}>
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className={`relative h-[500px] w-full ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <RevealOnScroll delay={0.2} className="w-full h-full">
                <Image src={step.image} alt={step.name} fill className="object-cover" unoptimized />
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: 'var(--alkota-forest)' }} className="py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.5)' }}>Ready to begin?</div>
          <h2 className="font-display font-bold text-alkota-chalk text-[40px] mb-8">Start the process.</h2>
          <Link href="/contact" className="btn btn-ghost">Start a Commission →</Link>
        </RevealOnScroll>
      </section>
    </>
  )
}
