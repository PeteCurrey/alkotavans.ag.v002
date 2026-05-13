import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'ghost' | 'ghost-dark'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  fullWidth?: boolean
}

const sizeMap = {
  sm: 'text-[9px] py-2 px-4',
  md: 'text-[11px] py-3.5 px-7',
  lg: 'text-[12px] py-4 px-9',
}

export default function Button({
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  children,
  className = '',
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const cls = `btn btn-${variant} ${sizeMap[size]} ${fullWidth ? 'w-full justify-center' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
