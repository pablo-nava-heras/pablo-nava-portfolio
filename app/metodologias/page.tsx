import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Metodologias } from '@/components/Metodologias'

export const metadata: Metadata = {
  title: 'Metodologías — Pablo Nava',
  description: 'Los frameworks que estructuran el proceso de diseño estratégico de Pablo Nava.',
}

export default function MetodologiasPage() {
  return (
    <div className="bg-surface min-h-screen">
      <Nav />
      <Metodologias />
      <Footer />
    </div>
  )
}
