'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { hero } from '@/lib/data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-muted text-accent border border-accent/20">
            <Sparkles className="w-3 h-3" />
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface tracking-tight leading-[1.1] mb-6"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-on-surface-secondary max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm text-on-surface-muted mb-4 tracking-wide"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 text-xs text-on-surface-muted mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Strategic Design Lead · Ciudad de México
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="#work" variant="primary">
            {hero.ctaPrimary}
          </Button>
          <Button href="#contact" variant="secondary">
            {hero.ctaSecondary}
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-muted hover:text-on-surface-secondary transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
