export interface Metric {
  label: string
  value: string
  trend: 'up' | 'down' | 'neutral'
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  company: string
  role: string
  duration: string
  year: string
  tags: string[]
  metrics: Metric[]
  coverColor: string
  accentColor: string
  featured: boolean
  problem?: string
  challenge?: string
  solution?: string
  results?: string[]
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface HeroContent {
  badge: string
  headline: string
  subtitle: string
  tagline: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface WorkPrinciple {
  title: string
  description: string
}

export interface EducationItem {
  degree: string
  institution: string
  year: string
  type: 'degree' | 'certification' | 'course'
}

export interface AboutContent {
  sectionLabel: string
  heading: string
  bio: string[]
  principles: WorkPrinciple[]
  education: EducationItem[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
}
