'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[currentIndex]

  return (
    <section className="py-32 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Referencias
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface">
            Lo que dicen quienes trabajaron conmigo
          </h2>
        </motion.div>

        <div>
          {/* Card */}
          <div className="max-w-2xl mx-auto mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="bg-surface-secondary border border-border-default rounded-2xl p-8 sm:p-10"
              >
                {/* Quote mark */}
                <span
                  className="block text-7xl font-serif leading-none select-none mb-2"
                  style={{ color: '#378ADD' }}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-on-surface text-base sm:text-lg leading-relaxed mb-8">
                  {t.text}
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-6 border-t border-border-subtle">
                  <div className="w-9 h-9 rounded-full bg-surface-tertiary border border-border-default flex items-center justify-center text-accent font-semibold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-on-surface text-sm font-medium">{t.name}</p>
                    <p className="text-on-surface-muted text-xs mt-0.5">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={goPrev}
              aria-label="Testimonio anterior"
              className="w-9 h-9 rounded-full border border-border-default text-on-surface-muted hover:text-on-surface hover:border-accent transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-5 h-2 bg-accent'
                      : 'w-2 h-2 bg-border-default hover:bg-on-surface-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Testimonio siguiente"
              className="w-9 h-9 rounded-full border border-border-default text-on-surface-muted hover:text-on-surface hover:border-accent transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
