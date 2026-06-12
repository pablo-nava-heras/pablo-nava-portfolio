import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Metodologías — Pablo Nava',
  description: 'Próximamente: el proceso y las metodologías detrás del trabajo.',
}

export default function MetodologiasPage() {
  return (
    <div className="bg-surface min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-on-surface-muted hover:text-on-surface transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Inicio
        </Link>

        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
          Metodologías
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-6">
          Próximamente
        </h1>
        <p className="text-on-surface leading-relaxed max-w-xl">
          Aquí documentaré el proceso y las metodologías que uso para estructurar
          funciones de diseño, definir estrategia de producto e integrar IA generativa
          en flujos de trabajo reales.
        </p>
      </main>
      <Footer />
    </div>
  )
}
