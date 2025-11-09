'use client'

import { useEffect } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

export default function useKonamiCode(callback: () => void) {
  useEffect(() => {
    const buffer: string[] = []

    const onKeyDown = (e: KeyboardEvent) => {
      buffer.push(e.key)
      if (buffer.length > KONAMI_CODE.length) {
        buffer.shift()
      }

      const matched =
        buffer.length === KONAMI_CODE.length &&
        buffer.every((key, index) => {
          const expected = KONAMI_CODE[index]
          return key.toLowerCase() === expected.toLowerCase()
        })

      if (matched) {
        buffer.length = 0
        callback()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [callback]) // Only re-run when callback changes
}
