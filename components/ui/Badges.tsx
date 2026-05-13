import React from "react";
import { Info, ShieldAlert, Scale, CheckCircle2 } from "lucide-react";

export function ConsultationBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-[10px] font-mono tracking-widest uppercase bg-alkota-obsidian border border-alkota-copper/50 text-alkota-copper px-2 py-1 ${className}`}>
      <Info size={12} className="mr-1.5" /> Consultation Required
    </span>
  );
}

export function LegalityBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-[10px] font-mono tracking-widest uppercase bg-alkota-obsidian border border-red-500/50 text-red-400 px-2 py-1 ${className}`}>
      <ShieldAlert size={12} className="mr-1.5" /> Road Legality Check
    </span>
  );
}

export function PayloadBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-[10px] font-mono tracking-widest uppercase bg-alkota-obsidian border border-orange-500/50 text-orange-400 px-2 py-1 ${className}`}>
      <Scale size={12} className="mr-1.5" /> Payload Review
    </span>
  );
}

export function RecommendedBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-[10px] font-mono tracking-widest uppercase bg-alkota-forest text-alkota-chalk px-2 py-1 border border-alkota-forest ${className}`}>
      <CheckCircle2 size={12} className="mr-1.5" /> Alkota Recommended
    </span>
  );
}
