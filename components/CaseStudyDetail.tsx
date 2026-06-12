'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/types'

interface Props {
  study: CaseStudy
  prev: CaseStudy | null
  next: CaseStudy | null
}

const trendIcons = { up: TrendingUp, down: TrendingDown, neutral: Minus }
const trendColors = { up: 'text-emerald-400', down: 'text-accent', neutral: 'text-on-surface-muted' }

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
}

function ProjectImages({ study }: { study: CaseStudy }) {
  if (study.slug === 'coe-diseno-estrategico') {
    return (
      <motion.section {...fadeUp}>
        <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
          Visualización del proyecto
        </h2>
        <figure className="flex flex-col gap-3">
          <div className="overflow-hidden border border-border-default bg-surface-secondary" style={{ borderRadius: 12 }}>
            <Image
              src="/projects/coe-areas.png"
              alt="Ecosistema colaborativo del CoE — áreas aliadas y contactos clave"
              width={1200}
              height={800}
              className="w-full h-auto block"
            />
          </div>
          <figcaption className="text-xs text-on-surface-muted text-center">
            Ecosistema colaborativo del CoE — áreas aliadas y contactos clave
          </figcaption>
        </figure>
      </motion.section>
    )
  }

  if (study.slug === 'banorte-tarjeta-favorita') {
    return (
      <motion.section {...fadeUp}>
        <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
          Antes y después
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: '/projects/tarjeta-antes.png', label: 'Antes' },
            { src: '/projects/tarjeta-despues.png', label: 'Después' },
          ].map(({ src, label }) => (
            <figure key={label} className="flex flex-col gap-2">
              <div className="overflow-hidden border border-border-default bg-surface-secondary" style={{ borderRadius: 12 }}>
                <Image
                  src={src}
                  alt={`Tarjeta Favorita — ${label}`}
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
              <figcaption className="text-xs font-medium text-on-surface-muted text-center tracking-wide uppercase">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.section>
    )
  }

  return null
}

export function CaseStudyDetail({ study, prev, next }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

      {/* Back */}
      <Link
        href="/proyectos"
        className="inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors mb-14"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a proyectos
      </Link>

      {/* Header */}
      <motion.header {...fadeUp} className="mb-12">
        <div className="flex items-baseline gap-4 mb-6">
          <span
            className="text-8xl font-bold tabular-nums leading-none select-none"
            style={{ color: `${study.accentColor}20` }}
          >
            {study.id}
          </span>
          <span className="text-on-surface-muted text-sm">{study.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-on-surface leading-tight mb-4">
          {study.title}
        </h1>
        <p className="text-xl text-on-surface-secondary leading-relaxed mb-10">
          {study.subtitle}
        </p>

        {/* 2-col info grid */}
        <div className="grid grid-cols-2 gap-6 p-6 bg-surface-secondary border border-border-default rounded-xl">
          <div>
            <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
              Rol
            </p>
            <p className="text-on-surface text-sm font-medium">{study.role}</p>
            <p className="text-on-surface-muted text-sm mt-1">{study.duration}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
              Disciplinas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="space-y-16">

        {study.problem && (
          <motion.section {...fadeUp}>
            <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
              El problema
            </h2>
            <p className="text-on-surface leading-relaxed">{study.problem}</p>
          </motion.section>
        )}

        {study.challenge && (
          <motion.section {...fadeUp}>
            <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
              El reto estratégico
            </h2>
            <p className="text-on-surface leading-relaxed">{study.challenge}</p>
          </motion.section>
        )}

        {study.solution && (
          <motion.section {...fadeUp}>
            <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
              La solución
            </h2>
            <p className="text-on-surface leading-relaxed">{study.solution}</p>
          </motion.section>
        )}

        {/* Project-specific images — between solution and results */}
        <ProjectImages study={study} />

        {study.results && study.results.length > 0 && (
          <motion.section {...fadeUp}>
            <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-6">
              Resultados e impacto
            </h2>
            <ul className="space-y-3">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${study.accentColor}18` }}
                  >
                    <Check className="w-3 h-3" style={{ color: study.accentColor }} />
                  </span>
                  <span className="text-on-surface leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Metrics */}
        <motion.section {...fadeUp}>
          <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-6">
            Métricas clave
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {study.metrics.map((metric) => {
              const Icon = trendIcons[metric.trend]
              return (
                <div
                  key={metric.label}
                  className="p-5 bg-surface-secondary border border-border-default rounded-xl"
                >
                  <div className={`flex items-center gap-1.5 mb-2 ${trendColors[metric.trend]}`}>
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-2xl font-bold tabular-nums text-on-surface">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-muted leading-tight">{metric.label}</p>
                </div>
              )
            })}
          </div>
        </motion.section>

      </div>

      {/* Navigation */}
      <motion.nav
        {...fadeUp}
        className="flex items-center justify-between mt-24 pt-8 border-t border-border-default gap-4"
      >
        {prev ? (
          <Link
            href={`/proyectos/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors min-w-0"
          >
            <ArrowLeft className="w-4 h-4 shrink-0 group-hover:-translate-x-1 transition-transform" />
            <span className="line-clamp-1">{prev.title}</span>
          </Link>
        ) : (
          <Link
            href="/proyectos"
            className="group flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Proyectos
          </Link>
        )}

        {next && (
          <Link
            href={`/proyectos/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors ml-auto min-w-0"
          >
            <span className="line-clamp-1">{next.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </motion.nav>

    </main>
  )
}
