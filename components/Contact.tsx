'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface mb-6">
              Hablemos.
            </h2>
            <p className="text-on-surface leading-relaxed mb-10">
              Si tienes un proyecto, una oportunidad o simplemente quieres hablar de diseño
              estratégico o IA — escríbeme. Suelo responder en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                href="mailto:navapablito@gmail.com"
                variant="primary"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                navapablito@gmail.com
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 text-sm text-on-surface-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
