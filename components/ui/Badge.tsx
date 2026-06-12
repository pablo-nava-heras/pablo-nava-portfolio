interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-tertiary text-on-surface-secondary border border-border-default',
    accent: 'bg-accent-muted text-accent border border-accent/20',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
