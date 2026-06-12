import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pablo Nava — Strategic Design Lead',
  description: 'Strategic Design Lead con 7+ años en banca, producto e IA generativa.',
  keywords: ['strategic design', 'DesignOps', 'UX', 'product design', 'IA', 'portfolio'],
  authors: [{ name: 'Pablo Nava' }],
  openGraph: {
    title: 'Pablo Nava — Strategic Design Lead',
    description: 'Strategic Design Lead con 7+ años en banca, producto e IA generativa.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Nava — Strategic Design Lead',
    description: 'Strategic Design Lead con 7+ años en banca, producto e IA generativa.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
