import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pablo Nava — Product Designer',
  description:
    'Product designer and frontend developer specializing in complex interfaces, design systems, and user research.',
  keywords: ['product design', 'UX', 'design systems', 'frontend', 'portfolio'],
  authors: [{ name: 'Pablo Nava' }],
  openGraph: {
    title: 'Pablo Nava — Product Designer',
    description: 'Product designer who ships in code.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Nava — Product Designer',
    description: 'Product designer who ships in code.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
