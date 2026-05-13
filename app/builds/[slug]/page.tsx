import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Badge from '@/components/ui/Badge'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const buildsData: Record<string, {
  name: string; layout: string; van: string; wrap: string
  image: string; alt: string; descriptor: string
  story: string
  specs: { category: string; items: { name: string; value: string }[] }[]
}> = {
  kielder: {
    name: 'KIELDER', layout: 'CRAG', van: 'Iveco Daily 4×4 · 70C · LWB', wrap: 'Alkota Forest Green',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=85',
    alt: 'KIELDER — Iveco Daily CRAG in mountain terrain',
    descriptor: 'Our most capable build. Lifted, armoured, and equipped for the places no other van can reach.',
    story: 'KIELDER was built around one question: how far can we push the Iveco Daily 4×4 platform? The answer is further than most people will ever need to go. Starting from a 70C body-on-frame chassis, we installed a full Van Compass expedition suspension system with Fox shocks, then fabricated our own front and rear bumpers with integrated recovery points and winch mount. The roof carries 600W of solar across an Alkota full platform rack. Inside, a 400Ah Fogstar lithium bank and Victron MultiPlus-II inverter mean KIELDER can run indefinitely off-grid. Webasto hydronic heating runs through underfloor panels — silent, efficient, and warm in any weather. KIELDER is not a comfort build. It is a capability statement.',
    specs: [
      { category: 'SUSPENSION', items: [{ name: 'System', value: 'Van Compass Expedition' }, { name: 'Shocks', value: 'Fox Performance Elite' }, { name: 'Lift', value: '+3" with load correction' }] },
      { category: 'LIGHTING', items: [{ name: 'Grille', value: 'Lazer Triple-R 750' }, { name: 'A-pillar', value: 'Baja LP4 Pro' }, { name: 'Control', value: 'sPOD BantamX' }] },
      { category: 'ELECTRICAL', items: [{ name: 'Battery', value: 'Fogstar Drift Pro 400Ah' }, { name: 'Inverter', value: 'Victron MultiPlus-II 3000W' }, { name: 'Solar', value: '600W + Victron MPPT' }, { name: 'Monitor', value: 'Victron Cerbo GX' }] },
      { category: 'CLIMATE', items: [{ name: 'Heating', value: 'Webasto Thermo Top Evo' }, { name: 'Distribution', value: 'Underfloor PEX + radiators' }] },
      { category: 'RECOVERY', items: [{ name: 'Winch', value: 'Warn Zeon 10-S' }, { name: 'Air', value: 'ARB Twin + full system' }, { name: 'Lockers', value: 'Agency6 front + rear' }] },
    ],
  },
  torridon: {
    name: 'TORRIDON', layout: 'CRAG', van: 'Mercedes Sprinter 4×4 · L3H2', wrap: 'Matte Slate',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=85',
    alt: 'TORRIDON — Sprinter 4x4 on mountain road',
    descriptor: 'The Sprinter 4×4 platform at its absolute limit. Every system chosen for the long haul.',
    story: 'TORRIDON takes the Mercedes Sprinter 4×4 — already one of the most capable factory van platforms — and removes every compromise. Van Compass L2 suspension with Fox Elite shocks drops it into serious trail territory. The full Agency6 front and rear air locker setup, fed by an ARB twin compressor, means traction is never a problem. Lazer Triple-R 750 grille lights and Baja LP4 A-pillar pods give TORRIDON the lighting capability of a rally service vehicle. Inside, a Musway DSP audio system, Cruise n Comfort air conditioning, and a full FELL-specification interior make the long drives as good as the destinations.',
    specs: [
      { category: 'SUSPENSION', items: [{ name: 'System', value: 'Van Compass L2' }, { name: 'Shocks', value: 'Fox Performance Elite' }] },
      { category: 'LIGHTING', items: [{ name: 'Grille', value: 'Lazer Triple-R 750' }, { name: 'A-pillar', value: 'Baja LP4 Pro' }] },
      { category: 'LOCKERS', items: [{ name: 'System', value: 'Agency6 front + rear' }, { name: 'Air', value: 'ARB Twin compressor' }] },
      { category: 'AUDIO', items: [{ name: 'System', value: 'Musway DSP full system' }] },
      { category: 'CLIMATE', items: [{ name: 'AC', value: 'Cruise n Comfort 12V' }] },
    ],
  },
  pentland: {
    name: 'PENTLAND', layout: 'FELL', van: 'Ford Transit Trail · LWB H3 · 4WD', wrap: 'Alpine White',
    image: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=2000&q=85',
    alt: 'PENTLAND — Ford Transit FELL on coastal road',
    descriptor: 'The FELL layout in its most considered form. For long journeys, quietly and beautifully made.',
    story: 'PENTLAND is the build that proves you don\'t need 4WD to go far. The Ford Transit Trail AWD platform, fitted with an Alkota elevating roof, creates a space that is generous, light-filled, and quietly exceptional. The FELL layout gives PENTLAND a full wet room, a serious kitchen with Isotherm Cruise 130 Elegant refrigeration, and a full-size bed over a ventilated garage. Webasto hydronic heating runs through underfloor panels, and a 300Ah Fogstar bank with 400W solar means the heating, refrigeration, and lighting run without thought. PENTLAND was built for the couple who want to go for three weeks and feel at home for all of them.',
    specs: [
      { category: 'ROOF', items: [{ name: 'Type', value: 'Alkota elevating roof' }] },
      { category: 'REFRIGERATION', items: [{ name: 'Fridge', value: 'Isotherm Cruise 130 Elegant' }] },
      { category: 'ELECTRICAL', items: [{ name: 'Battery', value: 'Fogstar 300Ah' }, { name: 'Solar', value: '400W + Victron MPPT' }] },
      { category: 'CLIMATE', items: [{ name: 'Heating', value: 'Webasto hydronic + underfloor' }] },
      { category: 'WATER', items: [{ name: 'Wet room', value: 'Full + outdoor shower' }] },
    ],
  },
  cheviot: {
    name: 'CHEVIOT', layout: 'DALE', van: 'MAN TGE 35 · L3H2 · AWD', wrap: 'Charcoal Metallic',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=85',
    alt: 'CHEVIOT — MAN TGE DALE on moorland',
    descriptor: 'The everyday adventurer, done properly. The Cinema Tilt bed changes everything.',
    story: 'CHEVIOT is built on the MAN TGE platform — the VW Crafter twin — and represents the DALE layout at its most liveable. The defining feature is the Alkota Cinema Tilt bed system: at the touch of a button, the bed pivots 30 degrees toward the barn doors, creating a reclined lounge position that transforms the evening experience entirely. A twin induction cooktop over an Isotherm 85L refrigerator provides a serious cooking capability. Musway audio fills the space properly. Webasto Air Top heating means CHEVIOT is warm from the first cold morning. AWD from the factory means it will follow most tracks without complaint.',
    specs: [
      { category: 'BED', items: [{ name: 'System', value: 'Alkota Cinema Tilt' }] },
      { category: 'KITCHEN', items: [{ name: 'Cooktop', value: 'Twin induction' }, { name: 'Fridge', value: 'Isotherm Cruise 85' }] },
      { category: 'AUDIO', items: [{ name: 'System', value: 'Musway M4 + ME62C' }] },
      { category: 'ELECTRICAL', items: [{ name: 'Battery', value: 'Fogstar 200Ah' }, { name: 'Solar', value: '300W' }] },
      { category: 'CLIMATE', items: [{ name: 'Heating', value: 'Webasto Air Top' }] },
    ],
  },
  solway: {
    name: 'SOLWAY', layout: 'DALE', van: 'Mercedes Sprinter 319 · L2H2', wrap: 'Bronze Metallic',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=2000&q=85',
    alt: 'SOLWAY — Sprinter DALE in forest light',
    descriptor: 'The DALE at its most refined. For those who want capability and beauty in equal measure.',
    story: 'SOLWAY is built for the owner who drives a Sprinter by choice, not by default. The Bronze Metallic wrap — a colour we chose for its warmth against the interior finishes — sets the tone immediately. Inside, a solid ash worktop over an Isotherm Cruise 85 refrigerator anchors a kitchen that feels genuinely considered. The Alkota Lift Garage bed system provides full-height standing space beneath the bed — critical for a LWB build where storage matters. A Grohe mixer tap, Musway full audio system, and 200Ah Fogstar lithium with 300W solar complete a build that is, above everything else, beautiful to live in.',
    specs: [
      { category: 'BED', items: [{ name: 'System', value: 'Alkota Lift Garage' }] },
      { category: 'KITCHEN', items: [{ name: 'Worktop', value: 'Solid ash' }, { name: 'Tap', value: 'Grohe mixer' }] },
      { category: 'AUDIO', items: [{ name: 'System', value: 'Musway full system' }] },
      { category: 'ELECTRICAL', items: [{ name: 'Battery', value: 'Fogstar 200Ah' }, { name: 'Solar', value: '300W' }] },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(buildsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const build = buildsData[params.slug]
  if (!build) return {}
  return {
    title: `${build.name} | ${build.layout} Build | Alkota Van Conversions`,
    description: build.descriptor,
  }
}

export default function BuildPage({ params }: { params: { slug: string } }) {
  const build = buildsData[params.slug]
  if (!build) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '80vh' }}>
        <Image src={build.image} alt={build.alt} fill className="object-cover object-center" priority unoptimized />
        <div className="overlay-bottom" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="forest">{build.layout}</Badge>
            <span className="font-mono text-[9px] uppercase tracking-[0.08em]" style={{ color: 'rgba(244,241,236,0.45)' }}>{build.van}</span>
          </div>
          <h1 className="font-display font-extrabold text-alkota-chalk uppercase leading-none" style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>
            {build.name}
          </h1>
        </div>
      </section>

      {/* Story + Spec */}
      <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.12em] uppercase mb-6" style={{ color: 'var(--alkota-stone)' }}>Build Story</div>
            <p className="font-body text-[15px] leading-[1.85] mb-6" style={{ color: 'var(--alkota-stone)' }}>{build.descriptor}</p>
            <p className="font-body text-[15px] leading-[1.85]" style={{ color: 'var(--alkota-stone)' }}>{build.story}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="font-mono text-[9px] tracking-[0.12em] uppercase mb-6" style={{ color: 'var(--alkota-stone)' }}>Full Specification</div>
            {build.specs.map((section) => (
              <div key={section.category} className="mb-8">
                <div className="font-mono text-[9px] tracking-[0.12em] uppercase mb-3" style={{ color: 'var(--alkota-forest)' }}>{section.category}</div>
                <table className="w-full spec-table">
                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.name}>
                        <td className="font-body font-medium text-[13px] pr-6" style={{ color: 'var(--alkota-obsidian)' }}>{item.name}</td>
                        <td className="font-mono text-[10px] text-right" style={{ color: 'var(--alkota-stone)' }}>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* Commission CTA */}
      <section style={{ background: 'var(--alkota-forest)' }} className="py-20 px-6 md:px-10 lg:px-20 text-center">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.5)' }}>Inspired by this build?</div>
          <h2 className="font-display font-bold text-alkota-chalk text-[32px] mb-8">Tell us what you want.</h2>
          <Link href="/contact" className="btn btn-ghost">Start a Commission →</Link>
        </RevealOnScroll>
      </section>
    </>
  )
}
