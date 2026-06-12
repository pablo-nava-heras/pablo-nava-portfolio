'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { navItems } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/components/ThemeProvider'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { theme, toggle, mounted } = useTheme()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-border-default'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-on-surface font-semibold text-sm tracking-tight hover:text-accent transition-colors"
        >
          Pablo Nava
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1.5 text-sm text-on-surface-secondary hover:text-on-surface transition-colors rounded-md hover:bg-surface-tertiary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface hover:border-accent/40 transition-all"
            >
              {theme === 'dark'
                ? <Sun className="w-3.5 h-3.5" />
                : <Moon className="w-3.5 h-3.5" />}
            </button>
          )}

          <Button
            href="/contacto"
            variant="secondary"
            className="hidden md:inline-flex text-xs"
          >
            Hablemos
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}
