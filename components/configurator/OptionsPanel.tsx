import { motion } from 'framer-motion'

type OptionData = {
  id: string
  name: string
  brand: string
  detail: string
  price?: number
}

type SubcategoryData = {
  title: string
  options: OptionData[]
}

type StageData = {
  id: number
  title: string
  tag: string
  description: string
  subcategories: SubcategoryData[]
}

export default function OptionsPanel({
  stageData,
  selections,
  onSelectOption
}: {
  stageData: StageData
  selections: Record<string, string>
  onSelectOption: (categoryId: string, optionId: string) => void
}) {
  const formatPrice = (num?: number) => {
    if (num === undefined) return ''
    if (num === 0) return 'Included'
    return '+£' + num.toLocaleString('en-GB')
  }

  return (
    <div className="h-full w-full overflow-y-auto bg-[var(--alkota-linen)] border-l border-[rgba(25,28,20,0.08)] flex flex-col">
      <div className="p-8 md:p-12 pb-6 border-b border-[rgba(25,28,20,0.08)]">
        <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--alkota-forest)' }}>
          {stageData.tag}
        </div>
        <h2 className="font-display font-extrabold text-[32px] leading-tight mb-4" style={{ color: 'var(--alkota-obsidian)' }}>
          {stageData.title}
        </h2>
        <p className="font-body text-[13px] leading-relaxed max-w-[400px]" style={{ color: 'var(--alkota-stone)' }}>
          {stageData.description}
        </p>
      </div>

      <div className="flex-1 p-8 md:p-12 pt-8 flex flex-col gap-12">
        {stageData.subcategories.map((sub, i) => {
          // Create a stable key for the category based on its title
          const catKey = `${stageData.id}-${sub.title.replace(/\s+/g, '-').toLowerCase()}`
          
          return (
            <div key={sub.title}>
              <h3 className="font-mono text-[10px] tracking-[0.08em] uppercase mb-6" style={{ color: 'var(--alkota-obsidian)' }}>
                {sub.title}
              </h3>
              <div className="flex flex-col gap-3">
                {sub.options.map((opt) => {
                  const isSelected = selections[catKey] === opt.id
                  return (
                    <motion.button
                      key={opt.id}
                      onClick={() => onSelectOption(catKey, opt.id)}
                      className="w-full text-left p-4 transition-all duration-200 border bg-[var(--alkota-chalk)]"
                      style={{
                        borderColor: isSelected ? 'var(--alkota-forest)' : 'rgba(25,28,20,0.08)',
                        boxShadow: isSelected ? '0 0 0 1px var(--alkota-forest)' : 'none',
                        borderRadius: 0,
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-body font-bold text-[14px]" style={{ color: 'var(--alkota-obsidian)' }}>
                            {opt.name}
                          </div>
                          {opt.brand && (
                            <div className="font-mono text-[9px] uppercase tracking-[0.05em] mt-1" style={{ color: 'var(--alkota-forest)' }}>
                              {opt.brand}
                            </div>
                          )}
                        </div>
                        {opt.price !== undefined && (
                          <div className="font-mono text-[10px]" style={{ color: 'var(--alkota-stone)' }}>
                            {formatPrice(opt.price)}
                          </div>
                        )}
                      </div>
                      {opt.detail && (
                        <div className="font-body text-[12px]" style={{ color: 'var(--alkota-stone)' }}>
                          {opt.detail}
                        </div>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
