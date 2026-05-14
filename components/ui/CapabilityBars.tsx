'use client'

import React from "react";
import { motion } from "framer-motion";

interface CapabilityBarProps {
  label: string;
  score: number; // 0 to 10
  maxScore?: number;
  color?: string;
  className?: string;
}

export function CapabilityBar({ 
  label, 
  score, 
  maxScore = 10, 
  color = "bg-alkota-forest",
  className = ""
}: CapabilityBarProps) {
  const percentage = (score / maxScore) * 100;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-end">
        <span className="font-mono text-[10px] uppercase tracking-widest text-alkota-stone">{label}</span>
        <span className="font-mono text-[10px] text-alkota-obsidian">{score}/{maxScore}</span>
      </div>
      <div className="h-[2px] w-full bg-alkota-obsidian/5 relative overflow-hidden">
        <motion.div 
          className={`absolute inset-y-0 left-0 ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export function CapabilityGrid({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 ${className}`}>
      {children}
    </div>
  );
}
