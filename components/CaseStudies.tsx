'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/data'
import { CaseStudyCard } from '@/components/CaseStudyCard'

const featured = caseStudies.filter((s) => s.featured)

export function CaseStudies() {
  return (
    <section id="trabajo" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
              Proyectos destacados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface">
              Casos de estudio
            </h2>
          </div>

          <Link
            href="/proyectos"
            className="group hidden sm:inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors shrink-0 ml-8"
          >
            Ver todos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))' }}
        >
          {featured.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* Mobile "Ver todos" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 sm:hidden"
        >
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
