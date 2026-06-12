'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingDown, TrendingUp, Minus } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
}

const trendIcons = { up: TrendingUp, down: TrendingDown, neutral: Minus }
const trendColors = {
  up: 'text-emerald-400',
  down: 'text-accent',
  neutral: 'text-on-surface-muted',
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      whileHover={{ y: -4 }}
      className="group relative bg-surface-secondary border border-border-default rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-accent/20"
    >
      {/* Stretched link */}
      <Link
        href={`/proyectos/${study.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver caso de estudio: ${study.title}`}
      />

      {/* Top accent line */}
      <div
        className="h-[3px] w-full"
        style={{ backgroundColor: study.accentColor }}
      />

      {/* Cover */}
      <div
        className="relative h-[132px] flex flex-col justify-between px-6 pt-4 pb-5 overflow-hidden"
        style={{ backgroundColor: study.coverColor }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 70% 30%, ${study.accentColor}1a 0%, transparent 65%)`,
          }}
        />

        {/* Company + year */}
        <div className="relative flex items-center justify-between">
          <span className="text-xs font-medium text-on-surface-muted/70 tracking-wide">
            {study.company}
          </span>
          <span className="text-xs text-on-surface-muted/50">{study.year}</span>
        </div>

        {/* Number + arrow */}
        <div className="relative flex items-end justify-between">
          <span
            className="text-7xl font-bold tracking-tighter leading-none select-none"
            style={{ color: `${study.accentColor}28` }}
          >
            {study.id}
          </span>
          <motion.div
            className="relative z-20 w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-200"
            style={{ borderColor: `${study.accentColor}40`, color: study.accentColor }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-semibold text-on-surface mb-2 leading-snug">
          {study.title}
        </h3>

        <p className="text-sm text-on-surface-secondary leading-relaxed mb-4 line-clamp-2">
          {study.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {study.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border-subtle">
          {study.metrics.map((metric) => {
            const Icon = trendIcons[metric.trend]
            return (
              <div key={metric.label}>
                <div className={`flex items-center gap-1 mb-0.5 ${trendColors[metric.trend]}`}>
                  <Icon className="w-3 h-3 shrink-0" />
                  <span className="text-sm font-semibold tabular-nums">{metric.value}</span>
                </div>
                <p className="text-[11px] text-on-surface-muted leading-tight">{metric.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}
