'use client'

const highlights = [
  '12+ product launches',
  'Design systems for 5 ecosystems',
  'Lighthouse 99 / 92 performance',
  'Motion-led storytelling',
  'Web security best practices',
  'Retained by hyper-growth teams',
]

export default function SignatureMarquee() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_70%)] opacity-70" />
      <div className="card-glass relative mx-auto max-w-6xl px-6 py-6 md:px-10">
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
        <div className="signature-marquee">
          <div className="signature-marquee__track">
            {highlights.concat(highlights).map((item, idx) => (
              <span key={`${item}-${idx}`} className="signature-marquee__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
