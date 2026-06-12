import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
}

export function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`bg-surface-secondary border border-border-default rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </Tag>
  )
}
