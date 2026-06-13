import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui/Badge'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { about, skills } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Sobre mí — Pablo Nava',
  description:
    'Strategic Design Lead con 7+ años en banca y servicios financieros mexicanos.',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <header className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 mb-6">
            <ProfilePhoto />
            <div className="flex-1 min-w-0">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
                {about.sectionLabel}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-4 leading-tight">
                {about.heading}
              </h1>
              <p className="text-on-surface leading-relaxed">{about.bio[0]}</p>
            </div>
          </div>
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

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-widest uppercase mb-8">
            Experiencia
          </h2>
          <div className="space-y-0">
            {[
              {
                role: 'Strategic Design Lead',
                company: 'Coppel',
                period: 'Mar 2024 – Mar 2026',
                description: 'Fundé el primer Centro de Excelencia de Diseño Estratégico integrando Producto, UX y DesignOps bajo gobernanza unificada con OKRs, KPIs y playbooks.',
              },
              {
                role: 'Product Specialist',
                company: 'Grupo Financiero Banorte',
                period: 'Dic 2021 – Mar 2024',
                description: 'Fundé la primera célula estratégica de producto Nómina. Definí NSM, OKRs y KPIs alineados con alta dirección para segmentos PyME y Empresarial.',
              },
              {
                role: 'CX/UX Design Lead',
                company: 'Grupo Financiero Banorte',
                period: 'Feb 2018 – Dic 2021',
                description: 'Lideré iniciativas de CX para plataformas digitales PyME y Empresarial. Incrementé NPS de 68 a 74 mediante optimización de journeys.',
              },
              {
                role: 'CX Analyst',
                company: 'Grupo Financiero Banorte',
                period: 'Ago 2016 – Ene 2018',
                description: 'Análisis de NPS, mapeo de journeys y diagnóstico de fricciones en canales digitales y físicos. Base de datos que fundamentó la estrategia CX de banca empresarial.',
              },
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5">
                {/* Dot + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 bg-border-default mt-2" style={{ minHeight: 40 }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <p className="text-on-surface font-semibold leading-snug">{item.role}</p>
                  <p className="text-xs text-on-surface-muted mt-0.5 mb-2">
                    {item.company} · {item.period}
                  </p>
                  <p className="text-sm text-on-surface-secondary leading-relaxed">{item.description}</p>
                </div>
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
