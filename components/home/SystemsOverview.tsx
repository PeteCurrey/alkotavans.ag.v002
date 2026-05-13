'use client'

import RevealOnScroll from '@/components/shared/RevealOnScroll'

const pillars = [
  {
    num: '01',
    name: 'Chassis & Suspension',
    desc: 'Van Compass and Agile Offroad suspension systems. Lifted geometry, correct alignment, Fox shocks. Agency6 air lockers. Alkota underbody armour.',
  },
  {
    num: '02',
    name: 'Lighting',
    desc: 'Lazer Lamps motorsport-proven grille integration. Baja Designs A-pillar and roof systems. sPOD managed switching. Lighting that performs as hard as the van does.',
  },
  {
    num: '03',
    name: 'Electrical',
    desc: 'Victron MultiPlus-II inverter/charger. Fogstar LiFePO4 lithium. Up to 600W solar. Cerbo GX monitoring. Shore power. Second alternator. Engineered to keep you off-grid indefinitely.',
  },
  {
    num: '04',
    name: 'Water & Plumbing',
    desc: 'Stainless tanks. Webasto hot water. Full filtration. Outdoor shower. Plumbed pressure washer. Every build is designed for the scenario where the nearest tap is two days away.',
  },
  {
    num: '05',
    name: 'Climate',
    desc: 'Webasto hydronic heating with optional underfloor distribution. Dometic or Cruise n Comfort air conditioning. The cabin temperature is under your control, always.',
  },
  {
    num: '06',
    name: 'Interior',
    desc: 'Isotherm refrigeration. Musway audio. Alkota-fabricated bed systems including the Lift Garage and Cinema Tilt. Solid ash, Dekton, or aluminium composite surfaces. Built to last, not to photograph.',
  },
]

export default function SystemsOverview() {
  return (
    <section style={{ background: 'var(--alkota-obsidian)' }} className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">
        <div className="mb-20">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-5" style={{ color: 'rgba(244,241,236,0.35)' }}>
              Built as a System
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-alkota-chalk" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1, maxWidth: '580px' }}>
              Not a van with furniture.<br />A vehicle engineered from the ground up.
            </h2>
          </RevealOnScroll>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.num} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
                <div className="font-mono text-[9px]" style={{ color: 'var(--alkota-forest)' }}>{pillar.num}</div>
                <div className="w-px h-8" style={{ background: 'var(--alkota-forest)' }} />
                <div className="font-display font-bold text-[18px] text-alkota-chalk">{pillar.name}</div>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: 'rgba(244,241,236,0.55)' }}>{pillar.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
