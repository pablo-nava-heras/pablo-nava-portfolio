'use client'

import { useState } from 'react'

export function ProfilePhoto() {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-surface-secondary border border-border-default flex items-center justify-center shrink-0">
        <span className="text-2xl font-bold text-accent select-none">PN</span>
      </div>
    )
  }

  return (
    <img
      src="/pablo.jpg"
      alt="Pablo Nava"
      onError={() => setError(true)}
      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border border-border-default shrink-0"
    />
  )
}
