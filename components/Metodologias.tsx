'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft, ChevronRight, X, ArrowLeft, Map,
  Lightbulb, Gem, UserCircle, Layers, BarChart2, Brain,
  Users, CheckCircle2, Settings2, MessageCircle, Target, FileCheck,
  TrendingUp,
} from 'lucide-react'
import { metodologias, artifactLibrary } from '@/lib/metodologias'
import type { Methodology, Stage, StageSubcategory } from '@/lib/metodologias'

/* ── Types ──────────────────────────────────────────────────────── */
type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

/* ── Method config ──────────────────────────────────────────────── */
const METHOD_META: Record<string, { color: string; Icon: LucideIcon }> = {
  'design-thinking': { color: '#378ADD', Icon: Lightbulb  as LucideIcon },
  'doble-diamante':  { color: '#8B5CF6', Icon: Gem        as LucideIcon },
  'ucd':             { color: '#10B981', Icon: UserCircle  as LucideIcon },
  'cinco-planos':    { color: '#F59E0B', Icon: Layers      as LucideIcon },
  'six-sigma':       { color: '#EF4444', Icon: BarChart2   as LucideIcon },
  'bemate':          { color: '#EC4899', Icon: Brain       as LucideIcon },
}

/* ── Stage colors (positional across all methodologies) ─────────── */
const STAGE_COLORS = ['#378ADD', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#EC4899']

/* ── Helper ─────────────────────────────────────────────────────── */
function wa(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

/* ── ArtifactChip (rounded-full, hover color) ───────────────────── */
function ArtifactChip({ name, color, onClick }: { name: string; color: string; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="px-3 py-1 rounded-full text-xs border transition-all duration-150 cursor-pointer"
      style={{
        borderColor: hov ? color : 'var(--color-border-default)',
        backgroundColor: hov ? wa(color, 0.06) : 'transparent',
        color: hov ? color : 'var(--color-on-surface-secondary)',
      }}
    >
      {name}
    </button>
  )
}

/* ── ArtifactModal ───────────────────────────────────────────────── */
function ArtifactModal({ name, onClose }: { name: string; onClose: () => void }) {
  const artifact = artifactLibrary[name]
  if (!artifact) return null
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg max-h-[85vh] overflow-y-auto"
      >
        <div className="bg-surface-secondary border border-border-default rounded-2xl p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-on-surface pr-4 leading-snug">{artifact.name}</h3>
              <p className="text-xs text-on-surface-muted mt-0.5">Artifact Details</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface transition-all shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Description */}
            <p className="text-sm text-on-surface leading-relaxed">{artifact.description}</p>

            {/* When & How — blue */}
            <div className="rounded-xl p-4" style={{ backgroundColor: wa('#378ADD', 0.08) }}>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 shrink-0" style={{ color: '#378ADD' }} />
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#378ADD' }}>
                  Cuándo y cómo usar
                </p>
              </div>
              <p className="text-sm text-on-surface leading-relaxed">{artifact.howToUse}</p>
            </div>

            {/* Expected Output — green */}
            <div className="rounded-xl p-4" style={{ backgroundColor: wa('#10B981', 0.08) }}>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#10B981' }} />
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#10B981' }}>
                  Output esperado
                </p>
              </div>
              <p className="text-sm text-on-surface leading-relaxed">{artifact.output}</p>
            </div>

            {/* Tip — amber */}
            <div className="rounded-xl p-4" style={{ backgroundColor: wa('#F59E0B', 0.08) }}>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 shrink-0" style={{ color: '#F59E0B' }} />
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F59E0B' }}>
                  Tip
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#F59E0B' }}>
                Úsalo junto con otros artefactos de la etapa para validar con mayor rigor y reducir sesgos del equipo.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-5 w-full py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </>
  )
}

