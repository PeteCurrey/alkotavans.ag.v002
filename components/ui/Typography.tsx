import React from "react";

export function Display({ children, className = "", as: Component = "h1" }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return <Component className={`font-display font-extrabold uppercase tracking-tighter text-alkota-obsidian ${className}`}>{children}</Component>;
}

export function Hero({ children, className = "", as: Component = "h1" }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return <Component className={`font-display font-bold uppercase tracking-tight text-alkota-obsidian ${className}`}>{children}</Component>;
}

export function Body({ children, className = "", as: Component = "p" }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return <Component className={`font-body text-alkota-obsidian ${className}`}>{children}</Component>;
}

export function Label({ children, className = "", as: Component = "span" }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return <Component className={`font-mono text-xs uppercase tracking-widest text-alkota-stone ${className}`}>{children}</Component>;
}

export function Caption({ children, className = "", as: Component = "p" }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return <Component className={`font-body text-sm text-alkota-stone/80 ${className}`}>{children}</Component>;
}
