// components/useKonamiCode.tsx
'use client'

import { useEffect, useState } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

export default function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI_CODE.length)
        if (JSON.stringify(next) === JSON.stringify(KONAMI_CODE)) {
          callback()
        }
        return next
      })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [callback])
}