/* ── MapView ─────────────────────────────────────────────────────── */
function MapView({ method, onBack, onArtifact }: {
  method: Methodology
  onBack: () => void
  onArtifact: (n: string) => void
}) {
  const meta = METHOD_META[method.id]

  return (
    <motion.div
      key="map"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Regresar
      </button>

      {/* Method card header */}
      <div className="flex items-start gap-4 p-5 bg-surface-secondary border border-border-default rounded-xl mb-8">
        {meta && (
          <div className="flex items-center justify-center shrink-0"
            style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: wa(meta.color, 0.12) }}>
            <meta.Icon className="w-5 h-5" style={{ color: meta.color }} />
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold text-on-surface mb-1">{method.name} — Mapa completo</h2>
          <p className="text-sm text-on-surface-secondary leading-relaxed">{method.description}</p>
        </div>
      </div>

      {/* Stages grid */}
      <div className="overflow-x-auto pb-4">
        <div
          className="grid gap-3 min-w-max"
          style={{ gridTemplateColumns: `repeat(${method.stages.length}, 220px)` }}
        >
          {method.stages.map((stage, i) => {
            const sc = STAGE_COLORS[i] ?? STAGE_COLORS[0]
            return (
              <div
                key={stage.name}
                className="flex flex-col border border-border-default rounded-xl overflow-hidden bg-surface-secondary"
              >
                {/* Column header */}
                <div
                  className="px-3 py-2.5 border-b flex items-center gap-2"
                  style={{
                    backgroundColor: wa(sc, 0.10),
                    borderColor: wa(sc, 0.30),
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    style={{ backgroundColor: sc }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: sc }}>{stage.name}</span>
                </div>

                {/* Artifacts — subcategories if available, else flat list */}
                <div className="p-3 flex flex-col gap-3 flex-1">
                  {stage.subcategories && stage.subcategories.length > 0 ? (
                    stage.subcategories.map((sub: StageSubcategory) => (
                      <div key={sub.name}>
                        <p className="text-[10px] font-bold mb-1.5 px-1" style={{ color: sc }}>
                          {sub.name}
                        </p>
                        <div className="flex flex-col gap-0.5">
                          {sub.items.map((name) => (
                            <MapArtifactRow key={name} name={name} color={sc} onClick={() => onArtifact(name)} />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      {stage.artifacts.map((name) => (
                        <MapArtifactRow key={name} name={name} color={sc} onClick={() => onArtifact(name)} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

/* ── MapArtifactRow ──────────────────────────────────────────────── */
function MapArtifactRow({ name, color, onClick }: { name: string; color: string; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2 w-full text-left px-2 py-1 rounded-md text-xs transition-all duration-150 cursor-pointer"
      style={{
        backgroundColor: hov ? wa(color, 0.08) : 'transparent',
        color: hov ? color : 'var(--color-on-surface-secondary)',
      }}
    >
      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
      {name}
    </button>
  )
}

/* ── StageDetail ─────────────────────────────────────────────────── */
function StageDetail({ stage, stageIndex, total, stageColor, onArtifact }: {
  stage: Stage
  stageIndex: number
  total: number
  stageColor: string
  onArtifact: (n: string) => void
}) {
  return (
    <motion.div
      key={stageIndex}
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
      className="border border-border-default rounded-2xl overflow-hidden"
    >
      {/* Stage card header */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b border-border-default"
        style={{ backgroundColor: wa(stageColor, 0.08) }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
            style={{ backgroundColor: stageColor }}
          >
            {stageIndex + 1}
          </span>
          <div>
            <p className="text-lg font-bold text-on-surface leading-tight">{stage.name}</p>
            {stage.objective && (
              <p className="text-xs text-on-surface-muted mt-0.5 line-clamp-1">{stage.objective}</p>
            )}
          </div>
        </div>
        <p className="text-xs font-semibold shrink-0 ml-4" style={{ color: stageColor }}>
          Stage {stageIndex + 1} of {total}
        </p>
      </div>

      {/* Stage body */}
      <div className="p-5 space-y-4">
        {/* Question card */}
        {stage.question && (
          <div
            className="rounded-lg px-4 py-3.5 border-l-[3px]"
            style={{ backgroundColor: wa(stageColor, 0.06), borderLeftColor: stageColor }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <MessageCircle className="w-3.5 h-3.5 shrink-0" style={{ color: stageColor }} />
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: stageColor }}>
                Pregunta Clave
              </p>
            </div>
            <p className="text-sm font-medium italic leading-relaxed" style={{ color: stageColor }}>
              {stage.question}
            </p>
          </div>
        )}

        {/* Objective */}
        {stage.objective && (
          <div className="flex items-start gap-3">
            <Target className="w-4 h-4 shrink-0 mt-0.5 text-on-surface-muted" />
            <div>
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-1">
                Objetivo de la etapa
              </p>
              <p className="text-sm text-on-surface leading-relaxed">{stage.objective}</p>
            </div>
          </div>
        )}

        {/* Roles + Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stage.roles && stage.roles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-3.5 h-3.5 shrink-0" style={{ color: stageColor }} />
                <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase">
                  Roles que suelen participar
                </p>
              </div>
              <ul className="space-y-1.5">
                {stage.roles.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: stageColor }} />
                    <span className="text-xs text-on-surface-secondary">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stage.deliverables && stage.deliverables.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase">
                  Entregables esperados
                </p>
              </div>
              <ul className="space-y-1.5">
                {stage.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500" />
                    <span className="text-xs text-on-surface-secondary">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Section 6 — Clickable artifacts */}
      {stage.artifacts.length > 0 && (
        <div className="px-5 pb-5">
          <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
            Artefactos — haz clic para ver detalles
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.artifacts.map((name) => (
              <ArtifactChip key={name} name={name} color={stageColor} onClick={() => onArtifact(name)} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

/* ── Main ────────────────────────────────────────────────────────── */
export function Metodologias() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [openArtifact, setOpenArtifact] = useState<string | null>(null)
  const [showMap, setShowMap] = useState(false)

  const method = metodologias[activeMethod]
  const { color, Icon: MethodIcon } = METHOD_META[method.id] ?? { color: '#378ADD', Icon: Lightbulb as LucideIcon }
  const stage = method.stages[activeStage]
  const stageColor = STAGE_COLORS[activeStage] ?? STAGE_COLORS[0]

  const switchMethod = (i: number) => { setActiveMethod(i); setActiveStage(0); setShowMap(false) }

  return (
    <div className="bg-surface min-h-screen">

      {/* ── Page hero ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Metodologías de diseño</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface leading-tight mb-4">
            Cómo estructuro el trabajo
          </h1>
          <p className="text-on-surface-secondary text-lg leading-relaxed mb-6 max-w-2xl">
            Seis frameworks que han guiado mi proceso en 7+ años de trabajo en banca, producto e IA.
            Cada uno tiene su contexto, sus artefactos y su razón de ser.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-surface-muted">
            <span>6 metodologías</span>
            <span>·</span>
            <span>40+ artefactos</span>
            <span>·</span>
            <span>Con detalle de uso real</span>
          </div>
        </motion.div>
      </div>

      {/* ── SECCIÓN 1 — Tabs (sticky) ────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-surface border-b border-border-default">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {metodologias.map((m, i) => {
              const meta = METHOD_META[m.id]
              if (!meta) return null
              const { color: c, Icon: TabIcon } = meta
              const isActive = activeMethod === i
              return (
                <button
                  key={m.id}
                  onClick={() => switchMethod(i)}
                  className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 relative"
                  style={isActive ? {
                    backgroundColor: wa(c, 0.12),
                    borderBottomColor: c,
                    color: c,
                  } : {
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    color: 'var(--color-on-surface-muted)',
                  }}
                >
                  <TabIcon className="w-5 h-5 shrink-0" />
                  {m.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Method content ───────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <AnimatePresence mode="wait">
              {showMap ? (
                <MapView key="map" method={method} onBack={() => setShowMap(false)} onArtifact={setOpenArtifact} />
              ) : (
                <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }} className="space-y-8">

                  {/* ── SECCIÓN 2 — Method header ─────────────── */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      {/* Icon badge */}
                      <div className="flex items-center justify-center shrink-0"
                        style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: wa(color, 0.12) }}>
                        <MethodIcon className="w-6 h-6" style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold text-on-surface leading-tight mb-1">{method.name}</h2>
                        <p className="text-sm text-on-surface-secondary leading-relaxed">{method.description}</p>
                      </div>
                    </div>

                    {/* Objective card */}
                    <div className="p-4 bg-surface-secondary border border-border-default rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                        <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase">
                          Objetivo de la metodología
                        </p>
                      </div>
                      <p className="text-sm text-on-surface-secondary leading-relaxed">{method.objective}</p>
                    </div>
                  </div>

                  {/* ── SECCIÓN 3 — When to use ───────────────── */}
                  {method.whenToUse && method.whenToUse.length > 0 && (
                    <div className="rounded-xl p-4 border" style={{
                      backgroundColor: wa(color, 0.06),
                      borderColor: wa(color, 0.20),
                    }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Settings2 className="w-4 h-4 shrink-0" style={{ color }} />
                        <p className="text-sm font-semibold text-on-surface">¿Cuándo usar esta metodología?</p>
                      </div>
                      <ul className="space-y-2">
                        {method.whenToUse.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                            <span className="text-sm text-on-surface">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── SECCIÓN 4 — Stages & artifacts grid ──── */}
                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-on-surface">Etapas y artefactos</h3>
                      <p className="text-xs text-on-surface-muted mt-0.5">
                        Artefactos por etapa · Roles que suelen participar
                      </p>
                    </div>

                    <div className="overflow-x-auto pb-2">
                      <div
                        className="grid gap-3 min-w-max"
                        style={{ gridTemplateColumns: `repeat(${method.stages.length}, minmax(160px, 1fr))` }}
                      >
                        {method.stages.map((s, i) => {
                          const sc = STAGE_COLORS[i] ?? STAGE_COLORS[0]
                          const isActive = activeStage === i
                          return (
                            <div key={s.name} className="border border-border-default rounded-xl overflow-hidden">
                              {/* Column header */}
                              <button
                                onClick={() => setActiveStage(i)}
                                className="w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors"
                                style={{
                                  backgroundColor: isActive ? wa(sc, 0.14) : wa(sc, 0.10),
                                  borderBottom: `1px solid ${wa(sc, isActive ? 0.4 : 0.15)}`,
                                }}
                              >
                                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                                  style={{ backgroundColor: sc }}>
                                  {i + 1}
                                </span>
                                <span className="text-xs font-semibold leading-tight" style={{ color: sc }}>
                                  {s.name}
                                </span>
                              </button>
                              {/* Artifacts list */}
                              <div className="p-2 flex flex-col gap-0.5">
                                {s.artifacts.slice(0, 7).map((name) => (
                                  <MapArtifactRow key={name} name={name} color={sc} onClick={() => setOpenArtifact(name)} />
                                ))}
                                {s.artifacts.length > 7 && (
                                  <p className="text-[10px] text-on-surface-muted px-2 py-1">
                                    +{s.artifacts.length - 7} más
                                  </p>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Ver mapa completo */}
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setShowMap(true)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-default bg-surface-secondary text-on-surface-secondary text-sm font-medium hover:text-on-surface hover:border-accent/30 transition-all"
                      >
                        <Map className="w-4 h-4" />
                        Ver mapa completo
                      </button>
                    </div>
                  </div>

                  {/* ── SECCIÓN 5 — Active stage detail ──────── */}
                  <div className="border-t border-border-default pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-semibold text-on-surface">Detalle de etapa</h3>
                      <div className="flex gap-2">
                        <button onClick={() => setActiveStage((s) => Math.max(s - 1, 0))}
                          disabled={activeStage === 0}
                          className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button onClick={() => setActiveStage((s) => Math.min(s + 1, method.stages.length - 1))}
                          disabled={activeStage === method.stages.length - 1}
                          className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <StageDetail
                        key={`${method.id}-${activeStage}`}
                        stage={stage}
                        stageIndex={activeStage}
                        total={method.stages.length}
                        stageColor={stageColor}
                        onArtifact={setOpenArtifact}
                      />
                    </AnimatePresence>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Artifact modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {openArtifact && (
          <ArtifactModal key={openArtifact} name={openArtifact} onClose={() => setOpenArtifact(null)} />
        )}
      </AnimatePresence>

    </div>
  )
}

