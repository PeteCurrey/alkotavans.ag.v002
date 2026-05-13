import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

type LayoutKey = 'holt' | 'dale' | 'fell' | 'crag' | 'commission'

const layoutData: Record<LayoutKey, {
  name: string; tagline: string; description: string; longDesc: string
  spec: { berths: string; size: string; from: string }
  highlights: string[]
  vans: { name: string; model: string; body: string; badge?: string }[]
  options: { title: string; desc: string }[]
  specs: { category: string; value: string }[]
}> = {
  holt: {
    name: 'HOLT', tagline: 'Compact Adventure',
    description: 'The HOLT is built for the traveller who refuses to leave anything behind, even when space is limited.',
    longDesc: 'The van that fits everywhere and goes anywhere. Built for solo explorers and couples who treat the weekend like an expedition. The HOLT uses a short or medium wheelbase platform to stay manoeuvrable without sacrificing the systems that matter. Fixed bed, serious electrical, quality kitchen — nothing is compromised, it is simply engineered more efficiently.',
    spec: { berths: '2', size: 'SWB/MWB', from: '£42,000' },
    highlights: ['— Fixed or rock-and-roll bed', '— Up to 300Ah LiFePO4', '— Induction cooking', '— Webasto heating', '— Up to 300W solar', '— Maxxair ventilation'],
    vans: [
      { name: 'MAN TGE / VW Crafter', model: 'TGE 30', body: 'L1H1 / L2H1', badge: 'AWD available' },
      { name: 'Mercedes Sprinter', model: '311/314', body: 'L1H1 / L2H1', badge: 'Most popular' },
      { name: 'Ford Transit', model: '310', body: 'L1H1 / L2H2' },
    ],
    options: [
      { title: 'Pop-top roof', desc: 'Standing room + extra sleeping when needed.' },
      { title: 'Expanded solar', desc: 'Up to 300W on SWB roof space.' },
      { title: 'Wet room', desc: 'Compact cassette toilet or micro shower.' },
      { title: 'Rock & roll bed', desc: 'Day seating that converts to full bed.' },
    ],
    specs: [
      { category: 'Berths', value: '2' }, { category: 'Wheelbase', value: 'SWB or MWB' },
      { category: 'Bed length', value: '1.9m–2.1m' }, { category: 'Water', value: '40–60L fresh' },
      { category: 'Battery', value: '100–300Ah LiFePO4' }, { category: 'Solar', value: 'Up to 300W' },
      { category: 'Inverter', value: 'Victron 2000W' }, { category: 'Heating', value: 'Eberspächer / Webasto' },
      { category: 'Conversion from', value: '£42,000' },
    ],
  },
  dale: {
    name: 'DALE', tagline: 'The Everyday Adventurer',
    description: 'The most versatile Alkota. The DALE does everything well — and nothing poorly.',
    longDesc: 'Everything you need. Nothing you don\'t. The DALE layout is built on an MWB platform and delivers a complete off-grid system without the bulk of the larger layouts. A proper kitchen, a fixed bed, a serious electrical system, and enough water to go for two weeks. The DALE is the build we recommend most often, because it fits most lives most completely.',
    spec: { berths: '2', size: 'MWB', from: '£55,000' },
    highlights: ['— Fixed bed (Lift Garage or Cinema Tilt)', '— 200–300Ah LiFePO4', '— Twin induction cooktop', '— Isotherm refrigeration', '— Webasto heating', '— Up to 400W solar'],
    vans: [
      { name: 'MAN TGE / VW Crafter', model: 'TGE 35', body: 'L3H2', badge: 'Best for DALE' },
      { name: 'Mercedes Sprinter', model: '319', body: 'L2H2 / L3H2', badge: 'Most popular' },
      { name: 'Ford Transit', model: '350', body: 'L3H2 / L3H3', badge: 'AWD available' },
    ],
    options: [
      { title: 'Alkota Lift Garage', desc: 'Pneumatic-assist lift. Full-height garage beneath the bed.' },
      { title: 'Alkota Cinema Tilt', desc: 'Gas-strut pivot. Reclined lounge mode at the press of a button.' },
      { title: 'Wet room', desc: 'Full shower and toilet in a dedicated sealed space.' },
      { title: 'Expanded solar', desc: '400W for truly indefinite off-grid stays in UK summer.' },
      { title: 'Lockers', desc: 'ARB air lockers for serious off-road traction.' },
      { title: 'Full off-grid spec', desc: 'Combine Lift Garage + 400Ah + 400W + Webasto for expedition capability.' },
    ],
    specs: [
      { category: 'Berths', value: '2' }, { category: 'Wheelbase', value: 'MWB (L3)' },
      { category: 'Bed length', value: '2.0m–2.15m' }, { category: 'Water', value: '60L fresh + grey' },
      { category: 'Battery', value: '200–300Ah LiFePO4' }, { category: 'Solar', value: '200–400W' },
      { category: 'Cooktop', value: 'Twin induction' }, { category: 'Fridge', value: 'Isotherm 65–85L' },
      { category: 'Heating', value: 'Webasto / Eberspächer' }, { category: 'Inverter', value: 'Victron 2000–3000W' },
      { category: 'Conversion from', value: '£55,000' },
    ],
  },
  fell: {
    name: 'FELL', tagline: 'The Serious Adventurer',
    description: 'For those who need more of everything — without compromise.',
    longDesc: 'The FELL is built for the serious adventurer who lives in their van for months at a time. A full wet room. A proper kitchen with a 130L refrigerator. An elevated roof for standing room. A garage that takes bikes or surf gear. The FELL is built on LWB platforms, giving enough interior volume to feel genuinely spacious. This is the layout that earns the description expedition-grade.',
    spec: { berths: '2–4', size: 'LWB', from: '£70,000' },
    highlights: ['— Full wet room with shower', '— Elevated or pop-top roof', '— Isotherm 130L refrigerator', '— 300Ah+ LiFePO4', '— 400W+ solar', '— Alkota bed system'],
    vans: [
      { name: 'Mercedes Sprinter', model: '319/324', body: 'L3H2 / L4H2', badge: 'Best for FELL' },
      { name: 'Ford Transit', model: '350 HD', body: 'L3H3 / L4H3', badge: 'AWD available' },
      { name: 'Iveco Daily', model: '50C/65C', body: 'L3H2 / L4H2' },
    ],
    options: [
      { title: 'Elevating roof', desc: 'Standing room + overhead berths when raised.' },
      { title: 'Outdoor shower', desc: 'Hot and cold, thermostatic mixer, recessed enclosure.' },
      { title: 'Expanded solar', desc: '600W for heavy loads in UK conditions.' },
      { title: 'Lockers', desc: 'Front + rear ARB air lockers.' },
      { title: 'Underfloor heating', desc: 'Webasto hydronic through PEX underfloor panels.' },
      { title: 'Full off-grid spec', desc: 'Maximum electrical, water, and climate systems.' },
    ],
    specs: [
      { category: 'Berths', value: '2–4' }, { category: 'Wheelbase', value: 'LWB (L3/L4)' },
      { category: 'Water', value: '80L fresh + grey' }, { category: 'Battery', value: '300–400Ah LiFePO4' },
      { category: 'Solar', value: '400–600W' }, { category: 'Cooktop', value: 'Twin induction' },
      { category: 'Fridge', value: 'Isotherm 130L Elegant' }, { category: 'Wet room', value: 'Full' },
      { category: 'Heating', value: 'Webasto hydronic' }, { category: 'Inverter', value: 'Victron 3000W' },
      { category: 'Conversion from', value: '£70,000' },
    ],
  },
  crag: {
    name: 'CRAG', tagline: 'The Expedition Machine',
    description: 'No road required.',
    longDesc: 'The CRAG is built on 4WD and AWD platforms and is designed around the assumption that you will go somewhere no other van can follow. Lifted suspension, full underbody armour, onboard air, differential lockers, a winch, and 600W of solar power. The interior is a fully self-sufficient living system — capable of running indefinitely without external power, water, or roads. The CRAG is not for everyone. That is the point.',
    spec: { berths: '2–4', size: '4WD/AWD', from: '£88,000' },
    highlights: ['— 4WD/AWD platform mandatory', '— Van Compass or Agile Offroad suspension', '— Underbody armour', '— Onboard air + differential lockers', '— 400–600Ah lithium', '— 600W solar'],
    vans: [
      { name: 'Iveco Daily', model: '70C 4×4', body: 'LWB', badge: 'True 4×4 — body on frame' },
      { name: 'Mercedes Sprinter', model: '319 4×4', body: 'L3H2', badge: 'Best Sprinter platform' },
      { name: 'Ford Transit', model: 'Trail 4WD', body: 'L3H2', badge: 'AWD available' },
    ],
    options: [
      { title: 'Full belly armour', desc: 'Engine, fuel, diff, and transfer case.' },
      { title: 'Warn Zeon winch', desc: 'Premium synthetic rope, bumper-integrated.' },
      { title: 'ARB twin compressor', desc: 'Full onboard air: tyres, tools, locker actuation.' },
      { title: 'External trail kitchen', desc: 'Alkota slide-out rear kitchen. Stainless top.' },
      { title: 'Lazer + Baja full system', desc: 'TR-750 grille + LP4 pillars + rack system.' },
      { title: 'Expedition recovery kit', desc: 'Boards, rope, shackles, hi-lift, full bag.' },
    ],
    specs: [
      { category: 'Berths', value: '2–4' }, { category: 'Drivetrain', value: '4WD or AWD only' },
      { category: 'Suspension', value: 'Van Compass or Agile Offroad' }, { category: 'Battery', value: '400–600Ah LiFePO4' },
      { category: 'Solar', value: '600W' }, { category: 'Winch', value: 'Warn 9,500lb–Zeon' },
      { category: 'Lockers', value: 'Agency6 ARB front + rear' }, { category: 'Air', value: 'ARB twin + system' },
      { category: 'Inverter', value: 'Victron 3000–5000W' }, { category: 'Conversion from', value: '£88,000' },
    ],
  },
  commission: {
    name: 'COMMISSION', tagline: 'Fully Bespoke',
    description: 'No limits. We build it exactly as you imagined.',
    longDesc: 'The Commission programme is for clients who have something exact in mind — and don\'t want to start from a template. Every Commission build begins with an extended discovery session. We learn exactly what you want, where you go, and what you need the van to do. From there, we produce a full specification document, layout drawing, and detailed quote before a deposit changes hands. Commission builds start at £90,000 and have no upper limit.',
    spec: { berths: 'Any', size: 'Any', from: '£90,000' },
    highlights: ['— Any platform, any layout', '— Extended discovery session included', '— Full 3D renders available', '— Alkota-fabricated bespoke elements', '— No standard starting point', '— 14–22 week lead time'],
    vans: [
      { name: 'Any platform', model: 'Subject to discovery', body: 'Any' },
    ],
    options: [
      { title: 'Full bespoke fabrication', desc: 'No standard components if not required.' },
      { title: '3D renders', desc: 'Full photorealistic renders before build begins.' },
      { title: 'Project management', desc: 'Dedicated point of contact throughout.' },
      { title: 'Handover programme', desc: 'Full day at the workshop, systems training.' },
    ],
    specs: [
      { category: 'Starting from', value: '£90,000' }, { category: 'Upper limit', value: 'None' },
      { category: 'Lead time', value: '14–22 weeks from deposit' }, { category: 'Discovery session', value: 'Included' },
      { category: '3D renders', value: 'Available on request' }, { category: 'Platform', value: 'Any' },
    ],
  },
}

