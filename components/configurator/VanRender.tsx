'use client'

import { motion } from 'framer-motion'

export default function VanRender({
  selectedPlatformId,
  selectedSuspensionId,
  selectedRoofId
}: {
  selectedPlatformId?: string
  selectedSuspensionId?: string
  selectedRoofId?: string
}) {
  // A clean, abstract technical side-profile van SVG
  const isLifted = selectedSuspensionId && selectedSuspensionId !== 'susp-std'
  const isExpedition = selectedSuspensionId === 'susp-exp' || selectedSuspensionId === 'susp-fox'
  const hasRack = selectedRoofId && selectedRoofId.includes('rrack')

  const wheelSize = isExpedition ? 28 : isLifted ? 26 : 24
  const bodyY = isExpedition ? 30 : isLifted ? 35 : 40

  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-[var(--alkota-chalk)] overflow-hidden relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(25, 28, 20, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(25, 28, 20, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Dynamic Van SVG */}
      <motion.svg
        viewBox="0 0 400 200"
        className="w-full max-w-[800px] text-[var(--alkota-obsidian)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke">
          {/* Ground line */}
          <line x1="20" y1="160" x2="380" y2="160" strokeOpacity="0.2" />

          {/* Van Body (animates Y position based on suspension) */}
          <motion.g
            initial={false}
            animate={{ y: bodyY }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            {/* Main outline */}
            <path d="M50,100 L50,40 C50,30 60,20 70,20 L300,20 C310,20 320,25 330,35 L360,70 C365,75 370,85 370,95 L370,100 L50,100 Z" />
            <path d="M50,100 L370,100 L370,110 C370,115 365,120 360,120 L330,120 A24,24 0 0,0 282,120 L138,120 A24,24 0 0,0 90,120 L60,120 C55,120 50,115 50,110 Z" />

            {/* Windows */}
            <path d="M220,35 L310,35 L340,65 L220,65 Z" strokeOpacity="0.3" />
            <path d="M120,35 L200,35 L200,65 L120,65 Z" strokeOpacity="0.3" />
            <path d="M70,35 L100,35 L100,65 L70,65 Z" strokeOpacity="0.3" />

            {/* Roof Rack Element (conditional) */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: hasRack ? 1 : 0, y: hasRack ? 0 : 10 }}
              transition={{ duration: 0.4 }}
            >
              <line x1="60" y1="15" x2="300" y2="15" strokeWidth="2" />
              <line x1="80" y1="15" x2="80" y2="20" />
              <line x1="150" y1="15" x2="150" y2="20" />
              <line x1="220" y1="15" x2="220" y2="20" />
              <line x1="280" y1="15" x2="280" y2="20" />
            </motion.g>

            {/* Wheels */}
            <motion.circle
              cx="114"
              cy="120"
              initial={false}
              animate={{ r: wheelSize }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
            <motion.circle
              cx="114"
              cy="120"
              initial={false}
              animate={{ r: wheelSize - 6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              strokeOpacity="0.4"
            />
            <motion.circle
              cx="306"
              cy="120"
              initial={false}
              animate={{ r: wheelSize }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
            <motion.circle
              cx="306"
              cy="120"
              initial={false}
              animate={{ r: wheelSize - 6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              strokeOpacity="0.4"
            />
          </motion.g>
        </g>
      </motion.svg>
      
      <div className="absolute bottom-8 left-8">
        <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(25,28,20,0.4)]">
          Technical Render
        </div>
      </div>
    </div>
  )
}
