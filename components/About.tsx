'use client'

import { motion } from 'framer-motion'
import { about, skills } from '@/lib/data'
import { Badge } from '@/components/ui/Badge'

export function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-border-default">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
              {about.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface mb-8">
              {about.heading}
            </h2>
            <div className="space-y-4 text-on-surface leading-relaxed">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="space-y-8"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