export async function generateStaticParams() {
  return (['holt', 'dale', 'fell', 'crag', 'commission'] as LayoutKey[]).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = layoutData[params.slug as LayoutKey]
  if (!data) return {}
  return {
    title: `${data.name} | ${data.tagline} | Alkota Van Conversions`,
    description: data.description,
  }
}

export default function ConversionLayoutPage({ params }: { params: { slug: string } }) {
  const data = layoutData[params.slug as LayoutKey]
  if (!data) notFound()
  const isLight = params.slug === 'holt' || params.slug === 'dale' || params.slug === 'commission'

  return (
    <>
      {/* Hero — typographic only */}
      <section style={{ background: 'var(--alkota-obsidian)' }} className="pt-40 pb-20 px-6 md:px-10 lg:px-20 text-center">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-6" style={{ color: 'rgba(244,241,236,0.35)' }}>Alkota Conversion</div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h1
            className="font-display font-extrabold text-alkota-chalk uppercase tracking-[-0.02em] leading-none mb-6"
            style={{ fontSize: 'clamp(72px, 12vw, 140px)' }}
          >
            {data.name}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="font-body text-[16px]" style={{ color: 'rgba(244,241,236,0.6)' }}>{data.tagline}.</p>
        </RevealOnScroll>
      </section>

      {/* Description + highlights */}
      <section style={{ background: 'var(--alkota-chalk)' }} className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <p className="font-body text-[15px] leading-[1.9]" style={{ color: 'var(--alkota-obsidian)' }}>{data.longDesc}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col gap-2">
              {data.highlights.map((h) => (
                <div key={h} className="font-body text-[14px] leading-[2]" style={{ color: 'var(--alkota-stone)' }}>{h}</div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Van options */}
      <section style={{ background: 'var(--alkota-linen)' }} className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-10" style={{ color: 'var(--alkota-stone)' }}>Base Van Options</div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.vans.map((van, i) => (
              <RevealOnScroll key={van.name} delay={i * 0.08}>
                <div
                  className="p-6 border transition-all duration-250 cursor-pointer"
                  style={{ borderColor: 'var(--alkota-stone)', borderRadius: 0 }}
                  onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--alkota-forest)')}
                  onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--alkota-stone)')}
                >
                  <div className="font-display font-bold text-[20px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>{van.name}</div>
                  <div className="font-mono text-[10px] mb-1" style={{ color: 'var(--alkota-stone)' }}>{van.model}</div>
                  <div className="font-mono text-[10px] mb-3" style={{ color: 'var(--alkota-stone)' }}>{van.body}</div>
                  {van.badge && (
                    <span className="font-mono text-[8px] px-2 py-1" style={{ background: 'var(--alkota-forest)', color: 'var(--alkota-chalk)', borderRadius: '2px' }}>
                      {van.badge}
                    </span>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Full spec table */}
      <section style={{ background: 'var(--alkota-obsidian)' }} className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-10" style={{ color: 'rgba(244,241,236,0.35)' }}>Full Specification</div>
          </RevealOnScroll>
          <table className="w-full max-w-2xl spec-table">
            <tbody>
              {data.specs.map((row) => (
                <tr key={row.category}>
                  <td className="font-mono text-[9px] uppercase tracking-[0.08em] w-48" style={{ color: 'rgba(244,241,236,0.4)' }}>{row.category}</td>
                  <td className="font-body text-[14px]" style={{ color: 'rgba(244,241,236,0.8)' }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Options grid */}
      <section style={{ background: 'var(--alkota-chalk)' }} className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-site mx-auto">
          <RevealOnScroll>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-10" style={{ color: 'var(--alkota-stone)' }}>Available Options</div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.options.map((opt, i) => (
              <RevealOnScroll key={opt.title} delay={i * 0.06}>
                <div className="border p-6" style={{ borderColor: 'rgba(25,28,20,0.1)', borderRadius: 0 }}>
                  <div className="h-10 w-full mb-4" style={{ background: 'var(--alkota-forest)', opacity: 0.12 }} />
                  <div className="font-body font-medium text-[14px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>{opt.title}</div>
                  <p className="font-body text-[12px] leading-relaxed mb-4" style={{ color: 'var(--alkota-stone)' }}>{opt.desc}</p>
                  <Link href={`/configure?layout=${params.slug}`} className="font-body font-medium text-[11px] no-underline" style={{ color: 'var(--alkota-forest)' }}>
                    + Add in configurator
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Configure CTA */}
      <section style={{ background: 'var(--alkota-forest)' }} className="py-20 px-6 text-center">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.5)' }}>Ready to build?</div>
          <h2 className="font-display font-bold text-alkota-chalk text-[32px] mb-3">Configure your {data.name}</h2>
          <p className="font-body text-[14px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(244,241,236,0.65)' }}>
            Start with the {data.name} layout and spec every component using the Alkota Builder.
          </p>
          <Link href={`/configure?layout=${params.slug}`} className="btn btn-ghost">Configure {data.name} →</Link>
        </RevealOnScroll>
      </section>
    </>
  )
}
