'use client'

import { useState } from 'react'
import { useConfigurator } from '@/lib/store/ConfiguratorContext'
import { Label } from '@/components/ui/Typography'
import { CapabilityBar, CapabilityGrid } from '@/components/ui/CapabilityBars'
import { Scale, Info, ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PriceBar({
  onReset
}: {
  onReset: () => void
}) {
  const { totalPrice, totalPayload, scores, warnings } = useConfigurator()
  const [isExpanded, setIsExpanded] = useState(false)

  const formatPrice = (num: number) => {
    return '£' + num.toLocaleString('en-GB')
  }

  return (
    <div className="relative z-50">
      {/* EXPANDABLE DETAIL DRAWER (MOBILE) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="bg-alkota-chalk border-t border-alkota-obsidian/10 overflow-hidden lg:hidden"
          >
            <div className="p-6 space-y-8">
               <CapabilityGrid>
                <CapabilityBar label="Off-Grid" score={scores.offGrid} />
                <CapabilityBar label="Winter" score={scores.winter} />
                <CapabilityBar label="Expedition" score={scores.expedition} />
                <CapabilityBar label="Luxury" score={scores.luxury} />
              </CapabilityGrid>
              
              <div className="flex items-center justify-between pt-4 border-t border-alkota-obsidian/5">
                <div className="flex items-center gap-3">
                  <Scale size={16} className={totalPayload > 3200 ? 'text-red-500' : 'text-alkota-stone'} />
                  <div className="flex flex-col">
                    <Label className="text-[8px] opacity-50 uppercase">Payload Impact</Label>
                    <span className={`font-mono text-[11px] ${totalPayload > 3200 ? 'text-red-500 font-bold' : 'text-alkota-obsidian'}`}>
                      {totalPayload.toLocaleString()} KG
                    </span>
                  </div>
                </div>
                <button
                  onClick={onReset}
                  className="font-mono text-[9px] uppercase tracking-widest text-alkota-stone"
                >
                  Reset Build
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN BAR */}
      <div className="h-20 lg:h-24 w-full border-t border-alkota-obsidian/10 px-6 lg:px-8 flex items-center justify-between bg-alkota-chalk pb-safe">
        
        {/* LEFT: Meta & Resets (Desktop) */}
        <div className="hidden lg:flex items-center gap-12">
          <button
            onClick={onReset}
            className="font-mono text-[9px] uppercase tracking-widest text-alkota-stone hover:text-alkota-obsidian transition-colors"
          >
            Reset Build
          </button>

          <div className="flex items-center gap-4 border-l border-alkota-obsidian/10 pl-12">
            <Scale size={16} className={totalPayload > 3200 ? 'text-red-500' : 'text-alkota-stone'} />
            <div className="flex flex-col">
              <Label className="text-[8px] opacity-50 uppercase">Est. Payload Impact</Label>
              <span className={`font-mono text-[11px] ${totalPayload > 3200 ? 'text-red-500 font-bold' : 'text-alkota-obsidian'}`}>
                {totalPayload.toLocaleString()} KG
              </span>
            </div>
            {warnings.length > 0 && (
              <div className="flex items-center gap-2 text-alkota-copper animate-pulse">
                <Info size={14} />
                <Label className="text-alkota-copper text-[8px]">{warnings.length} Technical Warnings</Label>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE TOGGLE / PAYLOAD SMALL */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-alkota-stone"
          >
            {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            <Label className="text-[9px] uppercase tracking-widest">Build Stats</Label>
          </button>
          {warnings.length > 0 && <div className="w-1.5 h-1.5 rounded-full bg-alkota-copper animate-pulse" />}
        </div>

        {/* MIDDLE: CAPABILITY SCORES (Desktop) */}
        <div className="hidden xl:flex items-center gap-8 flex-1 max-w-2xl px-12">
          <CapabilityBar label="Off-Grid" score={scores.offGrid} className="flex-1" />
          <CapabilityBar label="Winter" score={scores.winter} className="flex-1" />
          <CapabilityBar label="Expedition" score={scores.expedition} className="flex-1" />
        </div>

        {/* RIGHT: PRICING */}
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="flex flex-col items-end">
            <Label className="text-[7px] lg:text-[8px] text-alkota-forest mb-0.5 lg:mb-1 uppercase tracking-widest font-bold">Est. Total</Label>
            <span className="font-display font-extrabold text-xl lg:text-2xl text-alkota-obsidian">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
