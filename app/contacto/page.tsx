import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contacto — Pablo Nava',
  description: 'Hablemos de tu reto estratégico de diseño.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
          Contacto
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-10">
          Hablemos.
        </h1>

        <div className="space-y-4 mb-16">
          <Button
            href="mailto:navapablito@gmail.com"
            variant="primary"
            className="gap-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Mail className="w-4 h-4" />
            navapablito@gmail.com
          </Button>

          <Button
            href="https://wa.me/5255211302277"
            variant="secondary"
            className="gap-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <MessageCircle className="w-4 h-4" />
            +52 55 2113 0277
          </Button>
        </div>

        <div className="border-t border-border-default pt-8">
          <p className="text-xs font-semibold text-on-surface-muted tracking-widest uppercase mb-4">
            Redes
          </p>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-on-surface hover:text-accent transition-colors"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
