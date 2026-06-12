import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CaseStudyDetail } from '@/components/CaseStudyDetail'
import { caseStudies } from '@/lib/data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: `${study.title} — Pablo Nava`,
    description: study.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) redirect('/proyectos')

  const idx = caseStudies.findIndex((s) => s.slug === slug)
  const prev = idx > 0 ? caseStudies[idx - 1] : null
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null

  return (
    <div className="bg-surface min-h-screen">
      <Nav />
      <CaseStudyDetail study={study} prev={prev} next={next} />
      <Footer />
    </div>
  )
}
