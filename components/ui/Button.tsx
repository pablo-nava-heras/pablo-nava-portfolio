'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  href?: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-glow hover:shadow-glow',
  secondary:
    'border border-border-default text-on-surface-secondary hover:border-accent hover:text-accent bg-transparent',
  ghost:
    'text-on-surface-secondary hover:text-on-surface hover:bg-surface-tertiary bg-transparent',
}

export function Button({
  variant = 'primary',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...(props as ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
