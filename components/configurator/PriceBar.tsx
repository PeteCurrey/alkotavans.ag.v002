'use client'

export default function PriceBar({
  basePrice,
  optionsTotal,
  onReset
}: {
  basePrice: number
  optionsTotal: number
  onReset: () => void
}) {
  const formatPrice = (num: number) => {
    return '£' + num.toLocaleString('en-GB')
  }

  return (
    <div className="h-16 w-full border-t border-[rgba(25,28,20,0.1)] px-6 md:px-12 flex items-center justify-between" style={{ background: 'var(--alkota-chalk)' }}>
      <div className="flex items-center gap-8">
        <button
          onClick={onReset}
          className="font-mono text-[9px] uppercase tracking-[0.1em] transition-colors duration-200"
          style={{ color: 'rgba(25,28,20,0.4)' }}
        >
          Reset
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
          <span className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: 'rgba(25,28,20,0.4)' }}>
            Base Conversion
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--alkota-obsidian)' }}>
            {formatPrice(basePrice)}
          </span>
        </div>
        <div className="hidden md:block h-6 w-px bg-[rgba(25,28,20,0.1)]" />
        <div className="hidden md:flex flex-col items-end">
          <span className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: 'rgba(25,28,20,0.4)' }}>
            Options Total
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--alkota-obsidian)' }}>
            +{formatPrice(optionsTotal)}
          </span>
        </div>
        <div className="hidden md:block h-6 w-px bg-[rgba(25,28,20,0.1)]" />
        <div className="flex flex-col items-end">
          <span className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: 'var(--alkota-forest)' }}>
            Est. Total
          </span>
          <span className="font-display font-bold text-[16px]" style={{ color: 'var(--alkota-obsidian)' }}>
            {formatPrice(basePrice + optionsTotal)}
          </span>
        </div>
      </div>
    </div>
  )
}
