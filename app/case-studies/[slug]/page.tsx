import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SignatureBackground from '@/components/SignatureBackground'
import { projects } from '@/content'

const caseStudyProjects = projects.filter((project) => project.caseStudy)

const projectMap = new Map(caseStudyProjects.map((project) => [project.slug, project]))

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projectMap.get(slug)
  if (!project || !project.caseStudy) {
    return {
      title: 'Case study',
    }
  }

  return {
    title: `${project.title} – Case Study`,
    description: project.caseStudy.overview,
    openGraph: {
      title: `${project.title} – Case Study`,
      description: project.caseStudy.overview,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectMap.get(slug)
  if (!project || !project.caseStudy) {
    notFound()
  }

  const { caseStudy } = project
  const heroMedia = caseStudy.heroMedia

  return (
    <main className="relative overflow-hidden pb-20">
      <SignatureBackground variant="caseStudy" className="absolute inset-0" />

      <article className="relative z-10 mx-auto flex max-w-5xl flex-col gap-16 px-6 pt-40">
        <div className="flex flex-col gap-6 text-left">
          <nav className="text-xs uppercase tracking-[0.4em] text-blue-200">
            <Link href="/">Home</Link>
            <span className="mx-3 text-slate-500">/</span>
            <Link href="/case-studies" className="text-slate-400 hover:text-blue-200 transition">
              Case Studies
            </Link>
            <span className="mx-3 text-slate-500">/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>

          <div className="space-y-4">
            <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-semibold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-blue-200">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {heroMedia && (
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-2xl shadow-blue-500/20">
            {heroMedia.type === 'video' ? (
              <video
                src={heroMedia.src}
                poster={heroMedia.poster}
                className="w-full"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={heroMedia.src}
                alt={heroMedia.alt ?? `${project.title} hero visual`}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            )}
          </div>
        )}

        <section className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{caseStudy.overview}</p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-xs uppercase tracking-[0.4em] text-blue-200">Problem</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {caseStudy.problem.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-xs uppercase tracking-[0.4em] text-blue-200">Solution</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {caseStudy.solution.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Results</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {caseStudy.results.map((result) => (
                <div
                  key={result.metric}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left"
                >
                  <p className="text-sm font-semibold text-white">{result.metric}</p>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{result.detail}</p>
                </div>
              ))}
            </div>
            {caseStudy.stackNotes && (
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-xs uppercase tracking-[0.4em] text-blue-200">Key Decisions</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {caseStudy.stackNotes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white">Timeline</h2>
          <div className="mt-8 space-y-6 border-l border-white/10 pl-8">
            {caseStudy.timeline.map((step) => (
              <div key={step.phase} className="relative">
                <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                <h3 className="text-sm font-semibold text-white">{step.phase}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-10 text-left backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white">Explore the build</h2>
          <div className="flex flex-wrap gap-4 text-sm text-blue-200">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2 transition hover:bg-white/10"
              >
                View live product
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2 transition hover:bg-white/10"
              >
                View source code
              </a>
            )}
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Start a project like this
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
