import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { HowIWork } from '@/components/HowIWork'
import { CaseStudies } from '@/components/CaseStudies'
import { Testimonials } from '@/components/Testimonials'
import { HomeCTA } from '@/components/HomeCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <CaseStudies />
        <Testimonials />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  )
}
