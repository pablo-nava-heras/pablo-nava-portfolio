'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/lib/data'
import type { CaseStudy } from '@/types'
import { Badge } from '@/components/ui/Badge'

const FILTERS = ['Todos', 'Estrategia', 'Producto', 'UX Research', 'IA'] as const
type Filter = (typeof FILTERS)[number]

const FILTER_TAGS: Record<Exclude<Filter, 'Todos'>, string[]> = {
  Estrategia: ['Estrategia', 'DesignOps', 'Liderazgo', 'B2B', 'OKRs', 'Product Strategy', 'UX Leadership', 'Behavioral Design'],
  Producto: ['Mobile App', 'Employee Experience', 'B2E', 'Product Design', 'Producto', 'Product Leadership'],
  'UX Research': ['UX Research', 'User Centered Design', 'Web Portal', 'Journey Mapping'],
  IA: ['IA', 'IA aplicada', 'Cursor', 'Claude', 'n8n'],
}

function matchesFilter(study: CaseStudy, filter: Filter): boolean {
  if (filter === 'Todos') return true
  return study.tags.some((tag) => FILTER_TAGS[filter].includes(tag))
}

function ProjectCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group relative bg-surface-secondary border border-border-default rounded-2xl p-7 flex flex-col gap-5 hover:border-accent/30 transition-colors duration-300"
    >
      <Link
        href={`/proyectos/${study.slug}`}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`Ver proyecto: ${study.title}`}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <span
          className="text-5xl font-bold tabular-nums leading-none select-none"
          style={{ color: `${study.accentColor}20` }}
        >
          {study.id}
        </span>
        <div
          className="relative z-20 w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          style={{ borderColor: `${study.accentColor}50`, color: study.accentColor }}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-on-surface leading-snug mb-1">
          {study.title}
        </h2>
        <p className="text-sm text-on-surface-muted">
          {study.company} · {study.year}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {study.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-on-surface-secondary leading-relaxed line-clamp-2 mt-auto">
        {study.description}
      </p>
    </motion.article>
  )
}

export function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const filtered = caseStudies.filter((s) => matchesFilter(s, activeFilter))

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
          Proyectos
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-on-surface leading-tight mb-2">
          Proyectos
        </h1>
        <p className="text-on-surface-secondary">
          7+ años de trabajo en banca, producto e IA
        </p>
      </motion.header>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-accent text-white'
                : 'bg-surface-secondary border border-border-default text-on-surface-muted hover:text-on-surface hover:border-accent/40'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((study, i) => (
            <ProjectCard key={study.id} study={study} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-on-surface-muted text-sm mt-8"
        >
          No hay proyectos en esta categoría todavía.
        </motion.p>
      )}

    </main>
  )
}
