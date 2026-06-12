export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-default py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-on-surface-muted">
        <p>© {year} Pablo Nava. Todos los derechos reservados.</p>
        <p>
          Construido con{' '}
          <span className="text-on-surface-secondary">Next.js</span>
          {', '}
          <span className="text-on-surface-secondary">Tailwind CSS</span>
          {' & '}
          <span className="text-on-surface-secondary">Framer Motion</span>
        </p>
      </div>
    </footer>
  )
}
