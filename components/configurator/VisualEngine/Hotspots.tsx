'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useConfigurator } from '../../../lib/store/ConfiguratorContext';

interface HotspotProps {
  x: number; // percentage
  y: number; // percentage
  label: string;
  onClick: () => void;
}

export function Hotspot({ x, y, label, onClick }: HotspotProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
      className="absolute w-6 h-6 -ml-3 -mt-3 group z-30 pointer-events-auto"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="absolute inset-0 bg-alkota-copper rounded-full animate-ping opacity-30" />
      <div className="absolute inset-1.5 bg-alkota-copper rounded-full border border-alkota-white/50 shadow-[0_0_15px_rgba(150,97,63,0.5)]" />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-alkota-obsidian text-alkota-chalk text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 whitespace-nowrap border border-alkota-white/10 backdrop-blur-md translate-y-2 group-hover:translate-y-0">
        {label}
      </div>
    </motion.button>
  );
}

export function HotspotOverlay({ view }: { view: string }) {
  const { setStage } = useConfigurator();

  // Mapping hotspots to specific stage IDs
  return (
    <div className="absolute inset-0 pointer-events-none">
      {view === 'front' && (
        <>
          <Hotspot x={50} y={40} label="Stage 4: External Lighting" onClick={() => setStage(4)} />
          <Hotspot x={30} y={75} label="Stage 2: Suspension" onClick={() => setStage(2)} />
          <Hotspot x={70} y={75} label="Stage 7: Wheels & Steps" onClick={() => setStage(7)} />
        </>
      )}
      {view === 'side' && (
        <>
          <Hotspot x={50} y={15} label="Stage 5: Roof Systems" onClick={() => setStage(5)} />
          <Hotspot x={20} y={50} label="Stage 8: Side Storage" onClick={() => setStage(8)} />
        </>
      )}
    </div>
  );
}
