'use client'

import RevealOnScroll from '@/components/shared/RevealOnScroll'

const steps = [
  {
    num: '01',
    name: 'Discovery',
    desc: 'A phone call or in-person meeting. We learn what you do, where you go, and what matters most in a build. No obligation, no pressure. We turn down builds that aren\'t the right fit for us.',
  },
  {
    num: '02',
    name: 'Design',
    desc: 'We produce a full layout drawing, equipment specification, and detailed quote. If you want 3D renders, we can arrange those. Everything is confirmed before a deposit changes hands.',
  },
  {
    num: '03',
    name: 'Platform Build',
    desc: 'We start with the van, not the interior. Suspension, bumpers, lighting, armour, and chassis systems are completed first. This is where most converters cut corners. We don\'t.',
  },
  {
    num: '04',
    name: 'Conversion',
    desc: 'Insulation, wiring, plumbing, fabrication, and fit-out. Every Alkota is hand-built in-house. We don\'t subcontract. You get a dedicated project manager and regular photo updates.',
  },
  {
    num: '05',
    name: 'Handover',
    desc: 'A full day with you at our workshop. We walk through every system, every switch, every setting. You leave knowing your van inside out. A 12-month build warranty covers everything.',
  },
]

export default function Process() {
  return (
    <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">
        <div className="mb-16">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-5" style={{ color: 'var(--alkota-stone)' }}>
              How it Works
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display font-bold" style={{ color: 'var(--alkota-obsidian)', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Five steps from idea<br />to ignition.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px" style={{ background: 'var(--alkota-forest)', opacity: 0.3 }} />
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.1}>
                <div className="relative pt-2">
                  {/* Dot on line */}
                  <div className="w-2.5 h-2.5 rounded-full mb-6" style={{ background: 'var(--alkota-forest)' }} />
                  {/* Watermark number */}
                  <div
                    className="font-mono text-[52px] leading-none mb-3 select-none"
                    style={{ color: 'rgba(58,77,41,0.1)' }}
                  >
                    {step.num}
                  </div>
                  <div className="font-display font-bold text-[15px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>
                    {step.name}
                  </div>
                  <p className="font-body text-[12px] leading-relaxed" style={{ color: 'var(--alkota-stone)' }}>
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-10 relative">
          <div className="absolute top-0 bottom-0 left-4 w-px" style={{ background: 'var(--alkota-forest)', opacity: 0.3 }} />
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 0.08}>
              <div className="pl-12 relative">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full -translate-x-1/2" style={{ background: 'var(--alkota-forest)' }} />
                <div className="font-mono text-[9px] mb-2" style={{ color: 'var(--alkota-forest)' }}>{step.num}</div>
                <div className="font-display font-bold text-[16px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>{step.name}</div>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--alkota-stone)' }}>{step.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
