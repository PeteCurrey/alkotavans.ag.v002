import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/shared/RevealOnScroll'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Platforms | Alkota Van Conversions',
  description: 'Four platforms. One build standard. Explore the base vehicles we build on: MAN TGE, Mercedes Sprinter, Ford Transit, and Iveco Daily.',
}

const platforms = [
  {
    name: 'MAN TGE / VW Crafter',
    logoText: 'MAN / VOLKSWAGEN',
    bestFor: ['HOLT', 'DALE'],
    payload: '1,000–1,200kg typical',
    dimensions: 'L3 (MWB) to L5 (XLWB)',
    drivetrain: 'FWD / RWD / 4MOTION AWD',
    description: 'The TGE and Crafter twins offer perhaps the best driving dynamics of any large van. The cabin is car-like, the driving position is excellent, and the body width is highly accommodating for transverse beds. AWD versions offer exceptional poor-weather capability.',
  },
  {
    name: 'Mercedes-Benz Sprinter',
    logoText: 'MERCEDES-BENZ',
    bestFor: ['DALE', 'FELL', 'CRAG'],
    payload: '800–1,100kg typical',
    dimensions: 'L2 (MWB) to L4 (XLWB)',
    drivetrain: 'RWD / 4×4 / AWD',
    description: 'The industry standard for premium expedition builds. The Sprinter platform has the widest aftermarket support in the world, allowing for comprehensive suspension and chassis upgrades. The 4×4 variant is legendary in the overlanding community.',
  },
  {
    name: 'Ford Transit',
    logoText: 'FORD',
    bestFor: ['HOLT', 'DALE', 'FELL'],
    payload: '900–1,300kg typical',
    dimensions: 'L2 (MWB) to L4 (XLWB)',
    drivetrain: 'FWD / RWD / AWD Trail',
    description: 'The Transit offers exceptional value, a vast service network, and excellent interior height (H3 models). The Trail AWD variant provides a mechanical limited-slip differential and intelligent all-wheel drive, making it a highly capable all-season platform.',
  },
  {
    name: 'Iveco Daily',
    logoText: 'IVECO',
    bestFor: ['FELL', 'CRAG'],
    payload: '1,500–3,000kg+',
    dimensions: 'MWB to XLWB',
    drivetrain: 'RWD / True 4×4',
    description: 'A commercial truck platform masquerading as a van. The Daily features a ladder-frame chassis, meaning it can carry immense weight without stress. The 4×4 variant is a dedicated off-road machine with triple diff locks and low range gearing.',
  },
]

export default function PlatformsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>
              Alkota Platforms
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-extrabold text-alkota-chalk mb-6" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.0 }}>
              Four platforms.<br />One build standard.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[rgba(25,28,20,0.08)]">
            {platforms.map((platform, i) => (
              <RevealOnScroll key={platform.name} delay={i * 0.1}>
                <div className="flex flex-col h-full p-8 border-r border-b border-[rgba(25,28,20,0.08)] last:border-r-0 md:last:border-r-0 lg:last:border-r-0 bg-white hover:-translate-y-1 transition-transform duration-300">
                  <div className="font-display font-extrabold text-[28px] leading-tight mb-2" style={{ color: 'var(--alkota-forest)' }}>
                    {platform.name}
                  </div>
                  <div className="font-body font-medium text-[11px] uppercase tracking-[0.08em] mb-6" style={{ color: 'var(--alkota-stone)' }}>
                    {platform.logoText}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.bestFor.map((layout) => (
                      <Badge key={layout} variant="forest">{layout}</Badge>
                    ))}
                  </div>
                  <div className="font-mono text-[10px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>
                    Payload: <span style={{ color: 'var(--alkota-stone)' }}>{platform.payload}</span>
                  </div>
                  <div className="font-mono text-[10px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>
                    Dimensions: <span style={{ color: 'var(--alkota-stone)' }}>{platform.dimensions}</span>
                  </div>
                  <div className="font-mono text-[10px] mb-6" style={{ color: 'var(--alkota-obsidian)' }}>
                    Drivetrain: <span style={{ color: 'var(--alkota-stone)' }}>{platform.drivetrain}</span>
                  </div>
                  <p className="font-body text-[13px] leading-relaxed mb-8 flex-grow" style={{ color: 'var(--alkota-stone)' }}>
                    {platform.description}
                  </p>
                  <Link href="/contact" className="font-body font-medium text-[11px] no-underline" style={{ color: 'var(--alkota-forest)' }}>
                    Discuss a {platform.name.split(' ')[0]} build →
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: 'var(--alkota-linen)' }} className="py-24 px-6 md:px-10 lg:px-20 overflow-x-auto">
        <div className="max-w-site mx-auto min-w-[800px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ background: 'var(--alkota-obsidian)' }}>
                <th className="font-mono text-[9px] uppercase tracking-[0.1em] text-alkota-chalk p-4 font-normal">Spec</th>
                <th className="font-mono text-[9px] uppercase tracking-[0.1em] text-alkota-chalk p-4 font-normal">MAN TGE / VW</th>
                <th className="font-mono text-[9px] uppercase tracking-[0.1em] text-alkota-chalk p-4 font-normal">Sprinter</th>
                <th className="font-mono text-[9px] uppercase tracking-[0.1em] text-alkota-chalk p-4 font-normal">Transit</th>
                <th className="font-mono text-[9px] uppercase tracking-[0.1em] text-alkota-chalk p-4 font-normal">Iveco Daily</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: 'var(--alkota-chalk)' }}>
                <td className="font-body text-[12px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-obsidian font-medium">Max Payload</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Moderate</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Moderate</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Good</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Exceptional</td>
              </tr>
              <tr style={{ background: 'var(--alkota-linen)' }}>
                <td className="font-body text-[12px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-obsidian font-medium">4WD/AWD</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">4MOTION AWD</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">4×4 / AWD</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Trail AWD</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">True 4×4 with low range</td>
              </tr>
              <tr style={{ background: 'var(--alkota-chalk)' }}>
                <td className="font-body text-[12px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-obsidian font-medium">Aftermarket Support</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Good</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Exceptional</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Very Good</td>
                <td className="font-mono text-[10px] p-4 border-b border-[rgba(25,28,20,0.05)] text-alkota-stone">Specialist</td>
              </tr>
              <tr style={{ background: 'var(--alkota-linen)' }}>
                <td className="font-body text-[12px] p-4 text-alkota-obsidian font-medium">Alkota Recommendation</td>
                <td className="font-mono text-[10px] p-4 text-alkota-stone">Best driving dynamics</td>
                <td className="font-mono text-[10px] p-4 text-alkota-stone">Premium expedition standard</td>
                <td className="font-mono text-[10px] p-4 text-alkota-stone">Best value AWD</td>
                <td className="font-mono text-[10px] p-4 text-alkota-stone">Heavy duty off-road</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
