import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Systems | Alkota Van Conversions',
  description: 'Not a van with furniture. A vehicle engineered from the ground up. Explore the systems that power every Alkota build.',
}

const systems = [
  {
    name: 'Chassis & Suspension',
    desc: 'Van Compass and Agile Offroad suspension systems. Lifted geometry, correct alignment, Fox shocks.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    href: '/systems/chassis',
  },
  {
    name: 'Lighting',
    desc: 'Lazer Lamps motorsport-proven grille integration. Baja Designs A-pillar and roof systems.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    href: '/systems/lighting',
  },
  {
    name: 'Electrical',
    desc: 'Victron MultiPlus-II inverter/charger. Fogstar LiFePO4 lithium. Up to 600W solar.',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=800&q=80',
    href: '/systems/electrical',
  },
  {
    name: 'Water & Plumbing',
    desc: 'Stainless tanks. Webasto hot water. Full filtration. Outdoor shower. Plumbed pressure washer.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    href: '/systems/water',
  },
  {
    name: 'Climate Control',
    desc: 'Webasto hydronic heating with optional underfloor distribution. Dometic or Cruise n Comfort AC.',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80',
    href: '/systems/climate',
  },
  {
    name: 'Interior Systems',
    desc: 'Isotherm refrigeration. Musway audio. Alkota-fabricated bed systems including the Lift Garage.',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80',
    href: '/systems/interior',
  },
]

export default function SystemsPage() {
  return (
    <>
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto text-center">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>
              Built as a System
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-extrabold text-alkota-chalk mb-6" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.0 }}>
              Not a van with furniture.<br />A vehicle engineered from the ground up.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[rgba(25,28,20,0.08)]">
          {systems.map((sys, i) => (
            <RevealOnScroll key={sys.name} delay={i * 0.1}>
              <div className="group relative border-r border-b border-[rgba(25,28,20,0.08)] last:border-r-0 md:last:border-r-0 lg:last:border-r-0 overflow-hidden" style={{ minHeight: '400px' }}>
                <Image src={sys.image} alt={sys.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" unoptimized />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(25,28,20,0.9) 0%, rgba(25,28,20,0.3) 50%, rgba(25,28,20,0.1) 100%)' }} />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="font-display font-bold text-[24px] text-alkota-chalk mb-3">{sys.name}</div>
                  <p className="font-body text-[13px] leading-relaxed mb-6" style={{ color: 'rgba(244,241,236,0.6)' }}>{sys.desc}</p>
                  <Link href={sys.href} className="font-body font-medium text-[11px] uppercase tracking-[0.1em] text-alkota-chalk no-underline transition-colors group-hover:underline">
                    Explore →
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
