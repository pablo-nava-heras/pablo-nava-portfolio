'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HomeCTA() {
  return (
    <section className="py-32 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface mb-8">
            ¿Tienes un reto estratégico de diseño?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contacto" variant="primary">
              Hablemos
            </Button>
            <Button href="/sobre" variant="secondary">
              Conoce mi enfoque
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
