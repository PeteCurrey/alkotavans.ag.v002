interface BadgeProps {
  children: React.ReactNode
  variant?: 'forest' | 'chalk' | 'stone'
  className?: string
}

export default function Badge({
  children,
  variant = 'forest',
  className = '',
}: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    forest: {
      background: 'var(--alkota-forest)',
      color: 'var(--alkota-chalk)',
    },
    chalk: {
      background: 'transparent',
      color: 'rgba(244,241,236,0.5)',
      border: '1px solid rgba(244,241,236,0.2)',
    },
    stone: {
      background: 'rgba(122,125,107,0.2)',
      color: 'var(--alkota-stone)',
    },
  }

  return (
    <span
      className={`font-mono text-[8px] uppercase tracking-[0.1em] px-2 py-1 ${className}`}
      style={{ borderRadius: '2px', ...styles[variant] }}
    >
      {children}
    </span>
  )
}
