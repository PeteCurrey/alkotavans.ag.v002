import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfigurator } from '../../../lib/store/ConfiguratorContext';
import { getOrderedLayers, LightingMode } from './LayerManager';
import { HotspotOverlay } from './Hotspots';
import { Label } from '../../ui/Typography';
import { Sun, Moon, Tent } from 'lucide-react';

type ViewMode = 'front' | 'side' | 'rear' | 'roof';

export function VehicleRenderer() {
  const { selectedOptionIds } = useConfigurator();
  const [view, setView] = useState<ViewMode>('front');
  const [lightingMode, setLightingMode] = useState<LightingMode>('day');

  const layers = useMemo(() => {
    return getOrderedLayers(selectedOptionIds, lightingMode);
  }, [selectedOptionIds, lightingMode]);

  return (
    <div className="relative w-full h-full bg-alkota-obsidian overflow-hidden group flex flex-col">
      {/* TOP CONTROLS: LIGHTING */}
      <div className="absolute top-6 left-6 z-30 flex gap-2">
        {(['day', 'dusk', 'camp'] as LightingMode[]).map(mode => (
          <button
            key={mode}
            onClick={() => setLightingMode(mode)}
            className={`p-2 rounded-full border transition-all ${
              lightingMode === mode 
                ? 'bg-alkota-copper border-alkota-copper text-alkota-chalk' 
                : 'bg-alkota-obsidian/40 border-alkota-white/10 text-alkota-chalk/50 hover:border-alkota-white/30'
            }`}
          >
            {mode === 'day' && <Sun size={14} />}
            {mode === 'dusk' && <Moon size={14} />}
            {mode === 'camp' && <Tent size={14} />}
          </button>
        ))}
      </div>

      {/* MAIN RENDER AREA */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* BASE CHASSIS */}
            <img 
              src={`/images/renders/${view}/base-chassis.png`} 
              alt="Base Chassis"
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* DYNAMIC LAYERS */}
            {layers.map(layer => (
              <img
                key={layer.id}
                src={`/images/renders/${view}/${layer.asset}.png`}
                alt={layer.id}
                style={{ zIndex: layer.zIndex }}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
            ))}

            {/* INTERACTIVE HOTSPOTS */}
            <HotspotOverlay view={view} />
          </motion.div>
        </AnimatePresence>

        {/* CINEMATIC LIGHTING OVERLAYS */}
        <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          lightingMode === 'day' ? 'opacity-0' : 
          lightingMode === 'dusk' ? 'opacity-40 bg-blue-900/20 mix-blend-multiply' : 
          'opacity-60 bg-alkota-obsidian/40 mix-blend-multiply'
        }`} />
        
        <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-alkota-obsidian/80 ${
          lightingMode === 'day' ? 'opacity-20' : 'opacity-60'
        }`} />
      </div>

      {/* BOTTOM CONTROLS: VIEW SELECTOR */}
      <div className="p-6 bg-alkota-obsidian/40 border-t border-alkota-white/5 flex justify-center gap-8 backdrop-blur-md">
        {(['front', 'side', 'rear', 'roof'] as ViewMode[]).map(v => (
          <button
            key={v}
            onClick={() => setView(v)}
            className="flex flex-col items-center gap-2 group/btn"
          >
            <div className={`h-0.5 w-8 transition-all ${view === v ? 'bg-alkota-copper' : 'bg-transparent group-hover/btn:bg-alkota-white/20'}`} />
            <Label className={`text-[9px] transition-colors ${view === v ? 'text-alkota-chalk' : 'text-alkota-chalk/30 group-hover/btn:text-alkota-chalk/60'}`}>
              {v}
            </Label>
          </button>
        ))}
      </div>
    </div>
  );
}
