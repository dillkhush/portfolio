import Link from 'next/link'
import Image from 'next/image'
import SignatureBackground from '@/components/SignatureBackground'
import { projects } from '@/content'

const caseStudyProjects = projects.filter((project) => project.caseStudy)

export const metadata = {
  title: 'Case Studies',
  description:
    'Deep dives into flagship products I’ve built — from discovery to ship to measurable outcomes.',
}

export default function CaseStudyIndexPage() {
  return (
    <main className="relative overflow-hidden pb-24">
      <SignatureBackground variant="caseStudy" className="absolute inset-0" />

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-40">
        <header className="space-y-6 text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Case studies</p>
          <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold text-white">
            The work behind the highlights
          </h1>
          <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
            Explore the strategy, craft, and outcomes for select products. Each story covers the
            problems we tackled, the systems we built, and the results those teams now rely on.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {caseStudyProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-5 left-6 right-6 z-20 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-blue-200">{project.title}</p>
                  <p className="text-sm text-slate-200 line-clamp-2">{project.summary}</p>
                </div>
              </div>

              <div className="relative z-20 space-y-5 p-8">
                <p className="text-sm text-slate-300 line-clamp-3">{project.caseStudy?.overview}</p>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
