'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, CheckCircle2 } from 'lucide-react'
import { metodologias, artifactLibrary } from '@/lib/metodologias'

export function Metodologias() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [openArtifact, setOpenArtifact] = useState<string | null>(null)

  const method = metodologias[activeMethod]
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

      {/* Header */}
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
        {metodologias.map((m, i) => (
          <button
            key={m.id}
            onClick={() => handleMethodChange(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeMethod === i
                ? 'bg-accent text-white shadow-sm'
                : 'bg-surface-secondary border border-border-default text-on-surface-muted hover:text-on-surface hover:border-accent/30'
            }`}
          >
            {m.name}
          </button>
        ))}
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
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-4">
                Cuándo usar
              </p>
              <ul className="space-y-2">
                {method.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: '#378ADD' }}
                    />
                    <span className="text-on-surface text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stages */}
          <div className="p-6 bg-surface-secondary border border-border-default rounded-2xl">
            {/* Stage pills + prev/next */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={goPrev}
                disabled={activeStage === 0}
                className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface hover:border-accent/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
                {method.stages.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActiveStage(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      activeStage === i
                        ? 'bg-accent/15 text-accent border border-accent/40'
                        : 'border border-border-default text-on-surface-muted hover:text-on-surface hover:border-accent/20'
                    }`}
                  >
                    <span className="font-mono opacity-60">{String(i + 1).padStart(2, '0')}</span>
                    {s.name}
                  </button>
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={activeStage === method.stages.length - 1}
                className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface hover:border-accent/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stage detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${method.id}-stage-${activeStage}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22 }}
                className="bg-surface-tertiary border border-border-subtle rounded-xl p-6"
              >
                {/* Stage header */}
                <div className="mb-5">
                  <p className="text-xs font-mono text-on-surface-muted mb-1">
                    Etapa {String(activeStage + 1).padStart(2, '0')} · {method.stages.length} total
                  </p>
                  <h3 className="text-2xl font-bold text-on-surface">{stage.name}</h3>
                </div>

                {stage.question && (
                  <p className="text-accent font-medium mb-3 leading-snug">
                    {stage.question}
                  </p>
                )}

                {stage.objective && (
                  <p className="text-on-surface-secondary text-sm mb-6 leading-relaxed">
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
                      <div className="flex flex-wrap gap-1.5">
                        {stage.roles.map((role) => (
                          <span
                            key={role}
                            className="px-2.5 py-1 bg-surface-secondary border border-border-default rounded-full text-xs text-on-surface-secondary"
                          >
                            {role}
                          </span>
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
                      <ul className="space-y-1.5">
                        {stage.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-on-surface-secondary">
                            <span className="text-accent mt-0.5 shrink-0">—</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Artifacts */}
                {stage.artifacts.length > 0 && (
                  <div className="pt-5 border-t border-border-subtle">
                    <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                      Artefactos — haz clic para ver detalles
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.artifacts.map((name) => (
                        <button
                          key={name}
                          onClick={() => setOpenArtifact(name)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                          style={{
                            backgroundColor: 'rgba(55,138,221,0.08)',
                            borderColor: 'rgba(55,138,221,0.25)',
                            color: '#378ADD',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(55,138,221,0.16)'
                            e.currentTarget.style.borderColor = 'rgba(55,138,221,0.45)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(55,138,221,0.08)'
                            e.currentTarget.style.borderColor = 'rgba(55,138,221,0.25)'
                          }}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Artifact Modal */}
      <AnimatePresence>
        {openArtifact && artifact && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setOpenArtifact(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg"
            >
              <div className="bg-surface-secondary border border-border-default rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-lg font-bold text-on-surface pr-4 leading-snug">
                    {artifact.name}
                  </h3>
                  <button
                    onClick={() => setOpenArtifact(null)}
                    className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface hover:border-accent/40 transition-all shrink-0"
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
