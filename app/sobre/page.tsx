import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui/Badge'
import { about, skills } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Sobre mí — Pablo Nava',
  description:
    'Strategic Design Lead con 7+ años en banca y servicios financieros mexicanos.',
}

export default function SobrePage() {
  return (
    <div className="bg-surface min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <header className="mb-20">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
            {about.sectionLabel}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-6 leading-tight">
            {about.heading}
          </h1>
          <p className="text-on-surface leading-relaxed max-w-2xl">{about.bio[0]}</p>
        </header>

        {/* Principles */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-8">
            Principios de trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {about.principles.map((principle, i) => (
              <div
                key={i}
                className="p-6 bg-surface-secondary border border-border-default rounded-xl"
              >
                <p className="text-on-surface-muted text-xs font-mono mb-3">0{i + 1}</p>
                <h3 className="text-on-surface font-semibold mb-2">{principle.title}</h3>
                <p className="text-on-surface text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-8">
            Habilidades
          </h2>
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-8">
            Educación y certificaciones
          </h2>
          <div className="space-y-4">
            {about.education.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between py-4 border-b border-border-subtle last:border-0"
              >
                <div>
                  <p className="text-on-surface font-medium">{item.degree}</p>
                  <p className="text-on-surface-muted text-sm mt-0.5">{item.institution}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <Badge variant={item.type === 'degree' ? 'accent' : 'default'}>
                    {item.type !== 'degree'
                      ? item.type === 'certification' ? 'Certificación' : 'Curso'
                      : item.degree.startsWith('Maestría') ? 'Maestría'
                      : item.degree.startsWith('Ingeniería') ? 'Ingeniería'
                      : 'Licenciatura'}
                  </Badge>
                  <span className="text-on-surface-muted text-sm">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
