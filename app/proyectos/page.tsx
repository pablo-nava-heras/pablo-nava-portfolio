import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AllProjects } from '@/components/AllProjects'

export const metadata: Metadata = {
  title: 'Proyectos — Pablo Nava',
  description: '7+ años de trabajo en banca, producto e IA generativa.',
}

export default function ProyectosPage() {
  return (
    <div className="bg-surface min-h-screen">
      <Nav />
      <AllProjects />
      <Footer />
    </div>
  )
}
