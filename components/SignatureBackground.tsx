'use client'

import { useEffect, useMemo, useRef, type CSSProperties } from 'react'
import { siteConfig } from '@/content'

type Variant = 'hero' | 'about' | 'caseStudy' | 'default'

type Layer = {
  className: string
  style: CSSProperties
  speed?: number
}

const layerSets: Record<Variant, Layer[]> = {
  hero: [
    {
      className: 'signature-layer signature-layer--primary',
      style: {
        background:
          'radial-gradient(circle at 18% 22%, var(--signature-primary), transparent 62%)',
        width: '70vw',
        height: '70vw',
        top: '-25vh',
        left: '-15vw',
      },
      speed: -0.08,
    },
    {
      className: 'signature-layer signature-layer--secondary',
      style: {
        background:
          'radial-gradient(circle at 82% 28%, var(--signature-secondary), transparent 58%)',
        width: '60vw',
        height: '60vw',
        top: '-10vh',
        right: '-20vw',
      },
      speed: -0.04,
    },
    {
      className: 'signature-layer signature-layer--tertiary',
      style: {
        background:
          'radial-gradient(circle at 45% 78%, var(--signature-tertiary), transparent 62%)',
        width: '68vw',
        height: '68vw',
        bottom: '-35vh',
        left: '20vw',
      },
      speed: -0.02,
    },
  ],
  about: [
    {
      className: 'signature-layer signature-layer--primary',
      style: {
        background:
          'radial-gradient(circle at 16% 18%, var(--signature-primary), transparent 60%)',
        width: '60vw',
        height: '60vw',
        top: '-15vh',
        left: '-20vw',
      },
      speed: -0.05,
    },
    {
      className: 'signature-layer signature-layer--secondary',
      style: {
        background:
          'radial-gradient(circle at 84% 75%, var(--signature-secondary), transparent 58%)',
        width: '54vw',
        height: '54vw',
        bottom: '-30vh',
        right: '-18vw',
      },
      speed: -0.03,
    },
  ],
  caseStudy: [
    {
      className: 'signature-layer signature-layer--primary',
      style: {
        background:
          'radial-gradient(circle at 28% 24%, var(--signature-primary), transparent 58%)',
        width: '66vw',
        height: '66vw',
        top: '-18vh',
        left: '-12vw',
      },
      speed: -0.07,
    },
    {
      className: 'signature-layer signature-layer--secondary',
      style: {
        background:
          'radial-gradient(circle at 72% 36%, var(--signature-secondary), transparent 55%)',
        width: '58vw',
        height: '58vw',
        top: '-6vh',
        right: '-14vw',
      },
      speed: -0.045,
    },
    {
      className: 'signature-layer signature-layer--tertiary',
      style: {
        background:
          'radial-gradient(circle at 40% 82%, var(--signature-tertiary), transparent 60%)',
        width: '62vw',
        height: '62vw',
        bottom: '-30vh',
        left: '18vw',
      },
      speed: -0.025,
    },
  ],
  default: [
    {
      className: 'signature-layer signature-layer--primary',
      style: {
        background:
          'radial-gradient(circle at 20% 20%, var(--signature-primary), transparent 62%)',
        width: '65vw',
        height: '65vw',
        top: '-22vh',
        left: '-18vw',
      },
      speed: -0.06,
    },
    {
      className: 'signature-layer signature-layer--secondary',
      style: {
        background:
          'radial-gradient(circle at 80% 30%, var(--signature-secondary), transparent 55%)',
        width: '58vw',
        height: '58vw',
        top: '-8vh',
        right: '-16vw',
      },
      speed: -0.03,
    },
  ],
}

interface SignatureBackgroundProps {
  variant?: Variant
  className?: string
}

export default function SignatureBackground({
  variant = 'default',
  className = '',
}: SignatureBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef(0)

  const initials = useMemo(() => {
    const parts = siteConfig.name.split(' ').filter(Boolean)
    return parts
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('')
      .slice(0, 2)
  }, [])

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return

    const layers = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'))
    let frame = 0

    const update = () => {
      const scrollY = window.scrollY
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax ?? '0')
        layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`
      })
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      layers.forEach((layer) => {
        layer.style.transform = ''
      })
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = window.devicePixelRatio || 1

    const ribbons = Array.from({ length: variant === 'hero' ? 5 : 3 }).map((_, index) => ({
      hue: 208 + index * 16,
      amplitude: 90 + index * 38,
      frequency: 0.0008 + index * 0.00025,
      speed: 0.00042 + index * 0.00018,
      thickness: 1.1 + index * 0.35,
      phase: index * 140,
    }))

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'lighter'
    }

    resize()

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(2, 6, 17, 0.18)'
      ctx.fillRect(0, 0, width, height)

      const pointerFactorX = ((pointerRef.current.x || width / 2) / width - 0.5) * 2
      const pointerFactorY = ((pointerRef.current.y || height / 2) / height - 0.5) * 2

      ribbons.forEach((ribbon, idx) => {
        ctx.beginPath()
        const amplitude = ribbon.amplitude + pointerFactorY * 100
        const speed = ribbon.speed * (variant === 'hero' ? 1.1 : 0.9)

        for (let x = -60; x <= width + 60; x += 10) {
          const angle = ribbon.phase + x * ribbon.frequency + time * speed
          const y =
            height / 2 +
            Math.sin(angle) * amplitude +
            Math.cos(angle * 0.85 + pointerFactorX * 2.4) * 28

          if (x === -60) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(
          0,
          `rgba(${88 + idx * 14}, ${146 + idx * 18}, ${255 - idx * 8}, ${variant === 'hero' ? 0.38 : 0.26})`,
        )
        gradient.addColorStop(
          1,
          `rgba(${214 - idx * 18}, ${122 + idx * 18}, ${255 - idx * 16}, ${variant === 'hero' ? 0.18 : 0.12})`,
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = ribbon.thickness
        ctx.lineJoin = 'round'
        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    const handleResize = () => {
      resize()
    }

    const handlePointer = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handlePointer)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handlePointer)
      cancelAnimationFrame(animationRef.current)
    }
  }, [variant])

  const layers = layerSets[variant] ?? layerSets.default

  return (
    <div ref={ref} className={`signature-background ${className}`}>
      <div className="signature-background__gradient" />
      <canvas ref={canvasRef} className="signature-background__canvas" />

      {layers.map((layer, index) => (
        <span
          key={index}
          className={layer.className}
          style={layer.style}
          data-parallax={layer.speed ?? 0}
        />
      ))}

      <div className="signature-background__grid" />
      {(variant === 'hero' || variant === 'caseStudy') && (
        <div className="signature-background__glyph">
          <span className="signature-background__glyph-text">{initials}</span>
          <span className="signature-background__glyph-ring" />
        </div>
      )}
      <div className="signature-background__noise" />
    </div>
  )
}
