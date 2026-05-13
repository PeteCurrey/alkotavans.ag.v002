export default function StagesRail({
  totalStages,
  currentStage,
  onStageSelect
}: {
  totalStages: number
  currentStage: number
  onStageSelect: (stage: number) => void
}) {
  return (
    <div className="flex justify-center items-center gap-2 h-16 w-full border-b border-[rgba(25,28,20,0.1)] px-6" style={{ background: 'var(--alkota-chalk)' }}>
      {Array.from({ length: totalStages }).map((_, i) => {
        const isActive = i + 1 === currentStage
        const isPast = i + 1 < currentStage
        return (
          <button
            key={i}
            onClick={() => onStageSelect(i + 1)}
            className="transition-all duration-300 flex items-center justify-center relative group"
            style={{ width: '24px', height: '24px' }}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? '8px' : '4px',
                height: isActive ? '8px' : '4px',
                background: isActive ? 'var(--alkota-forest)' : isPast ? 'rgba(25,28,20,0.8)' : 'rgba(25,28,20,0.2)',
              }}
            />
            {/* Hover tooltip */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono text-[9px] whitespace-nowrap" style={{ color: 'var(--alkota-stone)' }}>
              Stage {i + 1}
            </div>
          </button>
        )
      })}
    </div>
  )
}
