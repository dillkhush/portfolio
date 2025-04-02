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
    const onKeyDown = (e: KeyboardEvent) => {
      // Maintain the pressed keys in an array
      const pressedKeys: string[] = [e.key];

      // Check if the pressed keys match the KONAMI_CODE in sequence
      if (pressedKeys.join('') === KONAMI_CODE.join('')) {
        callback();
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [callback]) // Only re-run when callback changes
}
