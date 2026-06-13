'use client'

import { motion } from 'framer-motion'

const principles = [
  {
    number: '01',
    title: 'Claridad operativa',
    description: 'Transformo complejidad en sistemas claros, accionables y escalables. Mi especialidad es crear orden donde hay caos.',
  },
  {
    number: '02',
    title: 'Estrategia basada en datos',
    description: 'Conecto métricas norte, OKRs y KPIs desde el origen. Cada decisión de diseño tiene una razón medible de ser.',
  },
  {
    number: '03',
    title: 'IA como amplificador',
    description: 'Integro IA generativa en cada etapa del proceso: síntesis, generación de alternativas, automatización de DesignOps. No como atajo, sino como segunda capa de pensamiento.',
  },
]

export function HowIWork() {
  return (
    <section className="px-6 py-24 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Cómo trabajo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface">
            Principios que guían cada proyecto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="p-6 bg-surface-secondary border border-border-default rounded-2xl"
            >
              <span className="block text-5xl font-bold tabular-nums leading-none mb-5 text-accent/25 select-none">
                {p.number}
              </span>
              <h3 className="text-base font-semibold text-on-surface mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-on-surface-secondary leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
