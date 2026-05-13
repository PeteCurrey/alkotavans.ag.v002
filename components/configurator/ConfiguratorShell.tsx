'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { configuratorData } from './configuratorData'
import StagesRail from './StagesRail'
import VanRender from './VanRender'
import PriceBar from './PriceBar'
import OptionsPanel from './OptionsPanel'
import { AnimatePresence, motion } from 'framer-motion'

export default function ConfiguratorShell({ initialLayout }: { initialLayout?: string }) {
  const router = useRouter()
  const [currentStage, setCurrentStage] = useState(1)
  const [selections, setSelections] = useState<Record<string, string>>({})

  // Set default selection based on layout query param if provided
  useEffect(() => {
    if (initialLayout && !selections['1-base-van']) {
      if (initialLayout === 'crag') setSelections(prev => ({ ...prev, '1-base-van': 'plat-iveco', '1-drivetrain': 'dt-4wd' }))
      if (initialLayout === 'fell') setSelections(prev => ({ ...prev, '1-base-van': 'plat-transit', '1-wheelbase': 'wb-lwb' }))
      if (initialLayout === 'dale') setSelections(prev => ({ ...prev, '1-base-van': 'plat-sprinter', '1-wheelbase': 'wb-mwb' }))
      if (initialLayout === 'holt') setSelections(prev => ({ ...prev, '1-base-van': 'plat-man', '1-wheelbase': 'wb-swb' }))
    }
  }, [initialLayout, selections])

  const totalStages = configuratorData.length

  const handleSelectOption = (categoryId: string, optionId: string) => {
    setSelections(prev => ({
      ...prev,
      [categoryId]: optionId
    }))
  }

  const handleReset = () => {
    setSelections({})
    setCurrentStage(1)
    if (initialLayout) router.replace('/configure')
  }

  const currentStageData = configuratorData.find(s => s.id === currentStage)

  // Calculate pricing
  const basePriceMap: Record<string, number> = {
    'holt': 42000,
    'dale': 55000,
    'fell': 70000,
    'crag': 88000
  }
  const basePrice = initialLayout && basePriceMap[initialLayout] ? basePriceMap[initialLayout] : 50000

  const optionsTotal = useMemo(() => {
    let total = 0
    // Flatten all options to find prices
    const allOptions = configuratorData.flatMap(s => s.subcategories.flatMap(sub => sub.options))
    Object.values(selections).forEach(selectedId => {
      const opt = allOptions.find(o => o.id === selectedId)
      if (opt && opt.price) {
        total += opt.price
      }
    })
    return total
  }, [selections])

  if (!currentStageData) return null

  // Extract keys for render hints
  const selectedSuspensionId = selections['2-suspension-upgrade']
  const selectedRoofId = selections['5-roof-rack-system']

  return (
    <div className="flex flex-col h-screen overflow-hidden pt-20" style={{ background: 'var(--alkota-chalk)' }}>
      {/* Top Rail */}
      <StagesRail
        totalStages={totalStages}
        currentStage={currentStage}
        onStageSelect={setCurrentStage}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left: Render + Navigation */}
        <div className="w-full lg:w-1/2 flex flex-col h-[40vh] lg:h-full border-b lg:border-b-0 border-[rgba(25,28,20,0.1)] relative">
          <VanRender
            selectedSuspensionId={selectedSuspensionId}
            selectedRoofId={selectedRoofId}
          />
          
          {/* Stage Navigation Overlays */}
          <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-center pointer-events-none">
            <button
              onClick={() => setCurrentStage(s => Math.max(1, s - 1))}
              disabled={currentStage === 1}
              className="btn btn-ghost pointer-events-auto bg-white/80 backdrop-blur-md"
              style={{ opacity: currentStage === 1 ? 0 : 1 }}
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentStage(s => Math.min(totalStages, s + 1))}
              className="btn btn-solid pointer-events-auto shadow-lg"
            >
              {currentStage === totalStages ? 'Review Build →' : 'Next Stage →'}
            </button>
          </div>
        </div>

        {/* Right: Options Panel */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <OptionsPanel
                stageData={currentStageData}
                selections={selections}
                onSelectOption={handleSelectOption}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Sticky Price Bar */}
      <PriceBar
        basePrice={basePrice}
        optionsTotal={optionsTotal}
        onReset={handleReset}
      />
    </div>
  )
}
