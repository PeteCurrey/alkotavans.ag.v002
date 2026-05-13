interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionLabel({
  children,
  light = false,
  className = '',
}: SectionLabelProps) {
  return (
    <div
      className={`label-mono ${className}`}
      style={{ color: light ? 'rgba(244,241,236,0.35)' : 'var(--alkota-stone)' }}
    >
      {children}
    </div>
  )
}
