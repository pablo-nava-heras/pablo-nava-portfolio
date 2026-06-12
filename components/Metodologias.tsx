'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft, ChevronRight, X,
  Lightbulb, Diamond, User, Layers, BarChart, Brain,
  Users, CheckCircle2,
} from 'lucide-react'
import { metodologias, artifactLibrary } from '@/lib/metodologias'

type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

interface MethodMeta { color: string; Icon: LucideIcon }

const METHOD_META: Record<string, MethodMeta> = {
  'design-thinking': { color: '#378ADD', Icon: Lightbulb as LucideIcon },
  'doble-diamante':  { color: '#8B5CF6', Icon: Diamond  as LucideIcon },
  'ucd':             { color: '#10B981', Icon: User     as LucideIcon },
  'cinco-planos':    { color: '#F59E0B', Icon: Layers   as LucideIcon },
  'six-sigma':       { color: '#EF4444', Icon: BarChart as LucideIcon },
  'bemate':          { color: '#EC4899', Icon: Brain    as LucideIcon },
}

function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function ArtifactChip({ name, color, onClick }: { name: string; color: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 bg-surface-secondary"
      style={{
        borderColor: hovered ? color : 'var(--color-border-default)',
        color: hovered ? color : 'var(--color-on-surface-secondary)',
      }}
    >
      {name}
    </button>
  )
}

export function Metodologias() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [openArtifact, setOpenArtifact] = useState<string | null>(null)

  const method = metodologias[activeMethod]
  const { color, Icon } = METHOD_META[method.id] ?? { color: '#378ADD', Icon: Lightbulb as LucideIcon }
  const stage = method.stages[activeStage]
  const artifact = openArtifact ? artifactLibrary[openArtifact] : null

  const handleMethodChange = (idx: number) => {
    setActiveMethod(idx)
    setActiveStage(0)
  }

  const goNext = () => setActiveStage((s) => Math.min(s + 1, method.stages.length - 1))
  const goPrev = () => setActiveStage((s) => Math.max(s - 1, 0))

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* Hero header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Metodologías de diseño
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface leading-tight mb-4">
            Cómo estructuro el trabajo
          </h1>
          <p className="text-on-surface-secondary text-lg leading-relaxed mb-6">
            Seis frameworks que han guiado mi proceso en 7+ años de trabajo en banca, producto e IA.
            Cada uno tiene su contexto, sus artefactos y su razón de ser.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-surface-muted">
            <span>6 metodologías</span>
            <span className="text-border-default">·</span>
            <span>40+ artefactos</span>
            <span className="text-border-default">·</span>
            <span>Con detalle de uso real</span>
          </div>
        </div>
      </motion.header>

      {/* Method tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-12"
      >
        {metodologias.map((m, i) => {
          const meta = METHOD_META[m.id]
          if (!meta) return null
          const { color: c, Icon: TabIcon } = meta
          const isActive = activeMethod === i
          return (
            <button
              key={m.id}
              onClick={() => handleMethodChange(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 border"
              style={
                isActive
                  ? { backgroundColor: withAlpha(c, 0.15), borderColor: c, color: c }
                  : { backgroundColor: 'transparent', borderColor: 'var(--color-border-default)', color: 'var(--color-on-surface-muted)' }
              }
            >
              <TabIcon className="w-3.5 h-3.5 shrink-0" />
              {m.name}
            </button>
          )
        })}
      </motion.div>

      {/* Method content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={method.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >

          {/* Description + Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 bg-surface-secondary border border-border-default rounded-xl">
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                Descripción
              </p>
              <p className="text-on-surface leading-relaxed text-sm">{method.description}</p>
            </div>
            <div className="p-6 bg-surface-secondary border border-border-default rounded-xl">
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                Objetivo
              </p>
              <p className="text-on-surface leading-relaxed text-sm">{method.objective}</p>
            </div>
          </div>

          {/* When to use */}
          {method.whenToUse && method.whenToUse.length > 0 && (
            <div className="mb-6 p-6 bg-surface-secondary border border-border-default rounded-xl">
              <p className="text-xs font-semibold text-on-surface-muted tracking-widests uppercase mb-4">
                Cuándo usar
              </p>
              <ul className="space-y-2">
                {method.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                    <span className="text-on-surface text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stages panel */}
          <div className="p-6 bg-surface-secondary border border-border-default rounded-2xl">

            {/* Stage navigation — numbered circles */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={goPrev}
                disabled={activeStage === 0}
                className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
                {method.stages.map((s, i) => {
                  const isActive = activeStage === i
                  return (
                    <button
                      key={s.name}
                      onClick={() => setActiveStage(i)}
                      title={s.name}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border-2 transition-all duration-200"
                      style={
                        isActive
                          ? { backgroundColor: color, borderColor: color, color: '#ffffff' }
                          : { backgroundColor: 'transparent', borderColor: withAlpha(color, 0.30), color: color }
                      }
                    >
                      {i + 1}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={goNext}
                disabled={activeStage === method.stages.length - 1}
                className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stage card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${method.id}-${activeStage}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22 }}
                className="rounded-xl overflow-hidden border border-border-subtle bg-surface-tertiary"
              >
                {/* Colored header */}
                <div
                  className="px-6 py-5"
                  style={{
                    backgroundColor: withAlpha(color, 0.10),
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color }}
                  >
                    Etapa {activeStage + 1} de {method.stages.length}
                  </p>
                  <h3 className="text-2xl font-bold text-on-surface">{stage.name}</h3>
                </div>

                <div className="p-6">
                  {/* Question box */}
                  {stage.question && (
                    <div
                      className="rounded-lg px-4 py-3 mb-5"
                      style={{ backgroundColor: withAlpha(color, 0.08) }}
                    >
                      <p className="text-sm font-medium leading-snug" style={{ color }}>
                        {stage.question}
                      </p>
                    </div>
                  )}

                  {/* Objective */}
                  {stage.objective && (
                    <p className="text-on-surface-secondary text-sm leading-relaxed mb-6">
                      {stage.objective}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Roles */}
                    {stage.roles && stage.roles.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                          Roles
                        </p>
                        <div className="space-y-2">
                          {stage.roles.map((role) => (
                            <div key={role} className="flex items-center gap-2">
                              <Users className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                              <span className="text-xs text-on-surface-secondary">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables */}
                    {stage.deliverables && stage.deliverables.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                          Entregables
                        </p>
                        <div className="space-y-2">
                          {stage.deliverables.map((d) => (
                            <div key={d} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500" />
                              <span className="text-xs text-on-surface-secondary">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Artifacts */}
                  {stage.artifacts.length > 0 && (
                    <div className="pt-5 border-t border-border-subtle">
                      <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                        Artefactos — clic para ver detalle
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stage.artifacts.map((name) => (
                          <ArtifactChip
                            key={name}
                            name={name}
                            color={color}
                            onClick={() => setOpenArtifact(name)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Artifact modal */}
      <AnimatePresence>
        {openArtifact && artifact && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setOpenArtifact(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg"
            >
              <div className="bg-surface-secondary border border-border-default rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-lg font-bold text-on-surface pr-4 leading-snug">
                    {artifact.name}
                  </h3>
                  <button
                    onClick={() => setOpenArtifact(null)}
                    className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface transition-all shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
                      Descripción
                    </p>
                    <p className="text-on-surface text-sm leading-relaxed">{artifact.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
                      Cuándo y cómo usar
                    </p>
                    <p className="text-on-surface text-sm leading-relaxed">{artifact.howToUse}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
                      Output esperado
                    </p>
                    <p className="text-on-surface text-sm leading-relaxed">{artifact.output}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  )
}
