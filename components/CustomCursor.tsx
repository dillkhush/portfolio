'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    const click = () => {
      cursor.classList.add('scale-150')
      setTimeout(() => cursor.classList.remove('scale-150'), 150)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', click)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', click)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full pointer-events-none bg-blue-500 mix-blend-difference transition-transform duration-150 ease-out"
    />
  )
}
