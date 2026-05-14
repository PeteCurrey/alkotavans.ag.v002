'use client'

import { useRef, useEffect } from 'react'
import { configuratorData } from './configuratorData'

export default function StagesRail({
  totalStages,
  currentStage,
  onStageSelect
}: {
  totalStages: number
  currentStage: number
  onStageSelect: (stage: number) => void
}) {
  const railRef = useRef<HTMLDivElement>(null)

  // Auto-scroll active stage into view on mobile
  useEffect(() => {
    if (!railRef.current) return
    const activeEl = railRef.current.querySelector('[data-active="true"]') as HTMLElement
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [currentStage])

  return (
    <div className="h-12 md:h-14 w-full border-b border-alkota-obsidian/10 bg-alkota-chalk flex-shrink-0">
      {/* Desktop: dot-based progress */}
      <div className="hidden md:flex justify-center items-center gap-3 h-full px-6 overflow-x-auto scrollbar-hide">
        {Array.from({ length: totalStages }).map((_, i) => {
          const stageNum = i + 1
          const isActive = stageNum === currentStage
          const isPast = stageNum < currentStage
          const stageTitle = configuratorData.find(s => s.id === stageNum)?.title ?? `${stageNum}`
          return (
            <button
              key={i}
              data-active={isActive}
              onClick={() => onStageSelect(stageNum)}
              className="relative flex flex-col items-center justify-center gap-1 group min-w-fit"
              title={stageTitle}
            >
              <div className={`rounded-full transition-all duration-300 ${
                isActive 
                  ? 'w-2 h-2 bg-alkota-forest' 
                  : isPast 
                    ? 'w-1.5 h-1.5 bg-alkota-obsidian/60' 
                    : 'w-1.5 h-1.5 bg-alkota-obsidian/15 group-hover:bg-alkota-obsidian/30'
              }`} />
              {/* Hover tooltip */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono text-[8px] uppercase tracking-widest text-alkota-stone whitespace-nowrap bg-alkota-chalk border border-alkota-obsidian/10 px-2 py-1">
                {stageTitle}
              </div>
            </button>
          )
        })}

        {/* Linear progress track */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-alkota-forest/30 transition-all duration-500"
          style={{ width: `${((currentStage - 1) / (totalStages - 1)) * 100}%` }} />
      </div>

      {/* Mobile: horizontal scroll with named chips */}
      <div
        ref={railRef}
        className="md:hidden flex items-center h-full gap-1 px-4 overflow-x-auto scrollbar-hide"
      >
        {Array.from({ length: totalStages }).map((_, i) => {
          const stageNum = i + 1
          const isActive = stageNum === currentStage
          const isPast = stageNum < currentStage
          const stageTitle = configuratorData.find(s => s.id === stageNum)?.title ?? `${stageNum}`
          return (
            <button
              key={i}
              data-active={isActive}
              onClick={() => onStageSelect(stageNum)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 border transition-all duration-200 ${
                isActive
                  ? 'bg-alkota-forest text-alkota-chalk border-alkota-forest'
                  : isPast
                    ? 'bg-transparent text-alkota-obsidian/60 border-alkota-obsidian/15'
                    : 'bg-transparent text-alkota-stone border-alkota-obsidian/10'
              }`}
            >
              <span className={`font-mono text-[9px] ${isActive ? 'text-alkota-chalk/60' : 'text-alkota-stone/50'}`}>
                {String(stageNum).padStart(2, '0')}
              </span>
              <span className="font-body text-[11px] font-medium uppercase tracking-wide">
                {stageTitle}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
