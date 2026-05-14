'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { configuratorData } from './configuratorData'
import StagesRail from './StagesRail'
import { VehicleRenderer } from './VisualEngine/VehicleRenderer'
import PriceBar from './PriceBar'
import OptionsPanel from './OptionsPanel'
import { AnimatePresence, motion } from 'framer-motion'
import { useConfigurator } from '@/lib/store/ConfiguratorContext'
import { LayoutPanelLeft, Box } from 'lucide-react'

export default function ConfiguratorShell({ initialLayout }: { initialLayout?: string }) {
  const router = useRouter()
  const { toggleOption, resetConfig, selectedOptionIds, currentStage, setStage } = useConfigurator()
  const [mobileView, setMobileView] = useState<'visual' | 'options'>('visual')

  useEffect(() => {
    if (initialLayout && selectedOptionIds.length === 0) {
      if (initialLayout === 'crag') {
        toggleOption('plat-iveco')
        toggleOption('dt-4wd')
      }
      if (initialLayout === 'fell') {
        toggleOption('plat-transit')
        toggleOption('wb-lwb')
      }
      if (initialLayout === 'dale') {
        toggleOption('plat-sprinter')
        toggleOption('wb-mwb')
      }
      if (initialLayout === 'holt') {
        toggleOption('plat-man')
        toggleOption('wb-swb')
      }
    }
  }, [initialLayout, selectedOptionIds.length, toggleOption])

  const totalStages = configuratorData.length

  const handleReset = () => {
    resetConfig()
    if (initialLayout) router.replace('/configure')
  }

  const currentStageData = configuratorData.find(s => s.id === currentStage)

  if (!currentStageData) return null

  return (
    <div className="flex flex-col h-screen overflow-hidden pt-16 md:pt-20 bg-alkota-chalk">
      {/* Top Rail */}
      <StagesRail
        totalStages={totalStages}
        currentStage={currentStage}
        onStageSelect={setStage}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* MOBILE VIEW TOGGLE */}
        <div className="lg:hidden flex border-b border-alkota-obsidian/10 bg-alkota-obsidian text-alkota-chalk">
          <button 
            onClick={() => setMobileView('visual')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest ${mobileView === 'visual' ? 'bg-alkota-forest text-alkota-chalk' : 'text-alkota-chalk/50'}`}
          >
            <LayoutPanelLeft size={14} /> Preview
          </button>
          <button 
            onClick={() => setMobileView('options')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest ${mobileView === 'options' ? 'bg-alkota-forest text-alkota-chalk' : 'text-alkota-chalk/50'}`}
          >
            <Box size={14} /> Options
          </button>
        </div>

        {/* Left: Render + Navigation */}
        <div className={`w-full lg:w-1/2 flex flex-col h-full border-b lg:border-b-0 border-alkota-obsidian/10 relative bg-alkota-obsidian ${mobileView === 'options' ? 'hidden lg:flex' : 'flex'}`}>
          <VehicleRenderer />
          
          {/* Stage Navigation Overlays */}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex justify-between items-center pointer-events-none z-40">
            <button
              onClick={() => setStage(Math.max(1, currentStage - 1))}
              disabled={currentStage === 1}
              className={`btn btn-ghost pointer-events-auto bg-alkota-obsidian/50 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 ${currentStage === 1 ? 'opacity-0' : 'opacity-100'}`}
            >
              ← <span className="hidden md:inline ml-1">Previous</span>
            </button>
            <button
              onClick={() => {
                if (mobileView === 'visual') setMobileView('options')
                else setStage(Math.min(totalStages, currentStage + 1))
              }}
              className="btn btn-solid pointer-events-auto shadow-lg px-4 py-3 md:px-6 md:py-4"
            >
              {currentStage === totalStages ? 'Review Build →' : 'Next Stage →'}
            </button>
          </div>
        </div>

        {/* Right: Options Panel */}
        <div className={`w-full lg:w-1/2 h-full relative overflow-y-auto ${mobileView === 'visual' ? 'hidden lg:block' : 'block'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="p-6 md:p-8"
            >
              <OptionsPanel
                stageData={currentStageData}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Sticky Price Bar */}
      <PriceBar onReset={handleReset} />
    </div>
  )
}
