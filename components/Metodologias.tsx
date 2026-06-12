'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft, ChevronRight, X, ArrowLeft, Map,
  Lightbulb, Diamond, User, Layers, BarChart, Brain,
  Users, CheckCircle2, Settings2, MessageCircle, Target, FileCheck,
} from 'lucide-react'
import { metodologias, artifactLibrary } from '@/lib/metodologias'
import type { Methodology, Stage } from '@/lib/metodologias'

/* ─── Types ─────────────────────────────────────────────────────── */
type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

/* ─── Constants ──────────────────────────────────────────────────── */
const METHOD_META: Record<string, { color: string; Icon: LucideIcon }> = {
  'design-thinking': { color: '#378ADD', Icon: Lightbulb as LucideIcon },
  'doble-diamante':  { color: '#8B5CF6', Icon: Diamond  as LucideIcon },
  'ucd':             { color: '#10B981', Icon: User     as LucideIcon },
  'cinco-planos':    { color: '#F59E0B', Icon: Layers   as LucideIcon },
  'six-sigma':       { color: '#EF4444', Icon: BarChart as LucideIcon },
  'bemate':          { color: '#EC4899', Icon: Brain    as LucideIcon },
}

// Stage colors — same positional mapping for every methodology
// Matches Design Thinking: Empatizar→azul, Definir→verde, Idear→ámbar, Prototipar→morado, Testear→rojo
const STAGE_COLORS = ['#378ADD', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#EC4899']

/* ─── Helpers ────────────────────────────────────────────────────── */
function wa(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

/* ─── ArtifactChip ───────────────────────────────────────────────── */
function ArtifactChip({
  name, color, onClick,
}: { name: string; color: string; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="px-2.5 py-1 rounded-md text-xs font-medium border text-left w-full transition-all duration-150 bg-surface-tertiary"
      style={{
        borderColor: hov ? color : 'var(--color-border-subtle)',
        color: hov ? color : 'var(--color-on-surface-secondary)',
      }}
    >
      {name}
    </button>
  )
}

/* ─── MapView ────────────────────────────────────────────────────── */
function MapView({
  method, onBack, onArtifactClick,
}: { method: Methodology; onBack: () => void; onArtifactClick: (n: string) => void }) {
  return (
    <motion.div
      key="map"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Regresar
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-on-surface mb-1">{method.name} — Mapa completo</h2>
        <p className="text-sm text-on-surface-secondary">{method.description}</p>
      </div>

      <div
        className="overflow-x-auto pb-2"
      >
        <div
          className="grid gap-4 min-w-max"
          style={{ gridTemplateColumns: `repeat(${method.stages.length}, 200px)` }}
        >
          {method.stages.map((stage, i) => {
            const sc = STAGE_COLORS[i] ?? STAGE_COLORS[0]
            return (
              <div key={stage.name} className="flex flex-col gap-2">
                <div
                  className="rounded-xl p-3 border"
                  style={{ backgroundColor: wa(sc, 0.08), borderColor: wa(sc, 0.25) }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: sc }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-xs font-semibold text-on-surface leading-tight">{stage.name}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {stage.artifacts.map((name) => (
                    <ArtifactChip key={name} name={name} color={sc} onClick={() => onArtifactClick(name)} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── StageDetail ────────────────────────────────────────────────── */
function StageDetail({
  stage, stageIndex, total, stageColor, onArtifactClick,
}: {
  stage: Stage
  stageIndex: number
  total: number
  stageColor: string
  onArtifactClick: (n: string) => void
}) {
  return (
    <motion.div
      key={stageIndex}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.22 }}
      className="space-y-4"
    >
      {/* Stage label */}
      <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: stageColor }}>
        Etapa {stageIndex + 1} de {total}
      </p>

      {/* Question card */}
      {stage.question && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl bg-surface-secondary border-l-[3px]"
          style={{ borderLeftColor: stageColor }}
        >
          <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: stageColor }} />
          <p className="text-sm font-medium leading-relaxed italic" style={{ color: stageColor }}>
            {stage.question}
          </p>
        </div>
      )}

      {/* Objective */}
      {stage.objective && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-secondary border border-border-default">
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
          <div className="p-4 rounded-xl bg-surface-secondary border border-border-default">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 shrink-0" style={{ color: stageColor }} />
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase">
                Roles que suelen participar
              </p>
            </div>
            <ul className="space-y-2">
              {stage.roles.map((role) => (
                <li key={role} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: stageColor }} />
                  <span className="text-xs text-on-surface-secondary">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {stage.deliverables && stage.deliverables.length > 0 && (
          <div className="p-4 rounded-xl bg-surface-secondary border border-border-default">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="w-4 h-4 shrink-0" style={{ color: stageColor }} />
              <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase">
                Entregables esperados
              </p>
            </div>
            <ul className="space-y-2">
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

      {/* Artifacts */}
      {stage.artifacts.length > 0 && (
        <div className="p-4 rounded-xl bg-surface-secondary border border-border-default">
          <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
            Artefactos — clic para ver detalle
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.artifacts.map((name) => (
              <button
                key={name}
                onClick={() => onArtifactClick(name)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border-default bg-surface-tertiary text-on-surface-secondary hover:text-on-surface hover:border-accent/30 transition-all"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

/* ─── ArtifactModal ──────────────────────────────────────────────── */
function ArtifactModal({ name, onClose }: { name: string; onClose: () => void }) {
  const artifact = artifactLibrary[name]
  if (!artifact) return null
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg max-h-[85vh] overflow-y-auto"
      >
        <div className="bg-surface-secondary border border-border-default rounded-2xl p-8 shadow-2xl">
          <div className="flex items-start justify-between mb-5">
            <h3 className="text-lg font-bold text-on-surface pr-4 leading-snug">{artifact.name}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface transition-all shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-on-surface text-sm leading-relaxed">{artifact.description}</p>

            {/* When & How — blue tint */}
            <div className="rounded-xl p-4" style={{ backgroundColor: wa('#378ADD', 0.08) }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#378ADD' }}>
                Cuándo y cómo usar
              </p>
              <p className="text-sm leading-relaxed text-on-surface">{artifact.howToUse}</p>
            </div>

            {/* Expected Output — green tint */}
            <div className="rounded-xl p-4" style={{ backgroundColor: wa('#10B981', 0.08) }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#10B981' }}>
                Output esperado
              </p>
              <p className="text-sm leading-relaxed text-on-surface">{artifact.output}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2.5 rounded-xl border border-border-default text-on-surface-secondary text-sm font-medium hover:text-on-surface hover:border-accent/30 transition-all"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </>
  )
}

/* ─── Main component ──────────────────────────────────────────────── */
export function Metodologias() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [openArtifact, setOpenArtifact] = useState<string | null>(null)
  const [showMap, setShowMap] = useState(false)

  const method = metodologias[activeMethod]
  const { color, Icon: MethodIcon } = METHOD_META[method.id] ?? { color: '#378ADD', Icon: Lightbulb as LucideIcon }
  const stage = method.stages[activeStage]
  const stageColor = STAGE_COLORS[activeStage] ?? STAGE_COLORS[0]

  const handleMethodChange = (idx: number) => {
    setActiveMethod(idx)
    setActiveStage(0)
    setShowMap(false)
  }

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Page hero ─────────────────────────────────────────────── */}
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

      {/* ── Method tabs ───────────────────────────────────────────── */}
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
              style={isActive
                ? { backgroundColor: wa(c, 0.15), borderColor: c, color: c }
                : { backgroundColor: 'transparent', borderColor: 'var(--color-border-default)', color: 'var(--color-on-surface-muted)' }
              }
            >
              <TabIcon className="w-3.5 h-3.5 shrink-0" />
              {m.name}
            </button>
          )
        })}
      </motion.div>

      {/* ── Method content ────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={method.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <AnimatePresence mode="wait">
            {showMap ? (
              <MapView
                key="map"
                method={method}
                onBack={() => setShowMap(false)}
                onArtifactClick={setOpenArtifact}
              />
            ) : (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* ── SECTION 1: Method header ─────────────────── */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    {/* Method icon badge */}
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 40, height: 40, backgroundColor: wa(color, 0.12), borderRadius: 10 }}
                    >
                      <MethodIcon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold text-on-surface leading-tight mb-1">
                        {method.name}
                      </h2>
                      <p className="text-on-surface-secondary text-sm leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  {/* Objective card */}
                  <div className="p-5 bg-surface-secondary border border-border-default rounded-xl">
                    <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-2">
                      Objetivo de la metodología
                    </p>
                    <p className="text-on-surface text-sm leading-relaxed">{method.objective}</p>
                  </div>
                </div>

                {/* ── SECTION 2: When to use ───────────────────── */}
                {method.whenToUse && method.whenToUse.length > 0 && (
                  <div
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: wa(color, 0.08), borderColor: wa(color, 0.20) }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Settings2 className="w-4 h-4 shrink-0" style={{ color }} />
                      <p className="text-sm font-semibold text-on-surface">
                        ¿Cuándo usar esta metodología?
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {method.whenToUse.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                          <span className="text-sm leading-relaxed" style={{ color }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ── SECTION 3: Stages & artifacts grid ──────── */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-on-surface">Etapas y artefactos</h3>
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
                          <div key={s.name} className="flex flex-col gap-2">
                            {/* Stage header — clickable, selects stage in Section 4 */}
                            <button
                              onClick={() => setActiveStage(i)}
                              className="flex items-center gap-2 p-3 rounded-xl border transition-all text-left"
                              style={isActive
                                ? { backgroundColor: wa(sc, 0.12), borderColor: sc }
                                : { backgroundColor: 'var(--color-surface-secondary)', borderColor: 'var(--color-border-default)' }
                              }
                            >
                              <span
                                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                                style={{ backgroundColor: sc }}
                              >
                                {i + 1}
                              </span>
                              <span className="text-xs font-semibold text-on-surface leading-tight">
                                {s.name}
                              </span>
                            </button>

                            {/* Artifact chips */}
                            <div className="flex flex-col gap-1">
                              {s.artifacts.slice(0, 6).map((name) => (
                                <ArtifactChip
                                  key={name}
                                  name={name}
                                  color={sc}
                                  onClick={() => setOpenArtifact(name)}
                                />
                              ))}
                              {s.artifacts.length > 6 && (
                                <span className="text-xs text-on-surface-muted px-2 py-1">
                                  +{s.artifacts.length - 6} más
                                </span>
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

                {/* ── SECTION 4: Active stage detail ──────────── */}
                <div className="border-t border-border-default pt-8">
                  {/* Navigation row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold text-white shrink-0"
                        style={{ backgroundColor: stageColor }}
                      >
                        {activeStage + 1}
                      </span>
                      <h3 className="text-xl font-bold text-on-surface">{stage.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveStage((s) => Math.max(s - 1, 0))}
                        disabled={activeStage === 0}
                        className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveStage((s) => Math.min(s + 1, method.stages.length - 1))}
                        disabled={activeStage === method.stages.length - 1}
                        className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-on-surface-muted hover:text-on-surface disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                      >
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
                      onArtifactClick={setOpenArtifact}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* ── Artifact modal ────────────────────────────────────────── */}
      <AnimatePresence>
        {openArtifact && (
          <ArtifactModal
            key={openArtifact}
            name={openArtifact}
            onClose={() => setOpenArtifact(null)}
          />
        )}
      </AnimatePresence>

    </main>
  )
}
