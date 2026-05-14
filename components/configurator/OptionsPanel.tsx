'use client'

import { motion } from 'framer-motion'
import { useConfigurator } from '@/lib/store/ConfiguratorContext'
import { Display, Label, Body, Caption } from '@/components/ui/Typography'
import { CheckCircle2 } from 'lucide-react'

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
}: {
  stageData: StageData
}) {
  const { toggleOption, isOptionSelected } = useConfigurator()

  const formatPrice = (num?: number) => {
    if (num === undefined) return ''
    if (num === 0) return 'Included'
    return '+£' + num.toLocaleString('en-GB')
  }

  return (
    <div className="flex flex-col">
      {/* Stage header */}
      <div className="mb-8 md:mb-12">
        <Label className="text-alkota-forest mb-3 md:mb-4 block">
          {stageData.tag}
        </Label>
        <Display as="h2" className="text-3xl md:text-4xl mb-3 md:mb-4">
          {stageData.title}
        </Display>
        <Body className="text-alkota-stone text-sm md:text-base max-w-lg">
          {stageData.description}
        </Body>
      </div>

      {/* Subcategories */}
      <div className="space-y-10 md:space-y-16">
        {stageData.subcategories.map((sub) => (
          <div key={sub.title}>
            <Label className="text-alkota-obsidian mb-4 md:mb-6 block border-b border-alkota-obsidian/10 pb-2">
              {sub.title}
            </Label>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {sub.options.map((opt) => {
                const isSelected = isOptionSelected(opt.id)
                return (
                  <motion.button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={`w-full text-left p-4 md:p-6 transition-all duration-200 border ${
                      isSelected
                        ? 'border-alkota-forest bg-alkota-forest/5 shadow-[0_0_0_1px_#3A4D29]'
                        : 'border-alkota-obsidian/10 bg-alkota-chalk hover:border-alkota-obsidian/30 active:bg-alkota-obsidian/5'
                    }`}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-start mb-1.5 md:mb-2 gap-3">
                      <div className="flex-1 min-w-0">
                        <Body className={`font-bold text-[14px] md:text-[15px] leading-snug ${isSelected ? 'text-alkota-forest' : ''}`}>
                          {opt.name}
                        </Body>
                        {opt.brand && (
                          <Label className="text-alkota-forest text-[9px] md:text-[10px] mt-0.5 block">
                            {opt.brand}
                          </Label>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {opt.price !== undefined && (
                          <Label className="text-alkota-stone text-[9px] md:text-[10px]">
                            {formatPrice(opt.price)}
                          </Label>
                        )}
                        {isSelected && (
                          <CheckCircle2 size={16} className="text-alkota-forest flex-shrink-0" />
                        )}
                      </div>
                    </div>
                    {opt.detail && (
                      <Caption className="text-[11px] md:text-[12px] leading-relaxed">
                        {opt.detail}
                      </Caption>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile spacing buffer so content clears PriceBar */}
      <div className="h-4 md:h-0" />
    </div>
  )
}
